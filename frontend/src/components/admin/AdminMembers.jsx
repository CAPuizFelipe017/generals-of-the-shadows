import { useState, useEffect } from 'react'
import './AdminMembers.css'
import RankIcon from './RankIcon'

const RANKS = {
  1: { name: 'Marechal Supremo', icon: '🦅', color: '#FFD700' },
  2: { name: 'General de Estratégias', icon: '⭐', color: '#C0C0C0' },
  3: { name: 'General de Divisão', icon: '🎖️', color: '#CD7F32' },
  4: { name: 'General de Brigada', icon: '⚔️', color: '#8B4513' },
  5: { name: 'Terceiro Sargento', icon: '🗡️', color: '#4169E1' },
  6: { name: 'Cabo', icon: '🛡️', color: '#32CD32' },
  7: { name: 'Soldado', icon: '💂', color: '#696969' },
  8: { name: 'Recruta', icon: '👤', color: '#A9A9A9' }
}

function AdminMembers({ admin }) {
  const [members, setMembers] = useState([])
  const [selectedMember, setSelectedMember] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRank, setFilterRank] = useState('all')
  const [showPromoteModal, setShowPromoteModal] = useState(false)
  const [newRank, setNewRank] = useState()

  useEffect(() => {
    loadMembers()
  }, [])

  const loadMembers = () => {
    const data = localStorage.getItem('alliance_members')
    const initialMembers = data ? JSON.parse(data) : getInitialMembers()
    setMembers(initialMembers)
    localStorage.setItem('alliance_members', JSON.stringify(initialMembers))
  }

  const getInitialMembers = () => [
    {
      id: 1,
      nickname: 'King_Assombroso',
      realName: 'Desconhecido',
      rank: 1,
      power: 50000,
      joinDate: '2024-01-01',
      status: 'approved',
      medals: ['🏛️ Fundador', '👑 Liderança Suprema']
    },
    {
      id: 2,
      nickname: 'RV66',
      realName: 'Rafael Vieira',
      rank: 2,
      power: 45000,
      joinDate: '2024-01-15',
      status: 'approved',
      medals: ['🧠 Estrategista Nato']
    },
    {
      id: 3,
      nickname: 'Cap_luizfelipe',
      realName: 'Luiz Felipe',
      rank: 3,
      power: 42000,
      joinDate: '2024-02-01',
      status: 'approved',
      medals: []
    },
    {
      id: 4,
      nickname: 'MadFlorzinha',
      realName: 'Desconhecido',
      rank: 4,
      power: 38000,
      joinDate: '2024-02-10',
      status: 'approved',
      medals: []
    },
    {
      id: 5,
      nickname: 'Lucasmg32',
      realName: 'Desconhecido',
      rank: 5,
      power: 35000,
      joinDate: '2024-03-01',
      status: 'approved',
      medals: []
    },
    {
      id: 6,
      nickname: 'L3VI4THANN',
      realName: 'Desconhecido',
      rank: 5,
      power: 33000,
      joinDate: '2024-03-05',
      status: 'approved',
      medals: []
    },
    {
      id: 7,
      nickname: 'Martinriggs',
      realName: 'Desconhecido',
      rank: 6,
      power: 30000,
      joinDate: '2024-03-15',
      status: 'approved',
      medals: []
    },
    {
      id: 8,
      nickname: 'Dornocoxix20',
      realName: 'Desconhecido',
      rank: 6,
      power: 28000,
      joinDate: '2024-03-20',
      status: 'approved',
      medals: []
    },
    {
      id: 9,
      nickname: 'Brauzo',
      realName: 'Desconhecido',
      rank: 7,
      power: 25000,
      joinDate: '2024-04-01',
      status: 'approved',
      medals: []
    },
    {
      id: 10,
      nickname: 'Swag',
      realName: 'Desconhecido',
      rank: 8,
      power: 15000,
      joinDate: '2024-04-10',
      status: 'approved',
      medals: []
    },
    {
      id: 11,
      nickname: 'Guxtttavo',
      realName: 'Desconhecido',
      rank: 8,
      power: 12000,
      joinDate: '2024-04-15',
      status: 'approved',
      medals: []
    },
    {
      id: 12,
      nickname: 'Caiaque423',
      realName: 'Desconhecido',
      rank: 8,
      power: 10000,
      joinDate: '2024-04-20',
      status: 'approved',
      medals: []
    }
  ]

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.realName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRank = filterRank === 'all' || member.rank === parseInt(filterRank)
    return matchesSearch && matchesRank
  })

  const promoteMember = () => {
    if (!selectedMember || !newRank) return

    const updated = members.map(m => 
      m.id === selectedMember.id ? { ...m, rank: newRank } : m
    )
    setMembers(updated)
    localStorage.setItem('alliance_members', JSON.stringify(updated))
    
    logActivity(`Promovido ${selectedMember.nickname} para ${RANKS[newRank].name}`)
    
    setShowPromoteModal(false)
    setSelectedMember(null)
    setNewRank()
  }

  const demoteMember = () => {
    if (!selectedMember) return

    const newRankValue = selectedMember.rank + 1 <= 8 ? selectedMember.rank + 1 : 8
    const updated = members.map(m => 
      m.id === selectedMember.id ? { ...m, rank: newRankValue } : m
    )
    setMembers(updated)
    localStorage.setItem('alliance_members', JSON.stringify(updated))
    
    logActivity(`Rebaixado ${selectedMember.nickname} para ${RANKS[newRankValue].name}`)
    
    setSelectedMember(null)
  }

  const removeMember = () => {
    if (!selectedMember) return
    if (window.confirm(`Tem certeza que deseja remover ${selectedMember.nickname}?`)) {
      const updated = members.filter(m => m.id !== selectedMember.id)
      setMembers(updated)
      localStorage.setItem('alliance_members', JSON.stringify(updated))
      
      logActivity(`Removido membro ${selectedMember.nickname}`)
      
      setSelectedMember(null)
    }
  }

  const logActivity = (action) => {
    const logs = JSON.parse(localStorage.getItem('activity_logs') || '[]')
    logs.push({
      action,
      admin: admin.username,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('activity_logs', JSON.stringify(logs))
  }

  return (
    <div className="admin-members">
      <h2>👥 Gerenciar Membros</h2>

      <div className="members-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Buscar por nick ou nome real..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <select value={filterRank} onChange={(e) => setFilterRank(e.target.value)}>
            <option value="all">📊 Todas as Patentes</option>
            {Object.entries(RANKS).map(([id, rank]) => (
              <option key={id} value={id}>{rank.icon} {rank.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="members-list">
        <table>
          <thead>
            <tr>
              <th>Patente</th>
              <th>Nick</th>
              <th>Nome Real</th>
              <th>Poder</th>
              <th>Entrada</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map(member => (
              <tr key={member.id} className="member-row">
                <td>
                  <div className="rank-cell">
                    <span>{RANKS[member.rank].icon}</span>
                    <span>{RANKS[member.rank].name}</span>
                  </div>
                </td>
                <td><strong>{member.nickname}</strong></td>
                <td>{member.realName}</td>
                <td className="power">{member.power.toLocaleString()}⚡</td>
                <td>{new Date(member.joinDate).toLocaleDateString('pt-BR')}</td>
                <td>
                  <button 
                    className="btn-select"
                    onClick={() => setSelectedMember(member)}
                  >
                    ✏️ Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMember && (
        <div className="member-details">
          <div className="details-card">
            <h3>Detalhes de {selectedMember.nickname}</h3>
            <div className="details-info">
              <p><strong>Patente Atual:</strong> {RANKS[selectedMember.rank].icon} {RANKS[selectedMember.rank].name}</p>
              <p><strong>Nome Real:</strong> {selectedMember.realName}</p>
              <p><strong>Poder:</strong> {selectedMember.power.toLocaleString()}⚡</p>
              <p><strong>Data de Entrada:</strong> {new Date(selectedMember.joinDate).toLocaleDateString('pt-BR')}</p>
              <p><strong>Medalhas:</strong> {selectedMember.medals.length > 0 ? selectedMember.medals.join(', ') : 'Nenhuma'}</p>
            </div>

            <div className="action-buttons">
              <button className="btn-promote" onClick={() => setShowPromoteModal(true)}>
                ⬆️ Promover
              </button>
              <button className="btn-demote" onClick={demoteMember}>
                ⬇️ Rebaixar
              </button>
              <button className="btn-remove" onClick={removeMember}>
                ❌ Remover
              </button>
              <button className="btn-close" onClick={() => setSelectedMember(null)}>
                ✕ Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {showPromoteModal && selectedMember && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Promover {selectedMember.nickname}</h3>
            <p>Selecione a nova patente:</p>
            <select value={newRank || ''} onChange={(e) => setNewRank(parseInt(e.target.value))}>
              <option value="">-- Escolha uma patente --</option>
              {Object.entries(RANKS).map(([id, rank]) => (
                <option key={id} value={id}>{rank.icon} {rank.name}</option>
              ))}
            </select>
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={promoteMember}>✓ Confirmar</button>
              <button className="btn-cancel" onClick={() => setShowPromoteModal(false)}>✕ Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminMembers
