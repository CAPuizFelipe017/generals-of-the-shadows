import './Events.css'

function Events() {
  const events = [
    {
      id: 1,
      title: 'Operação Shadow Strike',
      date: '2024-07-15',
      description: 'Grande ofensiva coordenada contra aliança rival',
      status: 'Planejado',
      participants: 11
    },
    {
      id: 2,
      title: 'Defesa do Território',
      date: '2024-07-10',
      description: 'Defesa estratégica das nossas posições',
      status: 'Em Progresso',
      participants: 9
    },
    {
      id: 3,
      title: 'Reunião Estratégica',
      date: '2024-07-05',
      description: 'Discussão de táticas e estratégias futuras',
      status: 'Concluído',
      participants: 11
    },
    {
      id: 4,
      title: 'Treinamento Tático',
      date: '2024-07-20',
      description: 'Aperfeiçoamento de técnicas de combate',
      status: 'Planejado',
      participants: 8
    },
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Concluído':
        return 'status-completed'
      case 'Em Progresso':
        return 'status-ongoing'
      case 'Planejado':
        return 'status-planned'
      default:
        return ''
    }
  }

  return (
    <div className="events-page">
      <h1>📅 Eventos e Campanhas</h1>
      <p className="subtitle">Acompanhe as operações da aliança</p>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className={`status-badge ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
            </div>
            <p className="event-date">📅 {new Date(event.date).toLocaleDateString('pt-BR')}</p>
            <p className="event-description">{event.description}</p>
            <div className="event-footer">
              <span className="participants">👥 {event.participants} participantes</span>
              <button className="details-btn">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events