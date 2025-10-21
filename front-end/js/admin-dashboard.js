// ======================================
// ADMIN DASHBOARD FUNCTIONALITY
// ======================================

// Sample admin data
let adminGames = [...SierraGames.SAMPLE_GAMES];
let currentEditingGame = null;

// Initialize admin dashboard
function initAdminDashboard() {
    // Check authentication
    if (!AdminAuth.requireAuth()) {
        return;
    }
    
    // Initialize dashboard components
    initLogout();
    updateDashboardStats();
    initGameManagement();
    initSearchAndFilters();
    initGameModal();
    
    // Welcome message
    const currentUser = AdminAuth.getCurrentUser();
    if (currentUser) {
        SierraGames.showToast(`Welcome back, ${currentUser.username}!`, 'success');
    }
}

// Initialize logout functionality
function initLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Confirm logout
            if (confirm('Are you sure you want to log out?')) {
                AdminAuth.logout();
            }
        });
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    const totalGames = document.getElementById('totalGames');
    const totalSeries = document.getElementById('totalSeries');
    const totalImages = document.getElementById('totalImages');
    const totalVideos = document.getElementById('totalVideos');
    
    if (totalGames) {
        totalGames.textContent = adminGames.length;
    }
    
    if (totalSeries) {
        const uniqueSeries = [...new Set(adminGames.map(game => game.series))];
        totalSeries.textContent = uniqueSeries.length;
    }
    
    if (totalImages) {
        const imageCount = adminGames.reduce((total, game) => {
            return total + (game.screenshots ? game.screenshots.length : 0);
        }, 0);
        totalImages.textContent = imageCount;
    }
    
    if (totalVideos) {
        const videoCount = adminGames.reduce((total, game) => {
            return total + (game.videos ? game.videos.length : 0);
        }, 0);
        totalVideos.textContent = videoCount;
    }
}

// Initialize game management
function initGameManagement() {
    const addGameBtn = document.getElementById('addGameBtn');
    
    if (addGameBtn) {
        addGameBtn.addEventListener('click', () => {
            openGameModal();
        });
    }
    
    // Populate games table
    populateGamesTable();
}

// Initialize search and filters
function initSearchAndFilters() {
    const searchGames = document.getElementById('searchGames');
    const filterSeries = document.getElementById('filterSeries');
    const sortGames = document.getElementById('sortGames');
    
    if (searchGames) {
        searchGames.addEventListener('input', handleSearch);
    }
    
    if (filterSeries) {
        filterSeries.addEventListener('change', handleFilter);
    }
    
    if (sortGames) {
        sortGames.addEventListener('change', handleSort);
    }
}

// Handle search
function handleSearch() {
    const searchTerm = document.getElementById('searchGames').value.toLowerCase();
    const filteredGames = adminGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.seriesName.toLowerCase().includes(searchTerm) ||
        game.shortDescription.toLowerCase().includes(searchTerm)
    );
    
    populateGamesTable(filteredGames);
}

// Handle filter
function handleFilter() {
    const filterValue = document.getElementById('filterSeries').value;
    let filteredGames = adminGames;
    
    if (filterValue) {
        filteredGames = adminGames.filter(game => game.series === filterValue);
    }
    
    populateGamesTable(filteredGames);
}

// Handle sort
function handleSort() {
    const sortValue = document.getElementById('sortGames').value;
    let sortedGames = [...adminGames];
    
    switch (sortValue) {
        case 'title':
            sortedGames.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'year':
            sortedGames.sort((a, b) => b.year - a.year);
            break;
        case 'series':
            sortedGames.sort((a, b) => a.seriesName.localeCompare(b.seriesName));
            break;
        case 'updated':
            // For demo, just reverse the order
            sortedGames.reverse();
            break;
    }
    
    populateGamesTable(sortedGames);
}

// Populate games table
function populateGamesTable(games = adminGames) {
    const tbody = document.getElementById('gamesTableBody');
    if (!tbody) return;
    
    if (games.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-4">
                    <i class="fas fa-search mb-2 text-muted"></i>
                    <p class="mb-0">No games found</p>
                </td>
            </tr>
        `;
        return;
    }
    
    const tableRows = games.map(game => `
        <tr>
            <td><strong>${game.title}</strong></td>
            <td>${game.seriesName}</td>
            <td>${game.year}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(game.status || 'published')}">
                    ${getStatusText(game.status || 'published')}
                </span>
            </td>
            <td>${formatDate(new Date())}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="editGame('${game.id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteGame('${game.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    tbody.innerHTML = tableRows;
}

// Get status badge class
function getStatusBadgeClass(status) {
    switch (status) {
        case 'published':
            return 'bg-success';
        case 'draft':
            return 'bg-warning';
        default:
            return 'bg-secondary';
    }
}

// Get status text
function getStatusText(status) {
    switch (status) {
        case 'published':
            return 'Published';
        case 'draft':
            return 'Draft';
        default:
            return 'Unknown';
    }
}

// Format date
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// Initialize game modal
function initGameModal() {
    const gameForm = document.getElementById('gameForm');
    
    if (gameForm) {
        gameForm.addEventListener('submit', handleGameSubmit);
    }
}

// Open game modal for new game
function openGameModal(gameId = null) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('gameModalTitle');
    const form = document.getElementById('gameForm');
    
    if (!modal || !modalTitle || !form) return;
    
    if (gameId) {
        // Edit existing game
        const game = adminGames.find(g => g.id === gameId);
        if (!game) return;
        
        modalTitle.textContent = 'Edit Game';
        currentEditingGame = game;
        populateGameForm(game);
    } else {
        // Add new game
        modalTitle.textContent = 'Add New Game';
        currentEditingGame = null;
        form.reset();
    }
    
    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Populate game form with data
function populateGameForm(game) {
    document.getElementById('gameTitle').value = game.title || '';
    document.getElementById('gameSeries').value = game.series || '';
    document.getElementById('gameYear').value = game.year || '';
    document.getElementById('gameDeveloper').value = game.developer || '';
    document.getElementById('gameStatus').value = game.status || 'draft';
    document.getElementById('gameShortDescription').value = game.shortDescription || '';
    document.getElementById('gameLongDescription').value = game.longDescription || '';
    
    // Format characters
    if (game.characters) {
        const charactersText = game.characters.map(char => `${char.name} - ${char.description}`).join('\n');
        document.getElementById('gameCharacters').value = charactersText;
    }
    
    // Format features
    if (game.features) {
        const featuresText = game.features.map(feature => `${feature.name} - ${feature.description}`).join('\n');
        document.getElementById('gameFeatures').value = featuresText;
    }
    
    // Format fan websites
    if (game.fanSites) {
        const sitesText = game.fanSites.map(site => `${site.name} - ${site.url}`).join('\n');
        document.getElementById('fanWebsites').value = sitesText;
    }
}

// Handle game form submission
function handleGameSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const gameData = {
        title: formData.get('gameTitle'),
        series: formData.get('gameSeries'),
        year: parseInt(formData.get('gameYear')),
        developer: formData.get('gameDeveloper'),
        status: formData.get('gameStatus'),
        shortDescription: formData.get('gameShortDescription'),
        longDescription: formData.get('gameLongDescription'),
        characters: parseTextAreaData(formData.get('gameCharacters')),
        features: parseTextAreaData(formData.get('gameFeatures')),
        fanSites: parseTextAreaData(formData.get('fanWebsites'), true)
    };
    
    // Validate required fields
    if (!gameData.title || !gameData.series || !gameData.year || !gameData.shortDescription) {
        SierraGames.showToast('Please fill in all required fields', 'danger');
        return;
    }
    
    if (currentEditingGame) {
        // Update existing game
        updateGame(currentEditingGame.id, gameData);
    } else {
        // Add new game
        addGame(gameData);
    }
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('gameModal'));
    modal.hide();
}

// Parse textarea data
function parseTextAreaData(text, isUrl = false) {
    if (!text || !text.trim()) return [];
    
    return text.split('\n')
        .filter(line => line.trim())
        .map(line => {
            const parts = line.split(' - ');
            if (parts.length >= 2) {
                const name = parts[0].trim();
                const description = parts.slice(1).join(' - ').trim();
                
                if (isUrl) {
                    return { name, url: description };
                } else {
                    return { name, description };
                }
            }
            return null;
        })
        .filter(item => item !== null);
}

// Add new game
function addGame(gameData) {
    // Generate ID from title
    const id = gameData.title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
    
    const newGame = {
        id,
        ...gameData,
        seriesName: getSeriesName(gameData.series),
        screenshots: ['placeholder1.jpg', 'placeholder2.jpg'],
        videos: [
            { title: `${gameData.title} Gameplay`, url: 'https://youtube.com/watch?v=example' }
        ]
    };
    
    adminGames.push(newGame);
    
    // Update displays
    updateDashboardStats();
    populateGamesTable();
    
    SierraGames.showToast('Game added successfully', 'success');
}

// Update existing game
function updateGame(gameId, gameData) {
    const index = adminGames.findIndex(game => game.id === gameId);
    if (index === -1) return;
    
    adminGames[index] = {
        ...adminGames[index],
        ...gameData,
        seriesName: getSeriesName(gameData.series)
    };
    
    // Update displays
    updateDashboardStats();
    populateGamesTable();
    
    SierraGames.showToast('Game updated successfully', 'success');
}

// Get series name from series ID
function getSeriesName(seriesId) {
    const seriesNames = {
        'kings-quest': "King's Quest",
        'space-quest': "Space Quest",
        'police-quest': "Police Quest",
        'quest-for-glory': "Quest for Glory",
        'leisure-suit-larry': "Leisure Suit Larry",
        'standalone': "Standalone"
    };
    
    return seriesNames[seriesId] || seriesId;
}

// Edit game (called from table buttons)
function editGame(gameId) {
    openGameModal(gameId);
}

// Delete game (called from table buttons)
function deleteGame(gameId) {
    const game = adminGames.find(g => g.id === gameId);
    if (!game) return;
    
    // Show confirmation modal
    const deleteModal = document.getElementById('deleteModal');
    const confirmBtn = document.getElementById('confirmDeleteBtn');
    
    if (!deleteModal || !confirmBtn) {
        // Fallback to browser confirm
        if (confirm(`Are you sure you want to delete "${game.title}"?`)) {
            performDelete(gameId);
        }
        return;
    }
    
    // Update modal content
    const modalBody = deleteModal.querySelector('.modal-body p');
    if (modalBody) {
        modalBody.textContent = `Are you sure you want to delete "${game.title}"? This action cannot be undone.`;
    }
    
    // Set up confirm button
    confirmBtn.onclick = () => {
        performDelete(gameId);
        bootstrap.Modal.getInstance(deleteModal).hide();
    };
    
    // Show modal
    const bsModal = new bootstrap.Modal(deleteModal);
    bsModal.show();
}

// Perform the actual delete
function performDelete(gameId) {
    const index = adminGames.findIndex(game => game.id === gameId);
    if (index === -1) return;
    
    const deletedGame = adminGames[index];
    adminGames.splice(index, 1);
    
    // Update displays
    updateDashboardStats();
    populateGamesTable();
    
    SierraGames.showToast(`"${deletedGame.title}" deleted successfully`, 'info');
}

// Make functions globally available for onclick handlers
window.editGame = editGame;
window.deleteGame = deleteGame;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAdminDashboard);

// Export functions
window.AdminDashboard = {
    initAdminDashboard,
    editGame,
    deleteGame,
    addGame,
    updateGame
};