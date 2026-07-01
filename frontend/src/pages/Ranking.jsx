import './Ranking.css'

function Ranking() {
  const rankings = [
    { position: 1, name: 'Felipe', power: 50000, contributions: 150 },
    { position: 2, name: 'General Alpha', power: 45000, contributions: 140 },
    { position: 3, name: 'General Beta', power: 42000, contributions: 135 },
    { position: 4, name: 'Coronel 1', power: 35000, contributions: 120 },
    { position: 5, name: 'Coronel 2', power: 33000, contributions: 118 },
    { position: 6, name: 'Capitão 1', power: 28000, contributions: 100 },
    { position: 7, name: 'Capitão 2', power: 26000, contributions: 95 },
    { position: 8, name: 'Tenente 1', power: 20000, contributions: 80 },
    { position: 9, name: 'Tenente 2', power: 18000, contributions: 75 },
    { position: 10, name: 'Soldado 1', power: 12000, contributions: 60 },
    { position: 11, name: 'Soldado 2', power: 10000, contributions: 50 },
  ]

  return (
    <div className="ranking-page">
      <h1>🏆 Rankings</h1>
      <p className="subtitle">Veja o desempenho de cada membro</p>

      <div className="ranking-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Poder</th>
              <th>Contribuições</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((rank) => (
              <tr key={rank.position} className={`rank-${rank.position}`}>
                <td className="position">
                  {rank.position === 1 && '🥇'}
                  {rank.position === 2 && '🥈'}
                  {rank.position === 3 && '🥉'}
                  {rank.position > 3 && rank.position}
                </td>
                <td className="name">{rank.name}</td>
                <td className="power">{rank.power.toLocaleString()}</td>
                <td className="contributions">{rank.contributions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ranking