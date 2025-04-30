import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">RVK</span>
              <span className="text-black font-normal text-xl ml-1">Engenharia</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-royal-blue hover:text-blue-800">
              Home
            </Link>
            <div className="relative group">
              <button 
                className="text-royal-blue hover:text-blue-800 flex items-center"
              >
                Serviços
                <svg 
                  className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div 
                className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <div className="py-1">
                  <Link 
                    to="/servicos/nr11" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-11: Transporte e Movimentação
                  </Link>
                  <Link 
                    to="/servicos/nr12" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-12: Máquinas e Equipamentos
                  </Link>
                  <Link 
                    to="/servicos/nr13" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-13: Caldeiras e Vasos de Pressão
                  </Link>
                  <Link 
                    to="/servicos/nr15" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-15: Atividades Insalubres
                  </Link>
                  <Link 
                    to="/servicos/nr18" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-18: Construção Civil
                  </Link>
                  <Link 
                    to="/servicos/nr35" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    NR-35: Trabalho em Altura
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/clientes" className="text-royal-blue hover:text-blue-800">
              Clientes
            </Link>
            <Link to="/sobre" className="text-royal-blue hover:text-blue-800">
              Sobre
            </Link>
            <Link to="/contato" className="text-royal-blue hover:text-blue-800">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-royal-blue hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <div>
            <button
              onClick={toggleServices}
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-royal-blue hover:bg-gray-100"
            >
              Serviços
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`pl-4 ${isServicesOpen ? 'block' : 'hidden'}`}>
              <Link
                to="/servicos/nr11"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-11: Transporte e Movimentação
              </Link>
              <Link
                to="/servicos/nr12"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-12: Máquinas e Equipamentos
              </Link>
              <Link
                to="/servicos/nr13"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-13: Caldeiras e Vasos de Pressão
              </Link>
              <Link
                to="/servicos/nr15"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-15: Atividades Insalubres
              </Link>
              <Link
                to="/servicos/nr18"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-18: Construção Civil
              </Link>
              <Link
                to="/servicos/nr35"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                NR-35: Trabalho em Altura
              </Link>
            </div>
          </div>
          <Link
            to="/clientes"
            className="block px-3 py-2 rounded-md text-base font-medium text-royal-blue hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Clientes
          </Link>
          <Link
            to="/sobre"
            className="block px-3 py-2 rounded-md text-base font-medium text-royal-blue hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="block px-3 py-2 rounded-md text-base font-medium text-royal-blue hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;