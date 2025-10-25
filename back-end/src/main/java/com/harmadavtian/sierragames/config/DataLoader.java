package com.harmadavtian.sierragames.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * Simple data loader that populates the database from JSON files
 * using JdbcTemplate to avoid entity complexity
 */
@Component
public class DataLoader {

    private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void loadData() {
        try {
            loadGamesIfEmpty();
            loadScreenshotsIfEmpty();
        } catch (Exception e) {
            logger.error("Error loading data", e);
            throw new RuntimeException("Failed to load data", e);
        }
    }

    private void loadGamesIfEmpty() throws IOException {
        Long gameCount = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM games", Long.class);
        if (gameCount != null && gameCount > 0) {
            logger.info("Games table already contains {} records, skipping data loading", gameCount);
            return;
        }

        logger.info("Games table is empty, loading initial game data...");

        ClassPathResource resource = new ClassPathResource("data/games.json");
        try (InputStream inputStream = resource.getInputStream()) {
            List<Map<String, Object>> gamesData = objectMapper.readValue(
                    inputStream,
                    new TypeReference<List<Map<String, Object>>>() {
                    });

            for (Map<String, Object> gameData : gamesData) {
                insertGame(gameData);
            }

            logger.info("Successfully loaded {} games from games.json", gamesData.size());
        }
    }

    private void loadScreenshotsIfEmpty() throws IOException {
        Long screenshotCount = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM screenshots", Long.class);
        if (screenshotCount != null && screenshotCount > 0) {
            logger.info("Screenshots table already contains {} records, skipping data loading", screenshotCount);
            return;
        }

        logger.info("Screenshots table is empty, loading initial screenshot data...");

        ClassPathResource resource = new ClassPathResource("data/screenshots.json");
        try (InputStream inputStream = resource.getInputStream()) {
            List<Map<String, Object>> screenshotsData = objectMapper.readValue(
                    inputStream,
                    new TypeReference<List<Map<String, Object>>>() {
                    });

            for (Map<String, Object> screenshotData : screenshotsData) {
                insertScreenshot(screenshotData);
            }

            logger.info("Successfully loaded {} screenshots from screenshots.json", screenshotsData.size());
        }
    }

    private void insertGame(Map<String, Object> gameData) throws IOException {
        LocalDateTime now = LocalDateTime.now();

        String sql = """
                INSERT INTO games (
                    id, title, series, series_name, year, developer,
                    short_description, long_description, characters, features,
                    fan_sites, screenshots, videos, status, featured,
                    created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """;

        jdbcTemplate.update(sql,
                gameData.get("id"),
                gameData.get("title"),
                gameData.get("series"),
                gameData.get("seriesName"),
                gameData.get("year"),
                gameData.get("developer"),
                gameData.get("shortDescription"),
                gameData.get("longDescription"),
                objectMapper.writeValueAsString(gameData.get("characters")),
                objectMapper.writeValueAsString(gameData.get("features")),
                objectMapper.writeValueAsString(gameData.get("fanSites")),
                objectMapper.writeValueAsString(gameData.get("screenshots")),
                objectMapper.writeValueAsString(gameData.get("videos")),
                gameData.get("status"),
                gameData.get("featured"),
                now,
                now);

        logger.debug("Inserted game: {}", gameData.get("title"));
    }

    private void insertScreenshot(Map<String, Object> screenshotData) {
        LocalDateTime now = LocalDateTime.now();

        String sql = """
                INSERT INTO screenshots (
                    game_id, title, description, filename, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?)
                """;

        jdbcTemplate.update(sql,
                screenshotData.get("gameId"),
                screenshotData.get("title"),
                screenshotData.get("description"),
                screenshotData.get("filename"),
                now,
                now);

        logger.debug("Inserted screenshot: {}", screenshotData.get("filename"));
    }
}