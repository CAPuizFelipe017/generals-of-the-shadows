import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>⚔️ GENERALS OF THE SHADOWS</h3>
          <p>Site oficial da Aliança - Supremacy 1942</p>
        </div>
        <div className="footer-links">
          <a href="#">Regras da Aliança</a>
          <a href="#">Contato</a>
          <a href="#">Suporte</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} GENERALS OF THE SHADOWS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer