import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import ServicesNR12 from './pages/ServicesNR12';
import ServicesNR12Detail from './pages/ServicesNR12Detail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/:id" element={<ServiceDetail />} />
          <Route path="/servicos-nr12" element={<ServicesNR12 />} />
          <Route path="/servicos-nr12/:id" element={<ServicesNR12Detail />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;