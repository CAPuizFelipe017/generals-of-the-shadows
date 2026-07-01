import { useState } from 'react'
import './Members.css'

function Members() {
  const [members] = useState([
    { id: 1, name: 'Felipe', rank: 'Líder', power: 50000, status: 'Ativo' },
    { id: 2, name: 'General Alpha', rank: 'General', power: 45000, status: 'Ativo' },
    { id: 3, name: 'General Beta', rank: 'General', power: 42000, status: 'Ativo' },
    { id: 4, name: 'Coronel 1', rank: 'Coronel', power: 35000, status: 'Ativo' },
    { id: 5, name: 'Coronel 2', rank: 'Coronel', power: 33000, status: 'Ativo' },
    { id: 6, name: 'Capitão 1', rank: 'Capitão', power: 28000, status: 'Ativo' },
    { id: 7, name: 'Capitão 2', rank: 'Capitão', power: 26000, status: 'Ativo' },
    { id: 8, name: 'Tenente 1', rank: 'Tenente', power: 20000, status: 'Ativo' },
    { id: 9, name: 'Tenente 2', rank: 'Tenente', power: 18000, status: 'Ativo' },
    { id: 10, name: 'Soldado 1', rank: 'Soldado', power: 12000, status: 'Ativo' },
    { id: 11, name: 'Soldado 2', rank: 'Soldado', power: 10000, status: 'Ativo' },
  ])

  return (
    <div className="members-page">
      <h1>👥 Membros da Aliança</h1>
      <p className="subtitle">Conheça nossos {members.length} guerreiros</p>

      <div className="members-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-header">
              <h3>{member.name}</h3>
              <span className="rank">{member.rank}</span>
            </div>
            <div className="member-info">
              <p><strong>Poder:</strong> {member.power.toLocaleString()}</p>
              <p><strong>Status:</strong> <span className="status-badge">{member.status}</span></p>
            </div>
            <button className="view-profile">Ver Perfil</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Members