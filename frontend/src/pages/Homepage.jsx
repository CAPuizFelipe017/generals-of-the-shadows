import './Homepage.css'

function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>⚔️ GENERALS OF THE SHADOWS</h1>
          <p className="subtitle">Aliança do Supremacy 1942</p>
          <p className="description">
            Somos uma aliança estratégica, unida e determinada a conquistar a vitória no Supremacy 1942.
            Com 11 guerreiros altamente treinados, nosso objetivo é dominar os campos de batalha.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver Membros</button>
            <button className="btn-secondary">Candidatar-se</button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h3>👥 11 Membros</h3>
          <p>Guerreiros dedicados e estratégicos</p>
        </div>
        <div className="info-card">
          <h3>🏆 Rankings</h3>
          <p>Competição saudável entre aliados</p>
        </div>
        <div className="info-card">
          <h3>📅 Eventos</h3>
          <p>Campanhas e operações conjuntas</p>
        </div>
        <div className="info-card">
          <h3>📢 Notícias</h3>
          <p>Atualizações e comunicados importantes</p>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nossa Aliança</h2>
        <p>
          A GENERALS OF THE SHADOWS foi fundada com um propósito: criar uma comunidade estratégica,
          cooperativa e vitoriosa no Supremacy 1942. Valorizamos a disciplina, a lealdade e a estratégia.
        </p>
        <p>
          Cada membro é importante e contribui para nosso sucesso coletivo. Juntos, somos mais fortes.
        </p>
      </section>
    </div>
  )
}

export default Homepage