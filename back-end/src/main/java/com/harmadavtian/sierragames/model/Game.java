package com.harmadavtian.sierragames.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @Column(name = "id", length = 100)
    private String id;

    @NotBlank
    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @NotBlank
    @Column(name = "series", nullable = false, length = 50)
    private String series;

    @NotBlank
    @Column(name = "series_name", nullable = false, length = 100)
    private String seriesName;

    @NotNull
    @Column(name = "year", nullable = false)
    private Integer year;

    @NotBlank
    @Column(name = "developer", nullable = false, length = 100)
    private String developer;

    @NotBlank
    @Column(name = "short_description", nullable = false, length = 500)
    private String shortDescription;

    @Column(name = "long_description", columnDefinition = "TEXT")
    private String longDescription;

    @Column(name = "characters", columnDefinition = "JSON")
    private String characters;

    @Column(name = "features", columnDefinition = "JSON")
    private String features;

    @Column(name = "fan_sites", columnDefinition = "JSON")
    private String fanSites;

    @Column(name = "screenshots", columnDefinition = "JSON")
    private String screenshots;

    @Column(name = "videos", columnDefinition = "JSON")
    private String videos;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private GameStatus status = GameStatus.DRAFT;

    @Column(name = "featured", nullable = false)
    private Boolean featured = false;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    // Constructors
    public Game() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Game(String id, String title, String series, String seriesName, Integer year, String developer) {
        this();
        this.id = id;
        this.title = title;
        this.series = series;
        this.seriesName = seriesName;
        this.year = year;
        this.developer = developer;
    }

    // JPA Lifecycle Methods
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getSeriesName() {
        return seriesName;
    }

    public void setSeriesName(String seriesName) {
        this.seriesName = seriesName;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getCharacters() {
        return characters;
    }

    public void setCharacters(String characters) {
        this.characters = characters;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public String getFanSites() {
        return fanSites;
    }

    public void setFanSites(String fanSites) {
        this.fanSites = fanSites;
    }

    public String getScreenshots() {
        return screenshots;
    }

    public void setScreenshots(String screenshots) {
        this.screenshots = screenshots;
    }

    public String getVideos() {
        return videos;
    }

    public void setVideos(String videos) {
        this.videos = videos;
    }

    public GameStatus getStatus() {
        return status;
    }

    public void setStatus(GameStatus status) {
        this.status = status;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", series='" + series + '\'' +
                ", year=" + year +
                ", status=" + status +
                '}';
    }
}