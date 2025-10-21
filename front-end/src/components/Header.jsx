import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const location = useLocation()

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNav}>
            <i className="fas fa-gamepad"></i>
            Sierra Games
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNav}
            aria-expanded={isNavOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/')}`} 
                  to="/"
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#games-collection"
                  onClick={closeNav}
                >
                  Games
                </a>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/admin/login')}`} 
                  to="/admin/login"
                  onClick={closeNav}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header