import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SAMPLE_GAMES, DEMO_CREDENTIALS, GAME_SERIES } from '@/data/games'

const AdminDashboardPage = () => {
  const [games, setGames] = useState([...SAMPLE_GAMES])
  const [filteredGames, setFilteredGames] = useState([...SAMPLE_GAMES])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSeries, setFilterSeries] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [showModal, setShowModal] = useState(false)
  const [editingGame, setEditingGame] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [gameToDelete, setGameToDelete] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check authentication
    if (!isLoggedIn()) {
      navigate('/admin/login')
      return
    }

    // Show welcome message
    const currentUser = getCurrentUser()
    if (currentUser) {
      showToast(`Welcome back, ${currentUser.username}!`, 'success')
    }
  }, [navigate])

  useEffect(() => {
    // Apply filters and sorting
    let filtered = [...games]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.seriesName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Series filter
    if (filterSeries) {
      filtered = filtered.filter(game => game.series === filterSeries)
    }

    // Sorting
    switch (sortBy) {
      case 'year':
        filtered.sort((a, b) => b.year - a.year)
        break
      case 'series':
        filtered.sort((a, b) => a.seriesName.localeCompare(b.seriesName))
        break
      case 'updated':
        filtered.reverse()
        break
      case 'title':
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setFilteredGames(filtered)
  }, [games, searchTerm, filterSeries, sortBy])

  const isLoggedIn = () => {
    const sessionData = sessionStorage.getItem('sierraAdminLogin')
    const localData = localStorage.getItem('sierraAdminLogin')
    
    if (sessionData || localData) {
      try {
        const data = JSON.parse(sessionData || localData)
        return data.username === DEMO_CREDENTIALS.username
      } catch (e) {
        return false
      }
    }
    return false
  }

  const getCurrentUser = () => {
    if (!isLoggedIn()) return null
    
    const sessionData = sessionStorage.getItem('sierraAdminLogin')
    const localData = localStorage.getItem('sierraAdminLogin')
    
    try {
      const data = JSON.parse(sessionData || localData)
      return data
    } catch (e) {
      return null
    }
  }

  const logout = () => {
    sessionStorage.removeItem('sierraAdminLogin')
    localStorage.removeItem('sierraAdminLogin')
    showToast('Logged out successfully', 'info')
    setTimeout(() => {
      navigate('/admin/login')
    }, 1000)
  }

  const showToast = (message, type = 'info') => {
    // Simple toast implementation
    const toastContainer = document.getElementById('toast-container') || createToastContainer()
    const toast = document.createElement('div')
    toast.className = `alert alert-${type} alert-dismissible fade show`
    toast.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `
    toastContainer.appendChild(toast)
    
    setTimeout(() => {
      toast.remove()
    }, 5000)
  }

  const createToastContainer = () => {
    const container = document.createElement('div')
    container.id = 'toast-container'
    container.className = 'position-fixed top-0 end-0 p-3'
    container.style.zIndex = '9999'
    document.body.appendChild(container)
    return container
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      logout()
    }
  }

  const openAddGameModal = () => {
    setEditingGame(null)
    setShowModal(true)
  }

  const openEditGameModal = (game) => {
    setEditingGame(game)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingGame(null)
  }

  const openDeleteModal = (game) => {
    setGameToDelete(game)
    setShowDeleteModal(true)
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
    setGameToDelete(null)
  }

  const confirmDelete = () => {
    if (gameToDelete) {
      setGames(games.filter(g => g.id !== gameToDelete.id))
      showToast(`"${gameToDelete.title}" deleted successfully`, 'info')
      closeDeleteModal()
    }
  }

  const getStatusBadgeClass = (status) => {
    return status === 'published' ? 'bg-success' : 'bg-warning'
  }

  const getStatusText = (status) => {
    return status === 'published' ? 'Published' : 'Draft'
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  const calculateStats = () => {
    const totalGames = games.length
    const totalSeries = [...new Set(games.map(game => game.series))].length
    const totalImages = games.reduce((total, game) => total + (game.screenshots?.length || 0), 0)
    const totalVideos = games.reduce((total, game) => total + (game.videos?.length || 0), 0)

    return { totalGames, totalSeries, totalImages, totalVideos }
  }

  const stats = calculateStats()

  return (
    <div className="admin-dashboard-wrapper">
      {/* Admin Header */}
      <header className="admin-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i className="fas fa-gamepad"></i>
              Sierra Games Admin
            </a>
            
            <div className="navbar-nav ms-auto">
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="adminDropdown" role="button" data-bs-toggle="dropdown">
                  <i className="fas fa-user-circle"></i>
                  Administrator
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/"><i className="fas fa-home"></i> View Site</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</button></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="admin-content">
        <div className="container-fluid">
          {/* Dashboard Stats */}
          <div className="dashboard-stats mb-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-gamepad"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalGames}</h3>
                    <p>Total Games</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-layer-group"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalSeries}</h3>
                    <p>Game Series</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalImages}</h3>
                    <p>Screenshots</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="stat-info">
                    <h3>{stats.totalVideos}</h3>
                    <p>Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Games Management */}
          <div className="management-section">
            <div className="section-header">
              <h2>Games Management</h2>
              <button className="btn btn-primary" onClick={openAddGameModal}>
                <i className="fas fa-plus"></i> Add New Game
              </button>
            </div>

            {/* Search and Filter */}
            <div className="admin-controls mb-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search games..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filterSeries}
                    onChange={(e) => setFilterSeries(e.target.value)}
                  >
                    <option value="">All Series</option>
                    {Object.entries(GAME_SERIES).map(([key, series]) => (
                      <option key={key} value={key}>{series.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="title">Sort by Title</option>
                    <option value="year">Sort by Year</option>
                    <option value="series">Sort by Series</option>
                    <option value="updated">Last Updated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Games Table */}
            <div className="table-responsive">
              <table className="table table-striped admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Series</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGames.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        <i className="fas fa-search mb-2 text-muted"></i>
                        <p className="mb-0">No games found</p>
                      </td>
                    </tr>
                  ) : (
                    filteredGames.map((game) => (
                      <tr key={game.id}>
                        <td><strong>{game.title}</strong></td>
                        <td>{game.seriesName}</td>
                        <td>{game.year}</td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(game.status)}`}>
                            {getStatusText(game.status)}
                          </span>
                        </td>
                        <td>{formatDate(new Date())}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-1"
                            onClick={() => openEditGameModal(game)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => openDeleteModal(game)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={closeDeleteModal}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete "{gameToDelete?.title}"? This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeDeleteModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboardPage