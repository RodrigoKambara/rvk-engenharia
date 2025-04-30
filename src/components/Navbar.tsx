import React, { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Interfaces para props dos componentes
interface NavLinkProps {
  to: string;
  active: boolean;
  children: ReactNode;
}

interface ServiceItem {
  id: string;
  name: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const location = useLocation();

  // Detectar scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao navegar
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Verificar se o link está ativo
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Lista de serviços
  const services: ServiceItem[] = [
    { id: 'nr-11', name: 'NR-11 (Movimentação de Cargas)' },
    { id: 'nr-12', name: 'NR-12 (Máquinas e Equipamentos)' },
    { id: 'nr-13', name: 'NR-13 (Caldeiras e Vasos de Pressão)' },
    { id: 'nr-15', name: 'NR-15 (Insalubridade)' },
    { id: 'nr-18', name: 'NR-18 (Construção Civil)' },
    { id: 'nr-35', name: 'NR-35 (Trabalho em Altura)' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">RVK</span>
            <span className="text-2xl font-light text-gray-800 ml-1">Engenharia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" active={isActive('/')}>
              Início
            </NavLink>
            
            {/* Dropdown de Serviços */}
            <div className="relative group">
              <button 
                className={`px-4 py-2 rounded-md flex items-center transition-colors ${
                  isActive('/servicos') 
                    ? 'text-blue-700 font-medium' 
                    : 'text-gray-700 hover:text-blue-700'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Serviços
                <ChevronDown size={18} className="ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg overflow-hidden transition-all origin-top-left z-50 ${
                  servicesOpen || isActive('/servicos') ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="py-2">
                 
                  <div className="border-t border-gray-100 my-1"></div>
                  {services.map(service => (
                    <Link 
                      key={service.id}
                      to={`/servicos/${service.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <NavLink to="/sobre" active={isActive('/sobre')}>
              Sobre
            </NavLink>
            
            <NavLink to="/clientes" active={isActive('/clientes')}>
              Clientes
            </NavLink>
            
            <NavLink to="/contato" active={isActive('/contato')}>
              Contato
            </NavLink>
            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-1">
          <MobileNavLink to="/" active={isActive('/')}>
            Início
          </MobileNavLink>
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-100 pb-1">
            <button 
              className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                isActive('/servicos') ? 'text-blue-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Serviços
              {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              servicesOpen ? 'max-h-96' : 'max-h-0'
            }`}>
              {services.map(service => (
                <Link 
                  key={service.id}
                  to={`/servicos/${service.id}`}
                  className="block px-8 py-2 text-gray-600 hover:text-blue-700"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <MobileNavLink to="/sobre" active={isActive('/sobre')}>
            Sobre
          </MobileNavLink>
          
          <MobileNavLink to="/clientes" active={isActive('/clientes')}>
            Clientes
          </MobileNavLink>
          
          <MobileNavLink to="/contato" active={isActive('/contato')}>
            Contato
          </MobileNavLink>
          
          
        </div>
      </div>
    </nav>
  );
};

// Componente para links de navegação desktop
const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-md transition-colors ${
      active 
        ? 'text-blue-700 font-medium' 
        : 'text-gray-700 hover:text-blue-700'
    }`}
  >
    {children}
  </Link>
);

// Componente para links de navegação mobile
const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`block px-4 py-3 border-b border-gray-100 ${
      active 
        ? 'text-blue-700 font-medium' 
        : 'text-gray-700 hover:text-blue-700'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;