import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1737853006230-4c6b22418aea?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl px-4">
              <h1 className="text-5xl font-bold mb-4">RVK Engenharia</h1>
              <p className="text-xl mb-8">
                Especialistas em inspeções NR-13 e NR-12. Garantindo a segurança
                e conformidade do seu ambiente industrial.
              </p>
              <Link
                to="/contato"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2"
              >
                Solicitar Inspeção <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/servicos" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1737870563574-f0a8b33b4395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Inspeções NR-13"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Inspeções e treinamentos conforme NR-13
                </h3>
                <p className="text-gray-600 mb-4">
                  Inspeção completa de vasos de pressão, caldeiras, tanques e tubulações conforme a NR-13
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Saiba mais <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/servicos-nr12" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1738103236196-4448e5b66012?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Inspeções NR-12"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Inspeções e treinamentos conforme NR-12
                </h3>
                <p className="text-gray-600 mb-4">
                  Inspeção de segurança em máquinas e equipamentos seguindo os requisitos da NR-12
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                  Saiba mais <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;