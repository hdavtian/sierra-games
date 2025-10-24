import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { gamesApi, transformGameData, SERIES_CONFIG, getSeriesConfig, getSeriesBgClass, formatYear, truncateText, getSeriesBackgroundStyle } from '../services/gamesApi'

const GameDetailPage = () => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [allGames, setAllGames] = useState([])
  const [screenshots, setScreenshots] = useState([])
  const [loadingScreenshots, setLoadingScreenshots] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Load both the specific game and all games for similar games
        const [gameData, allGamesData] = await Promise.all([
          gamesApi.getGameById(gameId),
          gamesApi.getAllGames()
        ])
        
        if (gameData) {
          const transformedGame = transformGameData(gameData)
          setGame(transformedGame)
          document.title = `${transformedGame.title} - Sierra Games`
          // Load screenshots for this game
          loadScreenshots(gameId)
        } else {
          setGame(null)
          document.title = 'Game Not Found - Sierra Games'
        }
        
        setAllGames(allGamesData.map(transformGameData))
      } catch (err) {
        console.error('Failed to load game details:', err)
        setError(err.message || 'Failed to load game details')
        setGame(null)
        document.title = 'Error - Sierra Games'
      } finally {
        setLoading(false)
      }
    }

    const loadScreenshots = async (gameId) => {
      try {
        setLoadingScreenshots(true)
        const screenshotsData = await gamesApi.getGameScreenshots(gameId)
        setScreenshots(screenshotsData || [])
      } catch (err) {
        console.error('Failed to load screenshots:', err)
        setScreenshots([])
      } finally {
        setLoadingScreenshots(false)
      }
    }

    if (gameId) {
      loadGameDetails()
      // Scroll to top when gameId changes
      window.scrollTo(0, 0)
    }
  }, [gameId])



  const getSimilarGames = (currentGame) => {
    if (!allGames || !currentGame) return []
    
    // First try to get games from the same series
    let similarGames = allGames
      .filter(g => g.id !== currentGame.id && g.series === currentGame.series)
      .slice(0, 3)
    
    // If we don't have enough from the same series, add other games
    if (similarGames.length < 3) {
      const otherGames = allGames
        .filter(g => g.id !== currentGame.id && g.series !== currentGame.series)
        .slice(0, 3 - similarGames.length)
      similarGames = [...similarGames, ...otherGames]
    }
    
    return similarGames
  }

  // Screenshots Carousel Component
  const ScreenshotsCarousel = ({ screenshots, gameName }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [intervalId, setIntervalId] = useState(null)

    // Auto-advance slides
    useEffect(() => {
      if (autoplay && screenshots.length > 1) {
        const id = setInterval(() => {
          setCurrentSlide(current => (current + 1) % screenshots.length)
        }, 4000) // 4 seconds per slide
        setIntervalId(id)
        return () => clearInterval(id)
      } else if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(null)
      }
    }, [autoplay, screenshots.length])

    // Clean up interval on unmount
    useEffect(() => {
      return () => {
        if (intervalId) {
          clearInterval(intervalId)
        }
      }
    }, [])

    // Focus the carousel for keyboard navigation when component mounts
    useEffect(() => {
      const carousel = document.querySelector('.screenshots-carousel-container')
      if (carousel) {
        carousel.focus()
      }
    }, [])

    const goToSlide = (index) => {
      setCurrentSlide(index)
    }

    const nextSlide = () => {
      setCurrentSlide(current => (current + 1) % screenshots.length)
    }

    const prevSlide = () => {
      setCurrentSlide(current => (current - 1 + screenshots.length) % screenshots.length)
    }

    const scrollThumbnailIntoView = (index) => {
      const thumbnailElement = document.querySelector(`[data-thumbnail-index="${index}"]`)
      if (thumbnailElement) {
        thumbnailElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }

    // Auto-scroll thumbnail when slide changes
    useEffect(() => {
      scrollThumbnailIntoView(currentSlide)
    }, [currentSlide])

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
      }
    }

    const currentScreenshot = screenshots[currentSlide]

    return (
      <div className="position-relative screenshots-carousel-container" tabIndex={0} onKeyDown={handleKeyDown}>
        {/* Main Image Display */}
        <div className="screenshot-container">
          <img
            src={`/images/games/${currentScreenshot.filename}`}
            alt={currentScreenshot.title || `${gameName} Screenshot ${currentSlide + 1}`}
            className="img-fluid rounded"
            style={{ maxHeight: '70vh', objectFit: 'contain', width: '100%' }}
          />
          {currentScreenshot.title && (
            <div className="text-center mt-3">
              <h6 className="mb-1">{currentScreenshot.title}</h6>
              {currentScreenshot.description && (
                <p className="text-muted small mb-0">{currentScreenshot.description}</p>
              )}
            </div>
          )}
        </div>

        {/* Navigation Controls */}
        {screenshots.length > 1 && (
          <>
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}

        {/* Progress Indicator */}
        <div className="screenshot-progress">
          {currentSlide + 1} of {screenshots.length}
        </div>

        {/* Thumbnail Navigation */}
        {screenshots.length > 1 && (
          <div className="thumbnail-navigation">
            <div className="thumbnail-navigation-controls">
              <h6>Browse Screenshots</h6>
              <div className="controls-right">
                <div className="autoplay-controls">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoplayCheck"
                      checked={autoplay}
                      onChange={(e) => setAutoplay(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="autoplayCheck">
                      <i className="fas fa-play"></i>
                      Auto
                    </label>
                  </div>
                </div>
                <div className="thumbnail-nav-buttons">
                  <button 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => document.querySelector('.thumbnail-scroll').scrollBy({left: -200, behavior: 'smooth'})}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => document.querySelector('.thumbnail-scroll').scrollBy({left: 200, behavior: 'smooth'})}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="thumbnail-container">
              <div className="thumbnail-scroll">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    data-thumbnail-index={index}
                    className={`thumbnail-item ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    title={screenshot.title || `Screenshot ${index + 1}`}
                  >
                    <img
                      src={`/images/games/${screenshot.filename}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                    <div className="thumbnail-overlay">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
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

  if (error) {
    return (
      <div className="game-detail-wrapper">
        <div className="container py-5">
          <div className="alert alert-danger text-center">
            <h4 className="alert-heading">Error Loading Game</h4>
            <p>{error}</p>
            <hr />
            <p className="mb-0">
              <Link to="/" className="btn btn-primary">Return Home</Link>
            </p>
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
          <div className="hero-background" style={{background: getHeroBackground('KQ')}}></div>
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
        <div className="hero-background" style={getSeriesBackgroundStyle(game.series)}></div>
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
                      {screenshots.length > 0 && (
                        <span className="badge bg-light text-dark ms-2">{screenshots.length}</span>
                      )}
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
                  {game.longDescription ? (
                    game.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))
                  ) : (
                    <p>{game.shortDescription}</p>
                  )}
                </div>
              </div>

              {/* Characters */}
              {game.characters && Array.isArray(game.characters) && game.characters.length > 0 && (
                <div className="detail-section">
                  <h2>Main Characters</h2>
                  <div className="characters-grid">
                    {game.characters.map((character, index) => (
                      <div key={index} className="character-card">
                        <div className="character-avatar">
                          <i className="fas fa-user-circle"></i>
                        </div>
                        <h4>{typeof character === 'object' ? character.name : character}</h4>
                        <p>{typeof character === 'object' ? character.description : ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gameplay Features */}
              {game.features && Array.isArray(game.features) && game.features.length > 0 && (
                <div className="detail-section">
                  <h2>Gameplay Features</h2>
                  <div className="features-list">
                    {game.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <h5>
                          <i className="fas fa-star text-warning me-2"></i>
                          {typeof feature === 'object' ? feature.name : feature}
                        </h5>
                        <p>{typeof feature === 'object' ? feature.description : ''}</p>
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
                {game.fanSites && Array.isArray(game.fanSites) && game.fanSites.length > 0 && (
                  <div className="info-card">
                    <h3>Fan Resources</h3>
                    <div className="fan-links">
                      {game.fanSites.map((site, index) => {
                        const siteUrl = typeof site === 'object' ? site.url : site;
                        const siteName = typeof site === 'object' ? site.name : `Fan Site ${index + 1}`;
                        return (
                          <a key={index} href={siteUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt me-2"></i>
                            {siteName}
                          </a>
                        );
                      })}
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
              <h5 className="modal-title">{game.title} - Screenshots</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {loadingScreenshots ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading screenshots...</span>
                  </div>
                  <p className="mt-2">Loading screenshots...</p>
                </div>
              ) : screenshots.length > 0 ? (
                <ScreenshotsCarousel screenshots={screenshots} gameName={game.title} />
              ) : (
                <div className="text-center py-5">
                  <i className="fas fa-images text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                  <p className="text-muted">No screenshots available for this game.</p>
                </div>
              )}
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
                {game.videos && Array.isArray(game.videos) && game.videos.map((video, index) => (
                  <div key={index} className="video-item" onClick={() => window.open(typeof video === 'object' ? video.url : video, '_blank')}>
                    <div className="video-placeholder">
                      <i className="fas fa-play-circle"></i>
                      <h5>{typeof video === 'object' ? video.title : `Video ${index + 1}`}</h5>
                      <p className="text-muted">Click to watch on YouTube</p>
                    </div>
                  </div>
                ))}
                {(!game.videos || !Array.isArray(game.videos) || game.videos.length === 0) && (
                  <div className="text-center">
                    <p className="text-muted">No videos available for this game.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetailPage