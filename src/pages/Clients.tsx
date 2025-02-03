import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: "Stetsom",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738601967/Stetsom_btdt57.jpg"
    },
    {
      name: "Unimed",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738601824/unimed_ei8ylu.png"
    },
    {
      name: "Funada",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738602509/funada_gtpxgz.png"
    },
    {
      name: "Oeste Saúde",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738603175/oestesaude_vgktiz.jpg"
    },
    {
      name: "Palmali",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738606853/palmali_hhycnu.webp"
    },
    {
      name: "SOESP",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738606969/soesp_zhmweh.png"
    },
    {
      name: "Better Beef",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738607413/betterbeef_q0jevi.webp"
    },
    {
      name: "BAND",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738607727/band_exaqtp.jpg"
    },
    {
      name: "Bon-Mart",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738607847/bonmart_czknbx.png"
    },
    {
      name: "Andorinha",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738608159/andorinha_cp1ijz.png"
    },
    {
      name: "Lider",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738608179/lider_klscic.png"
    },
    {
      name: "Jandaia",
      logo: "https://res.cloudinary.com/doj643kma/image/upload/v1738608165/jandaia_jglv3s.png"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.opacity = '0.5';
    target.style.filter = 'grayscale(100%)';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Clientes</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Orgulhamo-nos de atender algumas das maiores empresas do Brasil, 
          fornecendo serviços de excelência em inspeções e segurança industrial.
        </p>

        {/* Testimonial Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic mb-4">
              "A RVK Engenharia tem sido uma parceira fundamental em nossas operações, 
              garantindo a segurança e conformidade de nossos equipamentos com as normas vigentes."
            </blockquote>
            <p className="font-semibold">Diretor Industrial</p>
            <p className="text-blue-200">Empresa Líder do Setor</p>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center transform transition-transform hover:scale-105"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="h-full w-auto object-contain transition-opacity duration-300"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center text-sm">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Por que as empresas confiam na RVK?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Inspeções Realizadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;