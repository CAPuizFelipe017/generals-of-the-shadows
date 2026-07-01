import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Members from './pages/Members'
import Ranking from './pages/Ranking'
import Events from './pages/Events'
import News from './pages/News'
import Application from './pages/Application'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/members" element={<Members />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/apply" element={<Application />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App