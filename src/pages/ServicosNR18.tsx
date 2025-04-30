import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HardHat, Building, FileText } from 'lucide-react';

const ServicosNR18 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-18: Condições e Meio Ambiente de Trabalho na Indústria da Construção</h1>
          <p className="text-lg text-gray-600 mb-6">
            Implementação de medidas de controle e sistemas preventivos de segurança nos processos e ambientes da construção civil, garantindo conformidade legal.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Construção civil" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-18?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 18 (NR-18) estabelece diretrizes de ordem administrativa, de planejamento e de organização, que objetivam a implementação de medidas de controle e sistemas preventivos de segurança nos processos, nas condições e no meio ambiente de trabalho na Indústria da Construção.
            </p>
            <p className="mb-4">
              Esta norma abrange todas as atividades da indústria da construção, incluindo demolição, reparo, pintura, limpeza e manutenção de edifícios em geral, de qualquer número de pavimentos ou tipo de construção.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-18</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">PCMAT</h3>
                  <p className="text-gray-600 text-sm">Elaboração do Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Análise de Riscos</h3>
                  <p className="text-gray-600 text-sm">Identificação e avaliação de riscos em canteiros de obras e atividades da construção civil.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Treinamentos</h3>
                  <p className="text-gray-600 text-sm">Capacitação de trabalhadores conforme exigências da NR-18 e outras normas aplicáveis à construção.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Inspeções de Segurança</h3>
                  <p className="text-gray-600 text-sm">Vistorias periódicas em canteiros de obras para verificação da conformidade com a NR-18.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Projetos de Proteções Coletivas</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de projetos para sistemas de proteção coletiva em obras (guarda-corpos, redes, etc.).</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Assessoria Técnica</h3>
                  <p className="text-gray-600 text-sm">Suporte técnico contínuo para manutenção da conformidade com a norma durante toda a obra.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <HardHat className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Proteção</h3>
              <p className="text-gray-600">
                Implementação de medidas de proteção coletiva e individual para trabalhadores da construção civil.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Building className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Canteiro de Obras</h3>
              <p className="text-gray-600">
                Organização e adequação de canteiros de obras conforme requisitos da NR-18.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Documentação</h3>
              <p className="text-gray-600">
                Elaboração de toda documentação técnica exigida pela NR-18 para canteiros de obras.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-18</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução significativa de acidentes de trabalho em canteiros de obras</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações, embargos e interdições</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Melhoria da produtividade com ambientes de trabalho mais organizados e seguros</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de custos com afastamentos, indenizações e processos trabalhistas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Valorização da imagem da empresa perante clientes e mercado</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de adequação à NR-18?</h2>
                <p className="mb-6 md:mb-0">
                  Entre em contato conosco para uma avaliação personalizada das necessidades da sua obra.
                </p>
              </div>
              <div className="md:ml-6">
                <Link
                  to="/contato"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
                >
                  Solicitar Orçamento <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosNR18;