require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Porta
const PORT = process.env.PORT || 5000;

// Rotas básicas
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server running!', message: 'GENERALS OF THE SHADOWS API' });
});

// Placeholder para rotas de membros
app.get('/api/members', (req, res) => {
  res.json({ message: 'Rota de membros em construção' });
});

// Placeholder para rotas de eventos
app.get('/api/events', (req, res) => {
  res.json({ message: 'Rota de eventos em construção' });
});

// Placeholder para rotas de notícias
app.get('/api/news', (req, res) => {
  res.json({ message: 'Rota de notícias em construção' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
  console.log('⚔️ GENERALS OF THE SHADOWS - API');
});
