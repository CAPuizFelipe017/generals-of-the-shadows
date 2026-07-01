import { Link } from 'react-router-dom'
import { FaHome, FaUsers, FaTrophy, FaCalendar, FaNewspaper, FaClipboard } from 'react-icons/fa'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>⚔️ GENERALS OF THE SHADOWS</h1>
          <p>Supremacy 1942</p>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/members" className="nav-link">
            <FaUsers /> Membros
          </Link>
          <Link to="/ranking" className="nav-link">
            <FaTrophy /> Ranking
          </Link>
          <Link to="/events" className="nav-link">
            <FaCalendar /> Eventos
          </Link>
          <Link to="/news" className="nav-link">
            <FaNewspaper /> Notícias
          </Link>
          <Link to="/apply" className="nav-link apply-btn">
            <FaClipboard /> Candidatar
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header