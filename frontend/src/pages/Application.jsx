import { useState } from 'react'
import './Application.css'

function Application() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inGameName: '',
    power: '',
    experience: '',
    motivation: '',
    agreement: false
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        inGameName: '',
        power: '',
        experience: '',
        motivation: '',
        agreement: false
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="application-page">
      <h1>📋 Formulário de Candidatura</h1>
      <p className="subtitle">Junte-se ao GENERALS OF THE SHADOWS</p>

      <div className="application-container">
        {submitted ? (
          <div className="success-message">
            <h2>✅ Candidatura Enviada com Sucesso!</h2>
            <p>Obrigado por se candidatar! Analisaremos sua candidatura e entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label htmlFor="name">Nome Real *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inGameName">Nome no Jogo *</label>
              <input
                type="text"
                id="inGameName"
                name="inGameName"
                value={formData.inGameName}
                onChange={handleChange}
                required
                placeholder="Seu nome de usuário em Supremacy 1942"
              />
            </div>

            <div className="form-group">
              <label htmlFor="power">Poder Atual *</label>
              <input
                type="number"
                id="power"
                name="power"
                value={formData.power}
                onChange={handleChange}
                required
                placeholder="Ex: 10000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experiência no Jogo (anos) *</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="0-1">Menos de 1 ano</option>
                <option value="1-2">1 a 2 anos</option>
                <option value="2-3">2 a 3 anos</option>
                <option value="3+">Mais de 3 anos</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="motivation">Por que deseja se juntar? *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Conte-nos por que você gostaria de se juntar ao GENERALS OF THE SHADOWS..."
              />
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreement">
                Concordo com as regras da aliança e me comprometo a ser um membro ativo e respeitoso *
              </label>
            </div>

            <button type="submit" className="submit-btn">Enviar Candidatura</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Application