import { useState, useEffect } from 'react'
import './AdminDashboard.css'
import AdminMembers from '../components/admin/AdminMembers'
import AdminEvents from '../components/admin/AdminEvents'
import AdminAnnouncements from '../components/admin/AdminAnnouncements'
import AdminApplications from '../components/admin/AdminApplications'
import AdminMedals from '../components/admin/AdminMedals'
import ActivityLogs from '../components/admin/ActivityLogs'

function AdminDashboard({ admin, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [stats, setStats] = useState({
    totalMembers: 0,
    activeEvents: 0,
    pendingApplications: 0,
    announcements: 0
  })

  useEffect(() => {
    loadStats()
  }, [activeTab])

  const loadStats = () => {
    const members = JSON.parse(localStorage.getItem('alliance_members') || '[]')
    const events = JSON.parse(localStorage.getItem('alliance_events') || '[]')
    const applications = JSON.parse(localStorage.getItem('pending_applications') || '[]')
    const announcements = JSON.parse(localStorage.getItem('alliance_announcements') || '[]')

    setStats({
      totalMembers: members.length,
      activeEvents: events.filter(e => e.status === 'upcoming').length,
      pendingApplications: applications.filter(a => a.status === 'pending').length,
      announcements: announcements.length
    })
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-overview">
            <div className="stats-grid">
              <div className="stat-card members">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>Membros</h3>
                  <p className="stat-number">{stats.totalMembers}</p>
                </div>
              </div>
              <div className="stat-card events">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <h3>Eventos Ativos</h3>
                  <p className="stat-number">{stats.activeEvents}</p>
                </div>
              </div>
              <div className="stat-card applications">
                <div className="stat-icon">📋</div>
                <div className="stat-info">
                  <h3>Candidaturas Pendentes</h3>
                  <p className="stat-number">{stats.pendingApplications}</p>
                </div>
              </div>
              <div className="stat-card announcements">
                <div className="stat-icon">📢</div>
                <div className="stat-info">
                  <h3>Anúncios</h3>
                  <p className="stat-number">{stats.announcements}</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'members':
        return <AdminMembers admin={admin} />
      case 'events':
        return <AdminEvents admin={admin} />
      case 'announcements':
        return <AdminAnnouncements admin={admin} />
      case 'applications':
        return <AdminApplications admin={admin} />
      case 'medals':
        return <AdminMedals admin={admin} />
      case 'logs':
        return <ActivityLogs admin={admin} />
      default:
        return null
    }
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="header-left">
          <h1>⚔️ PAINEL ADMINISTRATIVO</h1>
          <p>GENERALS OF THE SHADOWS</p>
        </div>
        <div className="header-right">
          <div className="admin-info">
            <span>👤 {admin.username}</span>
            <span className="admin-level">🎖️ {admin.level === 'supremo' ? 'Marechal Supremo' : 'General'}</span>
          </div>
          <button className="logout-btn" onClick={onLogout}>🚪 Sair</button>
        </div>
      </div>

      <div className="admin-nav">
        <button 
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`nav-btn ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => setActiveTab('members')}
        >
          👥 Membros
        </button>
        <button 
          className={`nav-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          📅 Eventos
        </button>
        <button 
          className={`nav-btn ${activeTab === 'announcements' ? 'active' : ''}`}
          onClick={() => setActiveTab('announcements')}
        >
          📢 Anúncios
        </button>
        <button 
          className={`nav-btn ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          📋 Candidaturas
        </button>
        <button 
          className={`nav-btn ${activeTab === 'medals' ? 'active' : ''}`}
          onClick={() => setActiveTab('medals')}
        >
          🏅 Medalhas
        </button>
        <button 
          className={`nav-btn ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          📝 Logs
        </button>
      </div>

      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default AdminDashboard
