import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Sierra Games Collection</h5>
            <p>Celebrating the golden age of adventure gaming and the legendary titles that shaped our childhood memories.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#games-collection">Games Collection</a></li>
              <li><Link to="/admin/login">Admin Portal</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <h5>Connect</h5>
            <p>Part of the harmadavtian.com portfolio</p>
            <div className="social-links">
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 My Favorite Sierra Games Growing Up. A portfolio project by harmadavtian.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer