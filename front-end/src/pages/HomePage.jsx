import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gamesApi, transformGamesData, SERIES_CONFIG, getSeriesConfig, getSeriesBgClass, getSeriesActionText, findGameById, getGamesBySeries } from '../services/gamesApi'

const HomePage = () => {
  const [currentView, setCurrentView] = useState('grid')
  const [games, setGames] = useState([])
  const [featuredGames, setFeaturedGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])
  const [sortBy, setSortBy] = useState('title')
  const [filterSeries, setFilterSeries] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load games from API
  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Load both all games and featured games in parallel
        const [gamesData, featuredData] = await Promise.all([
          gamesApi.getAllGames(),
          gamesApi.getFeaturedGames()
        ])
        
        const transformedGames = transformGamesData(gamesData)
        const transformedFeatured = transformGamesData(featuredData)
        
        setGames(transformedGames)
        setFeaturedGames(transformedFeatured)
        setFilteredGames(transformedGames)
      } catch (err) {
        console.error('Failed to load games:', err)
        setError(err.message || 'Failed to load games')
      } finally {
        setLoading(false)
      }
    }

    loadGames()
  }, [])

  // Handle filtering and sorting
  useEffect(() => {
    let filteredGamesList = [...games]

    // Apply series filter
    if (filterSeries) {
      filteredGamesList = filteredGamesList.filter(game => game.series === filterSeries)
    }

    // Apply sorting
    switch (sortBy) {
      case 'year':
        filteredGamesList.sort((a, b) => b.year - a.year)
        break
      case 'series':
        filteredGamesList.sort((a, b) => (a.seriesName || '').localeCompare(b.seriesName || ''))
        break
      case 'title':
      default:
        filteredGamesList.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setFilteredGames(filteredGamesList)
  }, [games, sortBy, filterSeries])

  const handleViewChange = (view) => {
    setCurrentView(view)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterSeries(e.target.value)
  }

  const getCardBgClass = (series) => {
    const classMap = {
      'kings-quest': 'kings-quest-card',
      'space-quest': 'space-quest-card', 
      'police-quest': 'police-quest-card',
      'quest-for-glory': 'hero-quest-card',
      'leisure-suit-larry': 'leisure-larry-card',
      'standalone': 'gold-rush-card'
    }
    return classMap[series] || 'kings-quest-card'
  }

  const getStatusBadgeClass = (status) => {
    return status === 'published' ? 'bg-success' : 'bg-warning'
  }

  const getStatusText = (status) => {
    return status === 'published' ? 'Published' : 'Draft'
  }

  return (
    <div className="homepage-wrapper">
      {/* Hero Carousel */}
      <section className="hero-carousel">
        {loading ? (
          <div className="carousel-loading text-center p-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading featured games...</span>
            </div>
          </div>
        ) : featuredGames.length > 0 ? (
          <div id="gamesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#gamesCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner">
            {featuredGames.map((game, index) => (
              <div key={game.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className={`carousel-slide ${getSeriesBgClass(game.series)}`}>
                  <div className="container">
                    <div className="carousel-content">
                      <h1>{game.title}</h1>
                      <p>{game.shortDescription}</p>
                      <Link to={`/game/${game.id}`} className="btn btn-primary">
                        {getSeriesActionText(game.series)}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#gamesCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#gamesCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        ) : (
          <div className="no-featured-games text-center p-5">
            <h2>No Featured Games Available</h2>
            <p>Check back later for featured content!</p>
          </div>
        )}
      </section>

      {/* Games Collection */}
      <section className="games-collection" id="games-collection">
        <div className="container">
          <div className="section-header">
            <h2>Sierra Games Collection</h2>
            <p>Explore the legendary adventure games that defined a generation</p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading games...</span>
              </div>
              <p className="mt-3">Loading Sierra Games collection...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Unable to load games</h4>
              <p>{error}</p>
              <hr />
              <p className="mb-0">Please check that the backend server is running on port 8085.</p>
            </div>
          )}

          {/* Main Content - only show when not loading and no error */}
          {!loading && !error && (
            <>
              {/* View Controls */}
              <div className="collection-controls">
                <div className="view-toggles">
                  <button 
                    className={`btn btn-outline-primary ${currentView === 'grid' ? 'active' : ''}`}
                    onClick={() => handleViewChange('grid')}
                  >
                    <i className="fas fa-th"></i> Grid View
                  </button>
                  <button 
                    className={`btn btn-outline-primary ${currentView === 'list' ? 'active' : ''}`}
                    onClick={() => handleViewChange('list')}
                  >
                    <i className="fas fa-list"></i> List View
                  </button>
                </div>
                
                <div className="collection-filters">
                  <select className="form-select" value={sortBy} onChange={handleSortChange}>
                    <option value="title">Sort by Title</option>
                    <option value="year">Sort by Year</option>
                    <option value="series">Sort by Series</option>
                  </select>
                  
                  <select className="form-select" value={filterSeries} onChange={handleFilterChange}>
                    <option value="">All Series</option>
                    {Object.entries(SERIES_CONFIG).map(([key, series]) => (
                      <option key={key} value={key}>{series.name}</option>
                    ))}
                  </select>
                </div>
              </div>

          {/* Games Container */}
          <div className="games-container">
            {/* Grid View */}
            {currentView === 'grid' && (
              <div className="games-grid active">
                <div className="row">
                  {filteredGames.map((game) => (
                    <div key={game.id} className="col-lg-4 col-md-6 mb-4">
                      <div className="game-card">
                        <div className={`card-image ${getCardBgClass(game.series)}`}></div>
                        <div className="card-content">
                          <h3>{game.title}</h3>
                          <p className="series-tag">{game.seriesName}</p>
                          <p className="year">{game.year}</p>
                          <p className="description">{game.shortDescription}</p>
                          <Link to={`/game/${game.id}`} className="btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* List View */}
            {currentView === 'list' && (
              <div className="games-list active">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Series</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredGames.map((game) => (
                        <tr key={game.id}>
                          <td><strong>{game.title}</strong></td>
                          <td>{game.seriesName}</td>
                          <td>{game.year}</td>
                          <td>
                            <span className={`badge ${getStatusBadgeClass(game.status)}`}>
                              {getStatusText(game.status)}
                            </span>
                          </td>
                          <td>{game.shortDescription}</td>
                          <td>
                            <Link to={`/game/${game.id}`} className="btn btn-sm btn-primary">
                              Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default HomePage