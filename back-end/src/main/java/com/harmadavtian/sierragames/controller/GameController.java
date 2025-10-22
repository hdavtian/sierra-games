package com.harmadavtian.sierragames.controller;

import com.harmadavtian.sierragames.model.Game;
import com.harmadavtian.sierragames.model.GameStatus;
import com.harmadavtian.sierragames.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:3000" })
public class GameController {

    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    // Public API endpoints (for frontend)
    @GetMapping("/games")
    public ResponseEntity<List<Game>> getAllPublishedGames() {
        List<Game> games = gameService.getAllPublishedGames();
        return ResponseEntity.ok(games);
    }

    @GetMapping("/games/{id}")
    public ResponseEntity<Game> getPublishedGameById(@PathVariable String id) {
        Optional<Game> game = gameService.getPublishedGameById(id);
        return game.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/games/series/{series}")
    public ResponseEntity<List<Game>> getPublishedGamesBySeries(@PathVariable String series) {
        List<Game> games = gameService.getPublishedGamesBySeries(series);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/games/featured")
    public ResponseEntity<List<Game>> getFeaturedGames() {
        List<Game> games = gameService.getFeaturedGames();
        return ResponseEntity.ok(games);
    }

    @GetMapping("/games/search")
    public ResponseEntity<List<Game>> searchPublishedGamesByTitle(@RequestParam String title) {
        List<Game> games = gameService.searchPublishedGamesByTitle(title);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/games/year/{year}")
    public ResponseEntity<List<Game>> getGamesByYear(@PathVariable Integer year) {
        List<Game> games = gameService.getGamesByYear(year);
        return ResponseEntity.ok(games);
    }

    @GetMapping("/games/stats/count")
    public ResponseEntity<Long> getPublishedGameCount() {
        long count = gameService.getPublishedGameCount();
        return ResponseEntity.ok(count);
    }

    // Admin API endpoints (for admin dashboard)
    @GetMapping("/admin/games")
    public ResponseEntity<List<Game>> getAllGames() {
        List<Game> games = gameService.getAllGames();
        return ResponseEntity.ok(games);
    }

    @GetMapping("/admin/games/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable String id) {
        Optional<Game> game = gameService.getGameById(id);
        return game.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/admin/games/status/{status}")
    public ResponseEntity<List<Game>> getGamesByStatus(@PathVariable GameStatus status) {
        List<Game> games = gameService.getGamesByStatus(status);
        return ResponseEntity.ok(games);
    }

    @PostMapping("/admin/games")
    public ResponseEntity<Game> createGame(@Valid @RequestBody Game game) {
        try {
            Game createdGame = gameService.createGame(game);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdGame);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/admin/games/{id}")
    public ResponseEntity<Game> updateGame(@PathVariable String id, @Valid @RequestBody Game gameDetails) {
        try {
            Game updatedGame = gameService.updateGame(id, gameDetails);
            return ResponseEntity.ok(updatedGame);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PatchMapping("/admin/games/{id}/status")
    public ResponseEntity<Game> updateGameStatus(@PathVariable String id,
            @RequestBody GameStatusRequest statusRequest) {
        try {
            Game updatedGame = gameService.updateGameStatus(id, statusRequest.getStatus());
            return ResponseEntity.ok(updatedGame);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/admin/games/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable String id) {
        try {
            gameService.deleteGame(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Statistics endpoints
    @GetMapping("/admin/games/stats/series/{series}/count")
    public ResponseEntity<Long> getGameCountBySeries(@PathVariable String series) {
        long count = gameService.getGameCountBySeries(series);
        return ResponseEntity.ok(count);
    }

    // Helper class for status updates
    public static class GameStatusRequest {
        private GameStatus status;

        public GameStatus getStatus() {
            return status;
        }

        public void setStatus(GameStatus status) {
            this.status = status;
        }
    }
}