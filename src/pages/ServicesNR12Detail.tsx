import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, PenTool as Tool, FileCheck, Users } from 'lucide-react';

const serviceDetails = {
  'protecoes-maquinas': {
    title: "Proteções para Máquinas",
    description: "Análise e implementação de proteções fixas e móveis em máquinas conforme NR-12.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
    icon: Shield,
    fullDescription: `Nossa equipe especializada realiza a análise e implementação de proteções para máquinas seguindo rigorosamente a NR-12. Garantimos a segurança dos operadores e a conformidade com a norma através de um processo completo e detalhado.`,
    benefits: [
      "Avaliação completa das máquinas e equipamentos",
      "Projeto personalizado de proteções fixas e móveis",
      "Implementação de sistemas de segurança avançados",
      "Instalação de dispositivos de parada de emergência",
      "Adequação de comandos elétricos",
      "Sinalização de segurança completa",
      "Documentação técnica detalhada"
    ],
    additionalInfo: "Todas as proteções são projetadas considerando a operacionalidade da máquina e a segurança do operador, seguindo as diretrizes da NR-12 e normas técnicas aplicáveis."
  },
  'analise-risco': {
    title: "Análise de Risco",
    description: "Identificação e avaliação de riscos em máquinas e equipamentos industriais.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    icon: Tool,
    fullDescription: `Realizamos uma análise de risco abrangente e metodológica, identificando e avaliando todos os riscos potenciais em seu ambiente industrial. Nossa abordagem segue metodologias reconhecidas internacionalmente.`,
    benefits: [
      "Identificação sistemática de riscos potenciais",
      "Avaliação detalhada de severidade e probabilidade",
      "Categorização e priorização de riscos",
      "Propostas específicas de medidas de controle",
      "Plano de ação estruturado",
      "Documentação completa e detalhada",
      "Recomendações técnicas especializadas"
    ],
    additionalInfo: "Nossa análise de risco é fundamental para a prevenção de acidentes e o desenvolvimento de um ambiente de trabalho seguro e produtivo."
  },
  'laudo-tecnico': {
    title: "Laudo Técnico",
    description: "Elaboração de laudos técnicos detalhados para NR-12 com ART.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    icon: FileCheck,
    fullDescription: `Elaboramos laudos técnicos com alto nível de detalhamento e precisão, fornecendo uma documentação completa e profissional que atende a todas as exigências legais e normativas.`,
    benefits: [
      "Inspeção minuciosa do equipamento",
      "Registro fotográfico profissional",
      "Análise completa de conformidade com a NR-12",
      "Identificação detalhada de não conformidades",
      "Recomendações técnicas específicas",
      "ART (Anotação de Responsabilidade Técnica)",
      "Assinatura de engenheiro especializado"
    ],
    additionalInfo: "Nossos laudos técnicos são reconhecidos por sua qualidade e completude, sendo aceitos por órgãos fiscalizadores e seguradoras."
  },
  'treinamento-nr12': {
    title: "Treinamento NR-12",
    description: "Treinamento de operadores e responsáveis conforme NR-12.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    icon: Users,
    fullDescription: `Oferecemos treinamentos completos e personalizados, desenvolvidos para capacitar sua equipe com conhecimento prático e teórico sobre a NR-12, garantindo a operação segura de máquinas e equipamentos.`,
    benefits: [
      "Aspectos legais e normativos da NR-12",
      "Identificação e avaliação de riscos",
      "Medidas de proteção coletiva e individual",
      "Procedimentos de trabalho seguros",
      "Sistemas de segurança e proteções",
      "Protocolos de emergência",
      "Avaliação teórica e prática"
    ],
    additionalInfo: "Todos os participantes recebem certificação válida conforme as exigências da norma, com material didático completo e suporte pós-treinamento."
  }
};

const ServicesNR12Detail = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails];
  const Icon = service?.icon;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Serviço não encontrado</h1>
          <Link to="/servicos-nr12" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 justify-center">
            <ArrowLeft size={20} />
            Voltar para Serviços NR-12
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link to="/servicos-nr12" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-8">
          <ArrowLeft size={20} />
          Voltar para Serviços NR-12
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                {Icon && <Icon size={32} className="text-blue-400" />}
                <h1 className="text-4xl font-bold">{service.title}</h1>
              </div>
              <p className="text-lg text-gray-100">{service.description}</p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  {service.fullDescription}
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">O que incluímos</h2>
                  <ul className="grid gap-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Informações Adicionais</h2>
                  <p className="text-gray-700">{service.additionalInfo}</p>
                </div>

                <div className="flex justify-center">
                  <Link
                    to="/contato"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
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

export default ServicesNR12Detail;