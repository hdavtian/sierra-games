import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE_GAMES, GAME_SERIES } from '@/data/games'

const HomePage = () => {
  const [currentView, setCurrentView] = useState('grid')
  const [filteredGames, setFilteredGames] = useState(SAMPLE_GAMES)
  const [sortBy, setSortBy] = useState('title')
  const [filterSeries, setFilterSeries] = useState('')

  // Featured games for carousel
  const featuredGames = [
    {
      id: 'kings-quest',
      title: "King's Quest Series",
      description: "Embark on magical adventures in the mystical land of Daventry. Follow King Graham and his family through epic quests filled with puzzles, humor, and unforgettable characters.",
      bgClass: "kings-quest-bg",
      gameId: 'kings-quest-1'
    },
    {
      id: 'space-quest', 
      title: "Space Quest Series",
      description: "Join Roger Wilco, the bumbling space janitor, on hilarious sci-fi adventures across the galaxy. Expect alien encounters, time travel, and plenty of comic mishaps.",
      bgClass: "space-quest-bg",
      gameId: 'space-quest-1'
    },
    {
      id: 'police-quest',
      title: "Police Quest Series", 
      description: "Experience the life of a police officer in Lytton, from beat cop to detective. Solve crimes, follow proper procedures, and uphold justice in this realistic adventure series.",
      bgClass: "police-quest-bg",
      gameId: 'police-quest-1'
    },
    {
      id: 'quest-for-glory',
      title: "Quest for Glory Series",
      description: "So you want to be a hero? Create your character, choose your path as Fighter, Magic User, or Thief, and prove yourself worthy in this RPG-adventure hybrid.",
      bgClass: "hero-quest-bg", 
      gameId: 'quest-for-glory-1'
    }
  ]

  // Handle filtering and sorting
  useEffect(() => {
    let games = [...SAMPLE_GAMES]

    // Apply series filter
    if (filterSeries) {
      games = games.filter(game => game.series === filterSeries)
    }

    // Apply sorting
    switch (sortBy) {
      case 'year':
        games.sort((a, b) => b.year - a.year)
        break
      case 'series':
        games.sort((a, b) => a.seriesName.localeCompare(b.seriesName))
        break
      case 'title':
      default:
        games.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setFilteredGames(games)
  }, [sortBy, filterSeries])

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
                <div className={`carousel-slide ${game.bgClass}`}>
                  <div className="container">
                    <div className="carousel-content">
                      <h1>{game.title}</h1>
                      <p>{game.description}</p>
                      <Link to={`/game/${game.gameId}`} className="btn btn-primary">
                        {game.id === 'kings-quest' && 'Explore Kingdom'}
                        {game.id === 'space-quest' && 'Launch Into Space'}
                        {game.id === 'police-quest' && 'Join the Force'}
                        {game.id === 'quest-for-glory' && 'Begin Your Quest'}
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
      </section>

      {/* Games Collection */}
      <section className="games-collection" id="games-collection">
        <div className="container">
          <div className="section-header">
            <h2>Sierra Games Collection</h2>
            <p>Explore the legendary adventure games that defined a generation</p>
          </div>

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
                {Object.entries(GAME_SERIES).map(([key, series]) => (
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
        </div>
      </section>
    </div>
  )
}

export default HomePage