package com.harmadavtian.sierragames.service;

import com.harmadavtian.sierragames.model.Game;
import com.harmadavtian.sierragames.model.GameStatus;
import com.harmadavtian.sierragames.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    // Public API methods (for frontend)
    @Transactional(readOnly = true)
    public List<Game> getAllPublishedGames() {
        return gameRepository.findAllPublishedGames();
    }

    @Transactional(readOnly = true)
    public Optional<Game> getPublishedGameById(String id) {
        return gameRepository.findPublishedGameById(id);
    }

    @Transactional(readOnly = true)
    public List<Game> getPublishedGamesBySeries(String series) {
        return gameRepository.findPublishedGamesBySeries(series);
    }

    @Transactional(readOnly = true)
    public List<Game> searchPublishedGamesByTitle(String title) {
        return gameRepository.findByTitleContainingIgnoreCase(title)
                .stream()
                .filter(game -> game.getStatus() == GameStatus.PUBLISHED)
                .toList();
    }

    // Admin methods (for admin dashboard)
    @Transactional(readOnly = true)
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Game> getGameById(String id) {
        return gameRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Game> getGamesByStatus(GameStatus status) {
        return gameRepository.findByStatus(status);
    }

    public Game createGame(Game game) {
        // Ensure timestamps are set
        if (game.getCreatedAt() == null) {
            game.setCreatedAt(java.time.LocalDateTime.now());
        }
        game.setUpdatedAt(java.time.LocalDateTime.now());

        return gameRepository.save(game);
    }

    public Game updateGame(String id, Game gameDetails) {
        return gameRepository.findById(id)
                .map(existingGame -> {
                    // Update fields
                    existingGame.setTitle(gameDetails.getTitle());
                    existingGame.setSeries(gameDetails.getSeries());
                    existingGame.setSeriesName(gameDetails.getSeriesName());
                    existingGame.setYear(gameDetails.getYear());
                    existingGame.setDeveloper(gameDetails.getDeveloper());
                    existingGame.setShortDescription(gameDetails.getShortDescription());
                    existingGame.setLongDescription(gameDetails.getLongDescription());
                    existingGame.setCharacters(gameDetails.getCharacters());
                    existingGame.setFeatures(gameDetails.getFeatures());
                    existingGame.setFanSites(gameDetails.getFanSites());
                    existingGame.setScreenshots(gameDetails.getScreenshots());
                    existingGame.setVideos(gameDetails.getVideos());
                    existingGame.setStatus(gameDetails.getStatus());
                    // updatedAt will be set automatically by @PreUpdate

                    return gameRepository.save(existingGame);
                })
                .orElseThrow(() -> new RuntimeException("Game not found with id: " + id));
    }

    public Game updateGameStatus(String id, GameStatus status) {
        return gameRepository.findById(id)
                .map(game -> {
                    game.setStatus(status);
                    return gameRepository.save(game);
                })
                .orElseThrow(() -> new RuntimeException("Game not found with id: " + id));
    }

    public void deleteGame(String id) {
        if (!gameRepository.existsById(id)) {
            throw new RuntimeException("Game not found with id: " + id);
        }
        gameRepository.deleteById(id);
    }

    // Statistics methods
    @Transactional(readOnly = true)
    public long getPublishedGameCount() {
        return gameRepository.countByStatus(GameStatus.PUBLISHED);
    }

    @Transactional(readOnly = true)
    public long getGameCountBySeries(String series) {
        return gameRepository.countBySeries(series);
    }

    @Transactional(readOnly = true)
    public List<Game> getGamesByYear(Integer year) {
        return gameRepository.findByYearOrderByTitleAsc(year);
    }

    @Transactional(readOnly = true)
    public List<Game> getGamesByYearRange(Integer startYear, Integer endYear) {
        return gameRepository.findByYearBetweenOrderByYearAsc(startYear, endYear);
    }
}