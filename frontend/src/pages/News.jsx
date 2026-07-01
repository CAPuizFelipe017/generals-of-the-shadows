import './News.css'

function News() {
  const newsList = [
    {
      id: 1,
      title: 'Nova Estratégia de Defesa Implementada',
      date: '2024-07-01',
      author: 'Felipe',
      content: 'Após análise profunda das últimas campanhas, implementamos uma nova estratégia defensiva que garantirá melhor proteção de nossas posições estratégicas.',
      category: 'Estratégia'
    },
    {
      id: 2,
      title: 'Parabéns ao General Alpha!',
      date: '2024-06-28',
      author: 'Felipe',
      content: 'General Alpha atingiu 45 mil de poder! Continuamos crescendo como aliança. Parabéns por sua dedicação ao GENERALS OF THE SHADOWS!',
      category: 'Conquistas'
    },
    {
      id: 3,
      title: 'Próximo Evento: Shadow Strike',
      date: '2024-06-25',
      author: 'Felipe',
      content: 'Marque em seu calendário! Em 15 de julho, realizaremos a Operação Shadow Strike. Todos os membros devem estar preparados para participar.',
      category: 'Eventos'
    },
    {
      id: 4,
      title: 'Candidaturas Abertas',
      date: '2024-06-20',
      author: 'Felipe',
      content: 'Estamos aceitando novas candidaturas! Se você tem interesse em fazer parte do GENERALS OF THE SHADOWS, envie seu formulário de candidatura.',
      category: 'Recrutamento'
    },
  ]

  return (
    <div className="news-page">
      <h1>📰 Notícias da Aliança</h1>
      <p className="subtitle">Fique atualizado com os últimos comunicados</p>

      <div className="news-container">
        {newsList.map((news) => (
          <article key={news.id} className="news-article">
            <div className="news-header">
              <h2>{news.title}</h2>
              <span className="news-category">{news.category}</span>
            </div>
            <div className="news-meta">
              <span className="news-date">📅 {new Date(news.date).toLocaleDateString('pt-BR')}</span>
              <span className="news-author">✍️ Por {news.author}</span>
            </div>
            <p className="news-content">{news.content}</p>
            <a href="#" className="read-more">Leia Mais →</a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News