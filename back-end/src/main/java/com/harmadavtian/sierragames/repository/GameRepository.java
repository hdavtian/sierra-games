package com.harmadavtian.sierragames.repository;

import com.harmadavtian.sierragames.model.Game;
import com.harmadavtian.sierragames.model.GameStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, String> {

    // Find games by status
    List<Game> findByStatus(GameStatus status);

    // Find games by series
    List<Game> findBySeriesOrderByYearAsc(String series);

    // Find games by year
    List<Game> findByYearOrderByTitleAsc(Integer year);

    // Find games by year range
    List<Game> findByYearBetweenOrderByYearAsc(Integer startYear, Integer endYear);

    // Search games by title (case insensitive)
    @Query("SELECT g FROM Game g WHERE LOWER(g.title) LIKE LOWER(CONCAT('%', :title, '%'))")
    List<Game> findByTitleContainingIgnoreCase(@Param("title") String title);

    // Find published games only
    @Query("SELECT g FROM Game g WHERE g.status = 'PUBLISHED' ORDER BY g.year ASC")
    List<Game> findAllPublishedGames();

    // Find published games by series
    @Query("SELECT g FROM Game g WHERE g.series = :series AND g.status = 'PUBLISHED' ORDER BY g.year ASC")
    List<Game> findPublishedGamesBySeries(@Param("series") String series);

    // Find a published game by ID
    @Query("SELECT g FROM Game g WHERE g.id = :id AND g.status = 'PUBLISHED'")
    Optional<Game> findPublishedGameById(@Param("id") String id);

    // Find featured games
    @Query("SELECT g FROM Game g WHERE g.featured = true AND g.status = 'PUBLISHED' ORDER BY g.year ASC")
    List<Game> findFeaturedGames();

    // Count games by series
    long countBySeries(String series);

    // Count published games
    long countByStatus(GameStatus status);
}