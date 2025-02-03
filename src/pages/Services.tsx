import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'vasos-pressao',
      title: "Inspeção de segurança em Vasos de Pressão - NR-13",
      description: "Inspeção completa de vasos de pressão conforme NR-13, incluindo testes hidrostáticos e medição de espessura.",
      image: "https://images.unsplash.com/photo-1737874132953-b39a4812875d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'caldeiras',
      title: "Inspeção de segurança em Caldeiras - NR-13",
      description: "Análise e verificação de proteções fixas e móveis em máquinas conforme NR-12.",
      image: "https://images.unsplash.com/photo-1737873153736-e9b20cdc04e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'tanques',
      title: "Inspeção de segurança em Tanques - NR-13",
      description: "Elaboração de laudos técnicos detalhados para NR-13 e NR-12 com ART.",
      image: "https://images.unsplash.com/photo-1737870563574-f0a8b33b4395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'tubulacoes',
      title: "Inspeção de segurança em Tubulações - NR-13",
      description: "Identificação e avaliação de riscos em equipamentos e processos industriais.",
      image: "https://images.unsplash.com/photo-1737873571057-c4f9094db6b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'adequacao',
      title: "Adequação Normativa",
      description: "Orientação para adequação de equipamentos às normas NR-13 e NR-12.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      id: 'treinamento',
      title: "Treinamento de operador de Caldeira",
      description: "Treinamento completo para operadores de caldeira conforme NR-13.",
      image: "https://images.unsplash.com/photo-1737874960921-d1205a4f55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Oferecemos serviços de inspeções de segurança e treinamentos, garantindo a conformidade
          com as normas NR-13 e NR-12 e a segurança do seu ambiente industrial.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => navigate(`/servicos/${service.id}`)}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;