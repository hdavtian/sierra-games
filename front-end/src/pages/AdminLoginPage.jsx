import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEMO_CREDENTIALS } from '@/data/games'

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already logged in
    if (isLoggedIn()) {
      navigate('/admin/dashboard')
    }
  }, [navigate])

  const isLoggedIn = () => {
    const sessionData = sessionStorage.getItem('sierraAdminLogin')
    const localData = localStorage.getItem('sierraAdminLogin')
    
    if (sessionData || localData) {
      try {
        const data = JSON.parse(sessionData || localData)
        if (localData) {
          // Check if login is still valid (within 30 days)
          const loginTime = new Date(data.loginTime)
          const now = new Date()
          const daysDiff = (now - loginTime) / (1000 * 60 * 60 * 24)
          
          if (daysDiff > 30) {
            localStorage.removeItem('sierraAdminLogin')
            return false
          }
        }
        return data.username === DEMO_CREDENTIALS.username
      } catch (e) {
        return false
      }
    }
    return false
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate inputs
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password.')
      setLoading(false)
      return
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check credentials
    if (formData.username === DEMO_CREDENTIALS.username && 
        formData.password === DEMO_CREDENTIALS.password) {
      
      // Successful login
      const loginData = {
        username: DEMO_CREDENTIALS.username,
        loginTime: new Date().toISOString(),
        rememberMe: formData.rememberMe
      }

      // Store login data
      if (formData.rememberMe) {
        localStorage.setItem('sierraAdminLogin', JSON.stringify(loginData))
      } else {
        sessionStorage.setItem('sierraAdminLogin', JSON.stringify(loginData))
      }

      // Show success and redirect
      showToast('Login successful! Redirecting...', 'success')
      setTimeout(() => {
        navigate('/admin/dashboard')
      }, 1000)
    } else {
      // Failed login
      setError('Invalid username or password. Please try again.')
    }

    setLoading(false)
  }

  const showToast = (message, type = 'info') => {
    // Simple toast implementation - could be enhanced with a proper toast library
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

  return (
    <div className="admin-login-wrapper">
      {/* Login Section */}
      <section className="login-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="login-card">
                <div className="login-header">
                  <div className="login-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h2>Admin Portal</h2>
                  <p>Access the Sierra Games management system</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                  {error && (
                    <div className="alert alert-danger">
                      <i className="fas fa-exclamation-triangle"></i>
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      <i className="fas fa-user"></i>
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      <i className="fas fa-lock"></i>
                      Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                        disabled={loading}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        disabled={loading}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me for 30 days
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-login" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt"></i>
                        Sign In
                      </>
                    )}
                  </button>
                </form>

                <div className="login-help">
                  <p className="demo-credentials">
                    <strong>Demo Credentials:</strong><br />
                    Username: <code>{DEMO_CREDENTIALS.username}</code><br />
                    Password: <code>{DEMO_CREDENTIALS.password}</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminLoginPage