import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Wrench, FileText } from 'lucide-react';

const ServicosNR12 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-12: Segurança no Trabalho em Máquinas e Equipamentos</h1>
          <p className="text-lg text-gray-600 mb-6">
            Soluções completas para adequação de máquinas e equipamentos, garantindo a segurança dos operadores e o atendimento à legislação.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1738103236196-4448e5b66012?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Máquinas industriais" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-12?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 12 (NR-12) define referências técnicas, princípios fundamentais e medidas de proteção para garantir a saúde e a integridade física dos trabalhadores que operam máquinas e equipamentos.
            </p>
            <p className="mb-4">
              Esta norma estabelece requisitos mínimos para a prevenção de acidentes e doenças do trabalho nas fases de projeto, fabricação, importação, comercialização, exposição e cessão a qualquer título de máquinas e equipamentos utilizados no trabalho.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-12</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Análise de Riscos</h3>
                  <p className="text-gray-600 text-sm">Identificação e avaliação de riscos em máquinas e equipamentos, com elaboração de relatórios detalhados.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Adequação de Máquinas</h3>
                  <p className="text-gray-600 text-sm">Projeto e implementação de soluções para adequação de máquinas e equipamentos conforme a NR-12.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Elaboração de Documentação</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de manuais, procedimentos operacionais e documentação técnica exigida pela norma.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Treinamentos</h3>
                  <p className="text-gray-600 text-sm">Capacitação de operadores e equipes de manutenção para operação segura de máquinas e equipamentos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Laudos Técnicos</h3>
                  <p className="text-gray-600 text-sm">Emissão de laudos técnicos de conformidade com a NR-12, assinados por profissionais habilitados.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Assessoria Técnica</h3>
                  <p className="text-gray-600 text-sm">Suporte técnico contínuo para manutenção da conformidade com a norma e atualizações necessárias.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Proteção</h3>
              <p className="text-gray-600">
                Implementação de sistemas de proteção eficazes para garantir a segurança dos operadores.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Wrench className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Manutenção</h3>
              <p className="text-gray-600">
                Procedimentos seguros para manutenção preventiva e corretiva de máquinas e equipamentos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Documentação</h3>
              <p className="text-gray-600">
                Elaboração de toda documentação técnica exigida pela NR-12 para suas máquinas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-12</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução significativa de acidentes de trabalho relacionados a máquinas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações e multas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Aumento da produtividade com operações mais seguras e eficientes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Melhoria da imagem da empresa perante colaboradores e clientes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de custos com afastamentos, indenizações e processos trabalhistas</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de adequação à NR-12?</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ServicosNR12;