import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ServicosNR11 from './pages/ServicosNR11';
import ServicosNR12 from './pages/ServicosNR12';
import ServicosNR13 from './pages/ServicosNR13';
import ServicosNR15 from './pages/ServicosNR15';
import ServicosNR18 from './pages/ServicosNR18';
import ServicosNR35 from './pages/ServicosNR35';
import Sobre from './pages/Sobre';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos/nr11" element={<ServicosNR11 />} />
            <Route path="/servicos/nr12" element={<ServicosNR12 />} />
            <Route path="/servicos/nr13" element={<ServicosNR13 />} />
            <Route path="/servicos/nr15" element={<ServicosNR15 />} />
            <Route path="/servicos/nr18" element={<ServicosNR18 />} />
            <Route path="/servicos/nr35" element={<ServicosNR35 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;