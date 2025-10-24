package com.harmadavtian.sierragames.service;

import com.harmadavtian.sierragames.model.Screenshot;
import com.harmadavtian.sierragames.repository.ScreenshotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ScreenshotService {

    @Autowired
    private ScreenshotRepository screenshotRepository;

    /**
     * Get all screenshots for a specific game
     */
    public List<Screenshot> getScreenshotsByGameId(String gameId) {
        return screenshotRepository.findByGameIdOrderByIdAsc(gameId);
    }

    /**
     * Get a screenshot by ID
     */
    public Optional<Screenshot> getScreenshotById(Long id) {
        return screenshotRepository.findById(id);
    }

    /**
     * Save a new screenshot
     */
    public Screenshot saveScreenshot(Screenshot screenshot) {
        return screenshotRepository.save(screenshot);
    }

    /**
     * Update an existing screenshot
     */
    public Screenshot updateScreenshot(Screenshot screenshot) {
        return screenshotRepository.save(screenshot);
    }

    /**
     * Delete a screenshot by ID
     */
    public void deleteScreenshot(Long id) {
        screenshotRepository.deleteById(id);
    }

    /**
     * Count screenshots for a game
     */
    public long countScreenshotsForGame(String gameId) {
        return screenshotRepository.countByGameId(gameId);
    }

    /**
     * Check if a game has screenshots
     */
    public boolean gameHasScreenshots(String gameId) {
        return screenshotRepository.existsByGameId(gameId);
    }

    /**
     * Get all screenshots
     */
    public List<Screenshot> getAllScreenshots() {
        return screenshotRepository.findAll();
    }
}