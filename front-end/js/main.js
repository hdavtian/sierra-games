// ======================================
// MAIN JAVASCRIPT FILE
// My Favorite Sierra Games Growing Up
// ======================================

// Sample game data for demonstration
const SAMPLE_GAMES = [
    {
        id: 'kings-quest-1',
        title: "King's Quest I: Quest for the Crown",
        series: 'kings-quest',
        seriesName: "King's Quest",
        year: 1984,
        developer: 'Sierra On-Line',
        shortDescription: 'Quest for the Three Treasures and save the kingdom of Daventry in this classic adventure that started it all.',
        longDescription: `King's Quest I: Quest for the Crown was the first game in the legendary King's Quest series. Players control Sir Graham, a brave knight tasked by King Edward to find three magical treasures that will allow Graham to become the next king of Daventry. 
        
        This groundbreaking adventure game introduced many players to the world of graphic adventures, featuring colorful 16-color graphics and a text parser interface that allowed for creative problem-solving. The game is filled with fairy tale references, challenging puzzles, and memorable characters.
        
        The three treasures Graham must find are: the Magic Mirror that answers any question truthfully, the Magic Shield that protects its bearer from harm, and the Magic Chest that is always filled with gold. Each treasure is hidden in a dangerous location and guarded by formidable enemies.`,
        characters: [
            { name: 'Sir Graham', description: 'The brave knight protagonist who becomes king' },
            { name: 'King Edward', description: 'The aging king of Daventry' },
            { name: 'The Wizard', description: 'A mysterious magic user in the forest' },
            { name: 'The Woodsman', description: 'A helpful character who aids Graham' }
        ],
        features: [
            { name: 'Text Parser Interface', description: 'Type commands to interact with the game world' },
            { name: 'Colorful Graphics', description: '16-color EGA graphics that were revolutionary for 1984' },
            { name: 'Fairy Tale Setting', description: 'Classic storybook atmosphere with familiar characters' },
            { name: 'Multiple Solutions', description: 'Many puzzles have different ways to solve them' }
        ],
        fanSites: [
            { name: 'The King\'s Quest Omnipedia', url: 'https://kingsquest.fandom.com' },
            { name: 'AGD Interactive', url: 'https://www.agdinteractive.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'King\'s Quest I Playthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'King\'s Quest I Review', url: 'https://youtube.com/watch?v=example2' }
        ]
    },
    {
        id: 'space-quest-1',
        title: "Space Quest I: The Sarien Encounter",
        series: 'space-quest',
        seriesName: "Space Quest",
        year: 1986,
        developer: 'Sierra On-Line',
        shortDescription: 'Join Roger Wilco, the bumbling space janitor, on his first hilarious adventure to save the galaxy.',
        longDescription: `Space Quest I: The Sarien Encounter introduced the world to Roger Wilco, the most unlikely hero in adventure gaming. As a lowly janitor aboard the scientific vessel Arcada, Roger must save the galaxy when evil Sariens attack his ship and steal the experimental Star Generator.
        
        This game marked the beginning of the "Two Guys from Andromeda" (Mark Crowe and Scott Murphy) collaboration, bringing their unique brand of science fiction humor to the adventure game genre. The game perfectly balances comedy with genuine adventure gameplay, creating an experience that's both funny and engaging.
        
        Players guide Roger through various alien worlds, from the desert planet Kerona to the Sarien ship Deltaur. The game is notorious for its numerous ways to die, often in hilariously absurd circumstances, which became a hallmark of the series.`,
        characters: [
            { name: 'Roger Wilco', description: 'The bumbling janitor hero of the Space Quest series' },
            { name: 'The Sariens', description: 'Evil aliens who steal the Star Generator' },
            { name: 'The Arcada Crew', description: 'Roger\'s unfortunate crewmates' }
        ],
        features: [
            { name: 'Science Fiction Comedy', description: 'Perfect blend of humor and sci-fi adventure' },
            { name: 'Multiple Death Scenarios', description: 'Dozens of creative ways for Roger to meet his demise' },
            { name: 'Alien Worlds', description: 'Explore strange planets and alien technology' },
            { name: 'Arcade Sequences', description: 'Action-based mini-games mixed with adventure' }
        ],
        fanSites: [
            { name: 'Space Quest Omnipedia', url: 'https://spacequest.fandom.com' },
            { name: 'The Space Quest Historian', url: 'https://www.spacequest.net' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Space Quest I Playthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Two Guys from Andromeda Interview', url: 'https://youtube.com/watch?v=example2' }
        ]
    },
    {
        id: 'police-quest-1',
        title: "Police Quest I: In Pursuit of the Death Angel",
        series: 'police-quest',
        seriesName: "Police Quest",
        year: 1987,
        developer: 'Sierra On-Line',
        shortDescription: 'Experience the authentic life of a police officer in this realistic crime adventure.',
        longDescription: `Police Quest I: In Pursuit of the Death Angel was designed by former police officer Jim Walls, bringing unprecedented realism to adventure gaming. Players take on the role of Sonny Bonds, a patrol officer in the fictional city of Lytton, California.
        
        The game stands out for its attention to police procedure and realistic portrayal of law enforcement work. From conducting proper traffic stops to following evidence protocols, players must adhere to real police procedures to succeed. This attention to detail made the game educational as well as entertaining.
        
        The main storyline involves Sonny's pursuit of "The Death Angel," a dangerous drug dealer who has been terrorizing Lytton. Through careful police work, investigation, and following proper procedures, players help Sonny build a case and eventually confront this criminal mastermind.`,
        characters: [
            { name: 'Sonny Bonds', description: 'The player character, a dedicated police officer' },
            { name: 'The Death Angel', description: 'The main antagonist, a dangerous drug dealer' },
            { name: 'Sergeant Dooley', description: 'Sonny\'s supervisor at the police station' },
            { name: 'Marie Wilkans', description: 'Sonny\'s girlfriend and fellow officer' }
        ],
        features: [
            { name: 'Realistic Police Procedures', description: 'Authentic law enforcement protocols and methods' },
            { name: 'Crime Investigation', description: 'Gather evidence and build cases against criminals' },
            { name: 'Traffic Enforcement', description: 'Conduct proper traffic stops and write citations' },
            { name: 'Educational Value', description: 'Learn about real police work and procedures' }
        ],
        fanSites: [
            { name: 'Police Quest Omnipedia', url: 'https://policequest.fandom.com' },
            { name: 'Sierra Help', url: 'https://www.sierrahelp.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Police Quest I Walkthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Jim Walls Interview', url: 'https://youtube.com/watch?v=example2' }
        ]
    }
];

// ======================================
// UTILITY FUNCTIONS
// ======================================

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Find game by ID
function findGameById(gameId) {
    return SAMPLE_GAMES.find(game => game.id === gameId);
}

// Format year for display
function formatYear(year) {
    return year ? year.toString() : 'Unknown';
}

// Truncate text to specified length
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// ======================================
// HOMEPAGE FUNCTIONALITY
// ======================================

// Initialize homepage
function initHomepage() {
    initViewToggle();
    initFiltersAndSort();
}

// Initialize view toggle functionality
function initViewToggle() {
    const viewButtons = document.querySelectorAll('[data-view]');
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (!viewButtons.length || !gridView || !listView) return;
    
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            
            // Update button states
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Toggle views
            if (view === 'grid') {
                gridView.classList.add('active');
                listView.classList.remove('active');
            } else {
                listView.classList.add('active');
                gridView.classList.remove('active');
            }
        });
    });
}

// Initialize filters and sorting
function initFiltersAndSort() {
    const sortSelect = document.getElementById('sortBy');
    const filterSelect = document.getElementById('filterSeries');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', handleFilter);
    }
}

// Handle sorting
function handleSort() {
    const sortBy = document.getElementById('sortBy').value;
    console.log('Sorting by:', sortBy);
    // TODO: Implement actual sorting logic when we have dynamic content
}

// Handle filtering
function handleFilter() {
    const filterBy = document.getElementById('filterSeries').value;
    console.log('Filtering by:', filterBy);
    // TODO: Implement actual filtering logic when we have dynamic content
}

// ======================================
// MODAL FUNCTIONALITY
// ======================================

// Initialize modal functionality
function initModals() {
    // This would handle any custom modal behavior
    // Bootstrap handles most modal functionality automatically
}

// ======================================
// RESPONSIVE BEHAVIOR
// ======================================

// Handle responsive behavior
function handleResponsive() {
    const navbar = document.querySelector('.navbar-collapse');
    
    // Auto-close mobile menu when clicking on a link
    if (navbar) {
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    const bsCollapse = new bootstrap.Collapse(navbar, {
                        hide: true
                    });
                }
            });
        });
    }
}

// ======================================
// SMOOTH SCROLLING
// ======================================

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ======================================
// FORM VALIDATION
// ======================================

// Basic form validation helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateRequired(value) {
    return value && value.trim().length > 0;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Remove existing error
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-danger small mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    
    // Add error styling
    field.classList.add('is-invalid');
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    field.classList.remove('is-invalid');
}

// ======================================
// LOADING STATES
// ======================================

// Show loading spinner
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.innerHTML = `
        <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading...</p>
        </div>
    `;
}

// Hide loading spinner
function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.innerHTML = '';
}

// ======================================
// TOAST NOTIFICATIONS
// ======================================

// Show toast notification
function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toastId = 'toast-' + Date.now();
    const toastHtml = `
        <div id="${toastId}" class="toast align-items-center text-bg-${type} border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    // Initialize and show toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 5000
    });
    
    toast.show();
    
    // Remove toast element after it's hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// ======================================
// INITIALIZATION
// ======================================

// Main initialization function
function init() {
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            initHomepage();
            break;
        default:
            break;
    }
    
    // Initialize common functionality
    initModals();
    handleResponsive();
    initSmoothScrolling();
    
    console.log('Sierra Games website initialized');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', handleResponsive);

// Export functions for use in other scripts
window.SierraGames = {
    getUrlParameter,
    findGameById,
    formatYear,
    truncateText,
    showToast,
    showLoading,
    hideLoading,
    validateEmail,
    validateRequired,
    showFieldError,
    clearFieldError,
    SAMPLE_GAMES
};