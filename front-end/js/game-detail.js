// ======================================
// GAME DETAIL PAGE FUNCTIONALITY
// ======================================

// Initialize game detail page
function initGameDetail() {
    const gameId = SierraGames.getUrlParameter('game');
    
    if (!gameId) {
        showGameNotFound();
        return;
    }
    
    const game = SierraGames.findGameById(gameId);
    
    if (!game) {
        showGameNotFound();
        return;
    }
    
    populateGameDetails(game);
    initScreenshotsModal(game);
    initVideosModal(game);
}

// Show game not found message
function showGameNotFound() {
    document.title = 'Game Not Found - Sierra Games';
    
    const heroSection = document.querySelector('.game-hero');
    if (heroSection) {
        heroSection.innerHTML = `
            <div class="hero-overlay">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-8 text-center">
                            <div class="hero-content">
                                <h1>Game Not Found</h1>
                                <p class="hero-description">The requested game could not be found.</p>
                                <div class="hero-actions">
                                    <a href="index.html" class="btn btn-primary btn-lg">
                                        <i class="fas fa-home"></i> Return Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Clear other sections
    const detailsSection = document.querySelector('.game-details');
    if (detailsSection) {
        detailsSection.innerHTML = '';
    }
}

// Populate game details
function populateGameDetails(game) {
    // Update page title
    document.title = `${game.title} - Sierra Games`;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('gameBreadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = game.title;
    }
    
    // Update hero section
    updateHeroSection(game);
    
    // Update main content
    updateMainContent(game);
    
    // Update sidebar
    updateSidebar(game);
}

// Update hero section
function updateHeroSection(game) {
    // Set hero background
    const heroBackground = document.getElementById('gameHeroBackground');
    if (heroBackground) {
        // For now, use gradient backgrounds similar to the carousel
        const backgrounds = {
            'kings-quest': 'linear-gradient(135deg, #8b4513 0%, #daa520 100%)',
            'space-quest': 'linear-gradient(135deg, #000080 0%, #4169e1 100%)',
            'police-quest': 'linear-gradient(135deg, #000080 0%, #1e3a8a 100%)',
            'quest-for-glory': 'linear-gradient(135deg, #228b22 0%, #32cd32 100%)',
            'leisure-suit-larry': 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)'
        };
        
        const background = backgrounds[game.series] || backgrounds['kings-quest'];
        heroBackground.style.background = background;
    }
    
    // Update hero content
    const title = document.getElementById('gameTitle');
    const series = document.getElementById('gameSeries');
    const year = document.getElementById('gameYear');
    const developer = document.getElementById('gameDeveloper');
    const shortDescription = document.getElementById('gameShortDescription');
    
    if (title) title.textContent = game.title;
    if (series) series.textContent = game.seriesName;
    if (year) year.textContent = SierraGames.formatYear(game.year);
    if (developer) developer.textContent = game.developer;
    if (shortDescription) shortDescription.textContent = game.shortDescription;
}

// Update main content
function updateMainContent(game) {
    // Update long description
    const longDescription = document.getElementById('gameLongDescription');
    if (longDescription) {
        const paragraphs = game.longDescription.split('\n\n');
        longDescription.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
    }
    
    // Update characters
    updateCharacters(game.characters);
    
    // Update features
    updateFeatures(game.features);
}

// Update characters section
function updateCharacters(characters) {
    const charactersGrid = document.getElementById('charactersGrid');
    if (!charactersGrid || !characters || !characters.length) {
        return;
    }
    
    const charactersHtml = characters.map(character => `
        <div class="character-card">
            <div class="character-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <h4>${character.name}</h4>
            <p>${character.description}</p>
        </div>
    `).join('');
    
    charactersGrid.innerHTML = charactersHtml;
}

// Update features section
function updateFeatures(features) {
    const featuresList = document.getElementById('featuresList');
    if (!featuresList || !features || !features.length) {
        return;
    }
    
    const featuresHtml = features.map(feature => `
        <div class="feature-item">
            <h5>
                <i class="fas fa-star text-warning me-2"></i>
                ${feature.name}
            </h5>
            <p>${feature.description}</p>
        </div>
    `).join('');
    
    featuresList.innerHTML = featuresHtml;
}

// Update sidebar
function updateSidebar(game) {
    // Update game info
    const sidebarYear = document.getElementById('sidebarYear');
    const sidebarSeries = document.getElementById('sidebarSeries');
    const sidebarDeveloper = document.getElementById('sidebarDeveloper');
    const sidebarGenre = document.getElementById('sidebarGenre');
    const sidebarPlatform = document.getElementById('sidebarPlatform');
    
    if (sidebarYear) sidebarYear.textContent = SierraGames.formatYear(game.year);
    if (sidebarSeries) sidebarSeries.textContent = game.seriesName;
    if (sidebarDeveloper) sidebarDeveloper.textContent = game.developer;
    if (sidebarGenre) sidebarGenre.textContent = 'Graphic Adventure';
    if (sidebarPlatform) sidebarPlatform.textContent = 'PC, DOS';
    
    // Update fan links
    updateFanLinks(game.fanSites);
    
    // Update similar games
    updateSimilarGames(game);
}

// Update fan links
function updateFanLinks(fanSites) {
    const fanLinks = document.getElementById('fanLinks');
    if (!fanLinks || !fanSites || !fanSites.length) {
        if (fanLinks) {
            fanLinks.innerHTML = '<p class="text-muted">No fan sites available</p>';
        }
        return;
    }
    
    const linksHtml = fanSites.map(site => `
        <a href="${site.url}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt me-2"></i>
            ${site.name}
        </a>
    `).join('');
    
    fanLinks.innerHTML = linksHtml;
}

// Update similar games
function updateSimilarGames(currentGame) {
    const similarGames = document.getElementById('similarGames');
    if (!similarGames) return;
    
    // Find games from the same series or other games
    const related = SierraGames.SAMPLE_GAMES
        .filter(game => game.id !== currentGame.id)
        .slice(0, 3); // Show up to 3 similar games
    
    if (!related.length) {
        similarGames.innerHTML = '<p class="text-muted">No similar games available</p>';
        return;
    }
    
    const gamesHtml = related.map(game => `
        <a href="game-detail.html?game=${game.id}">
            <div class="d-flex align-items-center">
                <div class="similar-game-icon me-2">
                    <i class="fas fa-gamepad"></i>
                </div>
                <div>
                    <div class="fw-bold">${SierraGames.truncateText(game.title, 30)}</div>
                    <small class="text-muted">${game.year}</small>
                </div>
            </div>
        </a>
    `).join('');
    
    similarGames.innerHTML = gamesHtml;
}

// Initialize screenshots modal
function initScreenshotsModal(game) {
    const screenshotsContainer = document.getElementById('screenshotsContainer');
    if (!screenshotsContainer || !game.screenshots || !game.screenshots.length) {
        return;
    }
    
    // For demo purposes, create placeholder screenshots
    const screenshotsHtml = game.screenshots.map((screenshot, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="d-flex justify-content-center">
                <div class="screenshot-placeholder">
                    <i class="fas fa-image"></i>
                    <p>Screenshot ${index + 1}</p>
                    <small class="text-muted">${game.title}</small>
                </div>
            </div>
        </div>
    `).join('');
    
    screenshotsContainer.innerHTML = screenshotsHtml;
}

// Initialize videos modal
function initVideosModal(game) {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer || !game.videos || !game.videos.length) {
        return;
    }
    
    // For demo purposes, create placeholder videos
    const videosHtml = game.videos.map(video => `
        <div class="video-item">
            <div class="video-placeholder">
                <i class="fas fa-play-circle"></i>
                <h5>${video.title}</h5>
                <p class="text-muted">Click to watch on YouTube</p>
            </div>
        </div>
    `).join('');
    
    videosContainer.innerHTML = videosHtml;
    
    // Add click handlers for video placeholders
    const videoItems = videosContainer.querySelectorAll('.video-item');
    videoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const video = game.videos[index];
            if (video && video.url) {
                window.open(video.url, '_blank');
            } else {
                SierraGames.showToast('Video not available in demo version', 'info');
            }
        });
    });
}

// Add custom styles for demo placeholders
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .screenshot-placeholder {
            width: 600px;
            height: 400px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #6c757d;
        }
        
        .screenshot-placeholder i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .video-placeholder {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #2c5aa0 0%, #4a90c2 100%);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 1rem;
        }
        
        .video-placeholder:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .video-placeholder i {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        
        .character-avatar {
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .character-avatar i {
            font-size: 3rem;
            color: #2c5aa0;
        }
        
        .similar-game-icon {
            width: 40px;
            height: 40px;
            background-color: #2c5aa0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        @media (max-width: 768px) {
            .screenshot-placeholder {
                width: 100%;
                height: 250px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addCustomStyles();
    initGameDetail();
});

// Export functions
window.GameDetail = {
    initGameDetail,
    populateGameDetails,
    showGameNotFound
};