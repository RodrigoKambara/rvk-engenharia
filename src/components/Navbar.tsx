import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ClipboardCheck, Building2, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RVK Engenharia</Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-200">
            <Home size={20} />
            <span>Início</span>
          </Link>
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-2 hover:text-blue-200">
              <ClipboardCheck size={20} />
              <span>Serviços</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[200px] z-10"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/servicos-nr12"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  NR-12 - Segurança em Máquinas
                </Link>
                <Link
                  to="/servicos"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  NR-13 - Vasos e Caldeiras
                </Link>
              </div>
            )}
          </div>
          <Link to="/clientes" className="flex items-center gap-2 hover:text-blue-200">
            <Building2 size={20} />
            <span>Clientes</span>
          </Link>
          <Link to="/contato" className="flex items-center gap-2 hover:text-blue-200">
            <Phone size={20} />
            <span>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;