import React from 'react';

const Projects = () => {
  const inspections = [
    {
      title: "Inspeção Caldeira Industrial",
      description: "Inspeção periódica de caldeira flamotubular de alta pressão conforme NR-13",
      image: "https://images.unsplash.com/photo-1518623001395-125242310d0c?auto=format&fit=crop&q=80",
      category: "NR-13"
    },
    {
      title: "Adequação Linha de Produção",
      description: "Inspeção e adequação de proteções em linha de produção automatizada",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      category: "NR-12"
    },
    {
      title: "Inspeção Vasos de Pressão",
      description: "Avaliação de bateria de vasos de pressão em indústria química",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
      category: "NR-13"
    },
    {
      title: "Segurança em Prensas",
      description: "Inspeção de sistemas de segurança em prensas hidráulicas",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
      category: "NR-12"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Inspeções Realizadas</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Conheça alguns dos nossos trabalhos de inspeção e adequação normativa,
          demonstrando nossa experiência e competência técnica.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {inspections.map((inspection, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={inspection.image} 
                alt={inspection.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {inspection.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{inspection.title}</h3>
                <p className="text-gray-600">{inspection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;