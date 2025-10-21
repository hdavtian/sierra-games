import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import GameDetailPage from '@/pages/GameDetailPage'
import AdminLoginPage from '@/pages/AdminLoginPage'
import AdminDashboardPage from '@/pages/AdminDashboardPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameId" element={<GameDetailPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App