import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Members from './pages/Members'
import Ranking from './pages/Ranking'
import Events from './pages/Events'
import News from './pages/News'
import Application from './pages/Application'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Homepage />
      case 'members':
        return <Members />
      case 'ranking':
        return <Ranking />
      case 'events':
        return <Events />
      case 'news':
        return <News />
      case 'application':
        return <Application />
      default:
        return <Homepage />
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
            ⚔️ GENERALS OF THE SHADOWS
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                🏠 Início
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'members' ? 'active' : ''}`}
                onClick={() => setCurrentPage('members')}
              >
                👥 Membros
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'ranking' ? 'active' : ''}`}
                onClick={() => setCurrentPage('ranking')}
              >
                🏆 Rankings
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'events' ? 'active' : ''}`}
                onClick={() => setCurrentPage('events')}
              >
                📅 Eventos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'news' ? 'active' : ''}`}
                onClick={() => setCurrentPage('news')}
              >
                📰 Notícias
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'application' ? 'active' : ''}`}
                onClick={() => setCurrentPage('application')}
              >
                📋 Candidatura
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 GENERALS OF THE SHADOWS - Aliança Supremacy 1942</p>
          <p>Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
