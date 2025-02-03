import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Gauge, Flame, Tangent as Tank, Baseline as Pipeline, Shield, GraduationCap } from 'lucide-react';

const serviceDetails = {
  'vasos-pressao': {
    title: "Inspeção de Vasos de Pressão - NR-13",
    description: "Inspeção completa de vasos de pressão conforme NR-13, incluindo testes hidrostáticos e medição de espessura.",
    image: "https://images.unsplash.com/photo-1737874132953-b39a4812875d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Gauge,
    fullDescription: `Nossa equipe especializada realiza inspeções completas em vasos de pressão, seguindo rigorosamente os requisitos da NR-13. Garantimos a segurança e conformidade do seu equipamento através de um processo meticuloso e detalhado.`,
    benefits: [
      "Inspeção visual interna e externa detalhada",
      "Medição de espessura por ultrassom",
      "Teste hidrostático quando necessário",
      "Verificação completa de válvulas de segurança",
      "Análise minuciosa da documentação técnica",
      "Relatório técnico detalhado",
      "Recomendações específicas de manutenção"
    ],
    additionalInfo: "Utilizamos equipamentos de última geração e seguimos procedimentos rigorosos para garantir a precisão e confiabilidade de nossas inspeções."
  },
  'caldeiras': {
    title: "Inspeção de Caldeiras - NR-13",
    description: "Inspeção completa de caldeiras seguindo todos os requisitos da NR-13.",
    image: "https://images.unsplash.com/photo-1737873153736-e9b20cdc04e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Flame,
    fullDescription: `Realizamos inspeções abrangentes em caldeiras, garantindo a segurança e eficiência do seu equipamento. Nossa equipe especializada utiliza métodos avançados de inspeção e análise.`,
    benefits: [
      "Inspeção visual interna e externa detalhada",
      "Verificação completa dos sistemas de controle",
      "Análise do tratamento de água",
      "Teste hidrostático conforme norma",
      "Calibração e verificação de instrumentos",
      "Análise da documentação técnica",
      "Relatório técnico abrangente"
    ],
    additionalInfo: "Atendemos todos os tipos de caldeiras: flamotubulares, aquatubulares e elétricas, com profissionais certificados e experientes."
  },
  'tanques': {
    title: "Inspeção de Tanques - NR-13",
    description: "Inspeção especializada de tanques industriais conforme NR-13.",
    image: "https://images.unsplash.com/photo-1737870563574-f0a8b33b4395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Tank,
    fullDescription: `Oferecemos serviços especializados de inspeção em tanques industriais, seguindo os mais rigorosos padrões de segurança e qualidade. Nossa abordagem garante uma avaliação completa e precisa.`,
    benefits: [
      "Inspeção visual interna e externa detalhada",
      "Medição precisa de espessura",
      "Análise avançada de corrosão",
      "Verificação de conexões e válvulas",
      "Teste de estanqueidade",
      "Avaliação estrutural completa",
      "Relatório técnico com recomendações"
    ],
    additionalInfo: "Nossa experiência abrange tanques de diversos tipos e capacidades, garantindo a segurança e conformidade de suas instalações."
  },
  'tubulacoes': {
    title: "Inspeção de Tubulações - NR-13",
    description: "Inspeção completa de sistemas de tubulação industrial.",
    image: "https://images.unsplash.com/photo-1737873571057-c4f9094db6b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Pipeline,
    fullDescription: `Nossa inspeção de tubulações industriais é abrangente e detalhada, utilizando tecnologia avançada para garantir a integridade e segurança de todo o sistema.`,
    benefits: [
      "Inspeção visual completa do sistema",
      "Medição de espessura por ultrassom",
      "Análise da suportação",
      "Verificação de válvulas e conexões",
      "Mapeamento de pontos críticos",
      "Avaliação do isolamento térmico",
      "Relatório detalhado com mapeamento"
    ],
    additionalInfo: "Atendemos tubulações de vapor, água quente, produtos químicos e gases, garantindo a segurança e eficiência de suas instalações."
  },
  'adequacao': {
    title: "Adequação Normativa",
    description: "Serviço completo de adequação às normas NR-13 e NR-12.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    icon: Shield,
    fullDescription: `Oferecemos um serviço completo de adequação normativa, garantindo que seus equipamentos e instalações atendam plenamente às exigências das normas regulamentadoras.`,
    benefits: [
      "Diagnóstico inicial detalhado",
      "Identificação de não conformidades",
      "Plano de ação personalizado",
      "Acompanhamento das adequações",
      "Treinamento da equipe",
      "Documentação técnica completa",
      "Certificação final"
    ],
    additionalInfo: "Nossa equipe trabalha em parceria com sua empresa para garantir uma transição suave e eficiente para a total conformidade normativa."
  },
  'treinamento': {
    title: "Treinamento de Operadores",
    description: "Treinamento especializado para operadores de caldeiras e vasos de pressão.",
    image: "https://images.unsplash.com/photo-1737874960921-d1205a4f55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: GraduationCap,
    fullDescription: `Nosso programa de treinamento é desenvolvido por especialistas e oferece uma formação completa e prática para operadores de caldeiras e vasos de pressão.`,
    benefits: [
      "Fundamentos técnicos aprofundados",
      "Normas e legislação aplicável",
      "Procedimentos de segurança",
      "Operação e controle de equipamentos",
      "Tratamento de água industrial",
      "Manutenção preventiva",
      "Gestão de emergências"
    ],
    additionalInfo: "Todos os participantes recebem certificação reconhecida e material didático completo, com suporte contínuo após o treinamento."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails];
  const Icon = service?.icon;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Serviço não encontrado</h1>
          <Link to="/servicos" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 justify-center">
            <ArrowLeft size={20} />
            Voltar para Serviços
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <Link to="/servicos" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-8">
          <ArrowLeft size={20} />
          Voltar para Serviços
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                {Icon && <Icon size={24} className="text-blue-400" />}
                <h1 className="text-2xl md:text-4xl font-bold">{service.title}</h1>
              </div>
              <p className="text-base md:text-lg text-gray-100">{service.description}</p>
            </div>
          </div>
          
          <div className="p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose max-w-none">
                <p className="text-base md:text-lg text-gray-700 mb-8">
                  {service.fullDescription}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">O que incluímos</h2>
                  <ul className="grid gap-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Informações Adicionais</h2>
                  <p className="text-gray-700">{service.additionalInfo}</p>
                </div>

                <div className="flex justify-center">
                  <Link
                    to="/contato"
                    className="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-blue-700 transition-colors text-base md:text-lg font-semibold"
                  >
                    Solicitar este serviço
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;