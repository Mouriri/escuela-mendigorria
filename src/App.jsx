import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Colegio from './pages/Colegio';
import Familia from './pages/Familia';
import Contacto from './pages/Contacto';
import ZonaPrivada from './pages/ZonaPrivada';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/colegio" element={<Colegio />} />
              <Route path="/familia" element={<Familia />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/zona-privada" element={<ZonaPrivada />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
