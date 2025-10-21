import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { findGameById, SAMPLE_GAMES, GAME_SERIES, formatYear, truncateText } from '@/data/games'

const GameDetailPage = () => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundGame = findGameById(gameId)
    if (foundGame) {
      setGame(foundGame)
      document.title = `${foundGame.title} - Sierra Games`
    } else {
      setGame(null)
      document.title = 'Game Not Found - Sierra Games'
    }
    setLoading(false)
  }, [gameId])

  const getHeroBackground = (series) => {
    const backgrounds = {
      'kings-quest': 'linear-gradient(135deg, #8b4513 0%, #daa520 100%)',
      'space-quest': 'linear-gradient(135deg, #000080 0%, #4169e1 100%)',
      'police-quest': 'linear-gradient(135deg, #000080 0%, #1e3a8a 100%)',
      'quest-for-glory': 'linear-gradient(135deg, #228b22 0%, #32cd32 100%)',
      'leisure-suit-larry': 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)',
      'standalone': 'linear-gradient(135deg, #daa520 0%, #ffd700 100%)'
    }
    return backgrounds[series] || backgrounds['kings-quest']
  }

  const getSimilarGames = (currentGame) => {
    return SAMPLE_GAMES
      .filter(g => g.id !== currentGame.id)
      .slice(0, 3)
  }

  if (loading) {
    return (
      <div className="game-detail-wrapper">
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading game details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="game-detail-wrapper">
        {/* Breadcrumb */}
        <section className="breadcrumb-section">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><a href="/#games-collection">Games</a></li>
                <li className="breadcrumb-item active">Game Not Found</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Game Not Found */}
        <section className="game-hero">
          <div className="hero-background" style={{background: getHeroBackground('kings-quest')}}></div>
          <div className="hero-overlay">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 text-center">
                  <div className="hero-content">
                    <h1>Game Not Found</h1>
                    <p className="hero-description">The requested game could not be found.</p>
                    <div className="hero-actions">
                      <Link to="/" className="btn btn-primary btn-lg">
                        <i className="fas fa-home"></i> Return Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const similarGames = getSimilarGames(game)

  return (
    <div className="game-detail-wrapper">
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><a href="/#games-collection">Games</a></li>
              <li className="breadcrumb-item active">{game.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Game Hero Section */}
      <section className="game-hero">
        <div className="hero-background" style={{background: getHeroBackground(game.series)}}></div>
        <div className="hero-overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1>{game.title}</h1>
                  <p className="series-info">
                    <span>{game.seriesName}</span> • 
                    <span> {formatYear(game.year)}</span> • 
                    <span> {game.developer}</span>
                  </p>
                  <p className="hero-description">{game.shortDescription}</p>
                  <div className="hero-actions">
                    <button 
                      className="btn btn-primary btn-lg" 
                      data-bs-toggle="modal" 
                      data-bs-target="#screenshotsModal"
                    >
                      <i className="fas fa-images"></i> Screenshots
                    </button>
                    <button 
                      className="btn btn-outline-light btn-lg" 
                      data-bs-toggle="modal" 
                      data-bs-target="#videosModal"
                    >
                      <i className="fas fa-play"></i> Videos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Details */}
      <section className="game-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Full Description */}
              <div className="detail-section">
                <h2>About the Game</h2>
                <div>
                  {game.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>

              {/* Characters */}
              {game.characters && game.characters.length > 0 && (
                <div className="detail-section">
                  <h2>Main Characters</h2>
                  <div className="characters-grid">
                    {game.characters.map((character, index) => (
                      <div key={index} className="character-card">
                        <div className="character-avatar">
                          <i className="fas fa-user-circle"></i>
                        </div>
                        <h4>{character.name}</h4>
                        <p>{character.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gameplay Features */}
              {game.features && game.features.length > 0 && (
                <div className="detail-section">
                  <h2>Gameplay Features</h2>
                  <div className="features-list">
                    {game.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <h5>
                          <i className="fas fa-star text-warning me-2"></i>
                          {feature.name}
                        </h5>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              {/* Game Info Sidebar */}
              <div className="game-info-sidebar">
                <div className="info-card">
                  <h3>Game Information</h3>
                  <div className="info-item">
                    <strong>Release Year:</strong>
                    <span>{formatYear(game.year)}</span>
                  </div>
                  <div className="info-item">
                    <strong>Series:</strong>
                    <span>{game.seriesName}</span>
                  </div>
                  <div className="info-item">
                    <strong>Developer:</strong>
                    <span>{game.developer}</span>
                  </div>
                  <div className="info-item">
                    <strong>Genre:</strong>
                    <span>Adventure</span>
                  </div>
                  <div className="info-item">
                    <strong>Platform:</strong>
                    <span>PC, DOS</span>
                  </div>
                </div>

                {/* Fan Resources */}
                {game.fanSites && game.fanSites.length > 0 && (
                  <div className="info-card">
                    <h3>Fan Resources</h3>
                    <div className="fan-links">
                      {game.fanSites.map((site, index) => (
                        <a key={index} href={site.url} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt me-2"></i>
                          {site.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Similar Games */}
                {similarGames.length > 0 && (
                  <div className="info-card">
                    <h3>Similar Games</h3>
                    <div className="similar-games">
                      {similarGames.map((similarGame) => (
                        <Link key={similarGame.id} to={`/game/${similarGame.id}`}>
                          <div className="d-flex align-items-center">
                            <div className="similar-game-icon me-2">
                              <i className="fas fa-gamepad"></i>
                            </div>
                            <div>
                              <div className="fw-bold">{truncateText(similarGame.title, 30)}</div>
                              <small className="text-muted">{similarGame.year}</small>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Modal */}
      <div className="modal fade" id="screenshotsModal" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Screenshots</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="carousel slide">
                <div className="carousel-inner">
                  {game.screenshots && game.screenshots.map((screenshot, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="d-flex justify-content-center">
                        <div className="screenshot-placeholder">
                          <i className="fas fa-image"></i>
                          <p>Screenshot {index + 1}</p>
                          <small className="text-muted">{game.title}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Modal */}
      <div className="modal fade" id="videosModal" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Videos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="videos-grid">
                {game.videos && game.videos.map((video, index) => (
                  <div key={index} className="video-item" onClick={() => window.open(video.url, '_blank')}>
                    <div className="video-placeholder">
                      <i className="fas fa-play-circle"></i>
                      <h5>{video.title}</h5>
                      <p className="text-muted">Click to watch on YouTube</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetailPage