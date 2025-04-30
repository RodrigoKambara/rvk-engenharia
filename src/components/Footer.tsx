import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Informações da Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">RVK Engenharia</h3>
            <p className="text-gray-400 mb-4">
              Soluções completas em engenharia de segurança do trabalho, com foco em qualidade e excelência técnica.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white">Serviços</Link>
              </li>
              <li>
                <Link to="/clientes" className="text-gray-400 hover:text-white">Clientes</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white">Sobre</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/nr11" className="text-gray-400 hover:text-white">NR-11: Transporte e Movimentação</Link>
              </li>
              <li>
                <Link to="/servicos/nr12" className="text-gray-400 hover:text-white">NR-12: Máquinas e Equipamentos</Link>
              </li>
              <li>
                <Link to="/servicos/nr13" className="text-gray-400 hover:text-white">NR-13: Caldeiras e Vasos</Link>
              </li>
              <li>
                <Link to="/servicos/nr15" className="text-gray-400 hover:text-white">NR-15: Atividades Insalubres</Link>
              </li>
              <li>
                <Link to="/servicos/nr18" className="text-gray-400 hover:text-white">NR-18: Construção Civil</Link>
              </li>
              <li>
                <Link to="/servicos/nr35" className="text-gray-400 hover:text-white">NR-35: Trabalho em Altura</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:contato@rvkengenharia.com.br" className="text-gray-400 hover:text-white">contato@rvkengenharia.com.br</a>
              </li>
              <li className="flex items-center">
                <Clock className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RVK Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;