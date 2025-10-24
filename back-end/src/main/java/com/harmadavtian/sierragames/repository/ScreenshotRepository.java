package com.harmadavtian.sierragames.repository;

import com.harmadavtian.sierragames.model.Screenshot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ScreenshotRepository extends JpaRepository<Screenshot, Long> {

    /**
     * Find all screenshots for a specific game
     */
    List<Screenshot> findByGameIdOrderByIdAsc(String gameId);

    /**
     * Find all screenshots for a specific game with custom query
     */
    @Query("SELECT s FROM Screenshot s WHERE s.gameId = :gameId ORDER BY s.id")
    List<Screenshot> findScreenshotsByGameId(@Param("gameId") String gameId);

    /**
     * Count screenshots for a specific game
     */
    long countByGameId(String gameId);

    /**
     * Check if a game has any screenshots
     */
    boolean existsByGameId(String gameId);

    /**
     * Find screenshot by filename
     */
    Screenshot findByFilename(String filename);
}