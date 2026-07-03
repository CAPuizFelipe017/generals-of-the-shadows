function RankIcon({ rank, size = 'normal' }) {
  const RANKS = {
    1: { icon: '🦅', name: 'Marechal Supremo' },
    2: { icon: '⭐', name: 'General de Estratégias' },
    3: { icon: '🎖️', name: 'General de Divisão' },
    4: { icon: '⚔️', name: 'General de Brigada' },
    5: { icon: '🗡️', name: 'Terceiro Sargento' },
    6: { icon: '🛡️', name: 'Cabo' },
    7: { icon: '💂', name: 'Soldado' },
    8: { icon: '👤', name: 'Recruta' }
  }

  const rankData = RANKS[rank] || RANKS[8]
  const fontSize = size === 'large' ? '2rem' : '1rem'

  return (
    <span title={rankData.name} style={{ fontSize }}>
      {rankData.icon}
    </span>
  )
}

export default RankIcon
