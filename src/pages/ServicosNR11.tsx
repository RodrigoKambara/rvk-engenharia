import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Users, Calendar } from 'lucide-react';

const ServicosNR11 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-11: Transporte, Movimentação, Armazenagem e Manuseio de Materiais</h1>
          <p className="text-lg text-gray-600 mb-6">
            Soluções completas para adequação à Norma Regulamentadora 11, garantindo a segurança nas operações de movimentação de cargas.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipamentos de movimentação de cargas" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-11?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 11 (NR-11) estabelece os requisitos de segurança para operações de elevação, transporte, armazenagem e manuseio de materiais, tanto de forma mecanizada quanto manual, visando a prevenção de acidentes e doenças do trabalho.
            </p>
            <p className="mb-4">
              Esta norma abrange equipamentos como empilhadeiras, guindastes, elevadores, transportadores contínuos, pontes rolantes, talhas, entre outros dispositivos de movimentação de cargas, além de estabelecer diretrizes para armazenamento seguro de materiais.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-11</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Inspeção de Equipamentos</h3>
                  <p className="text-gray-600 text-sm">Avaliação técnica de empilhadeiras, guindastes, elevadores e outros equipamentos de movimentação de cargas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Análise de Riscos</h3>
                  <p className="text-gray-600 text-sm">Identificação e avaliação de riscos em operações de movimentação e armazenagem de materiais.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Elaboração de Procedimentos</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de procedimentos operacionais seguros para atividades de movimentação de cargas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Treinamentos</h3>
                  <p className="text-gray-600 text-sm">Capacitação de operadores de equipamentos de movimentação de cargas conforme exigências da NR-11.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-11</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Prevenção de acidentes relacionados à movimentação de cargas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de riscos ergonômicos nas atividades de manuseio de materiais</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Aumento da eficiência operacional com procedimentos padronizados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações por órgãos fiscalizadores</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Melhoria do ambiente de trabalho e da cultura de segurança</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de adequação à NR-11?</h2>
                <p className="mb-6 md:mb-0">
                  Entre em contato conosco para uma avaliação personalizada das necessidades da sua empresa.
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

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Informações Adicionais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <FileText className="text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Documentação</h3>
                <p className="text-gray-600 text-sm">
                  Elaboramos toda a documentação necessária para comprovar a conformidade com a NR-11.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <Users className="text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Equipe Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Contamos com profissionais certificados e experientes em segurança do trabalho.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <Calendar className="text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Acompanhamento</h3>
                <p className="text-gray-600 text-sm">
                  Oferecemos suporte contínuo e atualizações periódicas para manter sua empresa em conformidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosNR11;