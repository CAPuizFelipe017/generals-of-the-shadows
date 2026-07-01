import { useState, useEffect } from 'react'
import './AdminLogin.css'

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const ADMIN_CREDENTIALS = [
    { username: 'King_Assombroso', password: 'Marechal123', level: 'supremo' },
    { username: 'RV66', password: 'General123', level: 'general' },
    { username: 'Cap_luizfelipe', password: 'General123', level: 'general' }
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    const admin = ADMIN_CREDENTIALS.find(
      cred => cred.username === username && cred.password === password
    )

    if (admin) {
      onLogin({
        username: admin.username,
        level: admin.level
      })
    } else {
      setError('❌ Usuário ou senha inválidos!')
      setPassword('')
    }
  }

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>🛡️ ACESSO ADMINISTRATIVO</h1>
          <p>Alto Comando - GENERALS OF THE SHADOWS</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">👤 Usuário (Nick no Game)</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nick..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔐 Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha..."
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">🔓 Entrar no Painel</button>
        </form>

        <div className="login-footer">
          <p>⚠️ Acesso restrito ao Alto Comando</p>
          <p>Apenas Marechal Supremo e Generais têm acesso</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
