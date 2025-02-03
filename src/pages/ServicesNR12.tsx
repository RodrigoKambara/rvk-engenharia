import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesNr12 = () => {
  const navigate = useNavigate();

  const servicesNr12 = [
    {
      id: 'protecoes-maquinas',
      title: "Proteções para Máquinas",
      description: "Análise e implementação de proteções fixas e móveis em máquinas conforme NR-12.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
    },
    {
      id: 'analise-risco',
      title: "Análise de Risco",
      description: "Identificação e avaliação de riscos em máquinas e equipamentos industriais.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      id: 'laudo-tecnico',
      title: "Laudo Técnico",
      description: "Elaboração de laudos técnicos detalhados para NR-12 com ART.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
    },
    {
      id: 'treinamento-nr12',
      title: "Treinamento NR-12",
      description: "Treinamento de operadores e responsáveis conforme NR-12.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Serviços NR-12</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Oferecemos serviços especializados em segurança de máquinas e equipamentos,
          garantindo a conformidade com a norma NR-12 e a segurança dos trabalhadores.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesNr12.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => navigate(`/servicos-nr12/${service.id}`)}
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

export default ServicesNr12;