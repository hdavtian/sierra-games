// API configuration and constants
const API_BASE_URL = 'http://localhost:8085/api';

// Custom error class for API errors
class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

// Generic API client with error handling
const apiClient = {
  async get(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new APIError(
          `API request failed: ${response.statusText}`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      // Handle network errors
      throw new APIError('Network error: Unable to connect to the server', 0);
    }
  },

  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new APIError(
          `API request failed: ${response.statusText}`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError('Network error: Unable to connect to the server', 0);
    }
  }
};

// Games API service
export const gamesApi = {
  // Get all games
  async getAllGames() {
    return await apiClient.get('/games');
  },

  // Get game by ID
  async getGameById(gameId) {
    return await apiClient.get(`/games/${gameId}`);
  },

  // Get games by series
  async getGamesBySeries(seriesCode) {
    return await apiClient.get(`/games/series/${seriesCode}`);
  },

  // Get featured games
  async getFeaturedGames() {
    return await apiClient.get('/games/featured');
  },

  // Get all available series
  async getAllSeries() {
    return await apiClient.get('/games/series');
  }
};

// Transform database game data to frontend format
export const transformGameData = (dbGame) => {
  // Helper function to safely parse JSON strings
  const safeJsonParse = (jsonString, fallback = []) => {
    if (!jsonString) return fallback;
    if (typeof jsonString === 'object') return jsonString; // Already parsed
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.warn('Failed to parse JSON:', jsonString);
      return fallback;
    }
  };

  return {
    id: dbGame.id,
    title: dbGame.title,
    series: dbGame.series,
    seriesName: dbGame.seriesName || dbGame.series_name,
    year: dbGame.year,
    developer: dbGame.developer,
    shortDescription: dbGame.shortDescription || dbGame.short_description,
    longDescription: dbGame.longDescription || dbGame.long_description,
    characters: safeJsonParse(dbGame.characters, []),
    features: safeJsonParse(dbGame.features, {}),
    fanSites: safeJsonParse(dbGame.fanSites || dbGame.fan_sites, []),
    screenshots: safeJsonParse(dbGame.screenshots, []),
    videos: safeJsonParse(dbGame.videos, []),
    status: (dbGame.status || 'published').toLowerCase()
  };
};

// Transform multiple games
export const transformGamesData = (dbGames) => {
  return Array.isArray(dbGames) ? dbGames.map(transformGameData) : [];
};

// Series mapping for UI
export const SERIES_CONFIG = {
  'KQ': {
    name: "King's Quest",
    color: '#8b4513',
    description: 'Medieval fantasy adventures in the land of Daventry',
    bgClass: 'kings-quest-bg',
    cardClass: 'kings-quest-card'
  },
  'SQ': {
    name: "Space Quest", 
    color: '#4169e1',
    description: 'Sci-fi comedy adventures with Roger Wilco',
    bgClass: 'space-quest-bg',
    cardClass: 'space-quest-card'
  },
  'PQ': {
    name: "Police Quest",
    color: '#000080', 
    description: 'Realistic police procedural adventures',
    bgClass: 'police-quest-bg',
    cardClass: 'police-quest-card'
  },
  'QFG': {
    name: "Quest for Glory",
    color: '#228b22',
    description: 'RPG-adventure hybrids with character progression',
    bgClass: 'hero-quest-bg',
    cardClass: 'hero-quest-card'
  },
  'LSL': {
    name: "Leisure Suit Larry",
    color: '#ff1493',
    description: 'Adult comedy adventures with Larry Laffer',
    bgClass: 'leisure-larry-bg',
    cardClass: 'leisure-larry-card'
  },
  'OTHER': {
    name: "Other Games",
    color: '#daa520',
    description: 'Independent adventure games',
    bgClass: 'gold-rush-bg',
    cardClass: 'gold-rush-card'
  }
};

// Map series codes to carousel background classes
export const getSeriesBgClass = (seriesCode) => {
  const config = SERIES_CONFIG[seriesCode];
  return config ? config.bgClass : 'gold-rush-bg';
};

// Map series codes to action button text
export const getSeriesActionText = (seriesCode) => {
  const actionMap = {
    'KQ': 'Explore Kingdom',
    'SQ': 'Launch Into Space',
    'PQ': 'Join the Force',
    'QFG': 'Begin Your Quest',
    'LSL': 'Enter Lost Wages',
    'OTHER': 'Start Adventure'
  };
  return actionMap[seriesCode] || 'Play Game';
};

// Get background image for series (with fallback to gradient)
export const getSeriesBackgroundImage = (seriesCode) => {
  const imageMap = {
    'KQ': '/images/backgrounds/kings-quest-bg.jpg',
    'SQ': '/images/backgrounds/space-quest-bg.jpg', 
    'PQ': '/images/backgrounds/police-quest-bg.jpg',
    'QFG': '/images/backgrounds/quest-for-glory-bg.jpg',
    'LSL': '/images/backgrounds/leisure-suit-larry-bg.jpg',
    'OTHER': '/images/backgrounds/gold-rush-bg.jpg'
  };
  return imageMap[seriesCode] || imageMap['OTHER'];
};

// Get combined background style (image with gradient fallback)
export const getSeriesBackgroundStyle = (seriesCode) => {
  const gradients = {
    'KQ': 'linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(218, 165, 32, 0.8) 100%)',
    'SQ': 'linear-gradient(135deg, rgba(0, 0, 128, 0.8) 0%, rgba(65, 105, 225, 0.8) 100%)',
    'PQ': 'linear-gradient(135deg, rgba(0, 0, 128, 0.8) 0%, rgba(30, 58, 138, 0.8) 100%)',
    'QFG': 'linear-gradient(135deg, rgba(34, 139, 34, 0.8) 0%, rgba(50, 205, 50, 0.8) 100%)',
    'LSL': 'linear-gradient(135deg, rgba(255, 20, 147, 0.8) 0%, rgba(255, 105, 180, 0.8) 100%)',
    'OTHER': 'linear-gradient(135deg, rgba(218, 165, 32, 0.8) 0%, rgba(255, 215, 0, 0.8) 100%)'
  };
  
  const imageUrl = getSeriesBackgroundImage(seriesCode);
  const gradient = gradients[seriesCode] || gradients['OTHER'];
  
  return {
    backgroundImage: `${gradient}, url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  };
};

// Get series configuration
export const getSeriesConfig = (seriesCode) => {
  return SERIES_CONFIG[seriesCode] || SERIES_CONFIG['OTHER'];
};

// Utility functions
export const findGameById = (games, gameId) => {
  return games.find(game => game.id === gameId);
};

export const getGamesBySeries = (games, seriesCode) => {
  return games.filter(game => game.series === seriesCode);
};

export const formatYear = (year) => {
  return year ? year.toString() : 'Unknown';
};

export const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Get game card image path
export const getGameCardImage = (gameId) => {
  return `/images/games/${gameId}.jpg`;
};

// Get game card background style (image with gradient fallback)
export const getGameCardStyle = (gameId, seriesCode) => {
  const gradients = {
    'KQ': 'linear-gradient(135deg, rgba(139, 69, 19, 0.7) 0%, rgba(218, 165, 32, 0.7) 100%)',
    'SQ': 'linear-gradient(135deg, rgba(0, 0, 128, 0.7) 0%, rgba(65, 105, 225, 0.7) 100%)',
    'PQ': 'linear-gradient(135deg, rgba(0, 0, 128, 0.7) 0%, rgba(30, 58, 138, 0.7) 100%)',
    'QFG': 'linear-gradient(135deg, rgba(34, 139, 34, 0.7) 0%, rgba(50, 205, 50, 0.7) 100%)',
    'LSL': 'linear-gradient(135deg, rgba(255, 20, 147, 0.7) 0%, rgba(255, 105, 180, 0.7) 100%)',
    'OTHER': 'linear-gradient(135deg, rgba(218, 165, 32, 0.7) 0%, rgba(255, 215, 0, 0.7) 100%)'
  };
  
  const imageUrl = getGameCardImage(gameId);
  const gradient = gradients[seriesCode] || gradients['OTHER'];
  
  return {
    backgroundImage: `${gradient}, url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  };
};

// Get card background class (fallback for when no image is available)
export const getCardBgClass = (seriesCode) => {
  const config = SERIES_CONFIG[seriesCode];
  return config ? config.bgClass : 'gold-rush-bg';
};

export default gamesApi;