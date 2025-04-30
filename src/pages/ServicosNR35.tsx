import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ServicosNR35 = () => {
  return (
    <>
      <Helmet>
        <title>Inspeções e Treinamentos NR-35 | Trabalho em Altura | RVK Engenharia</title>
        <meta name="description" content="Treinamentos, procedimentos e análise de riscos para trabalhos em altura conforme NR-35. Certificação e documentação completa em Presidente Prudente e região." />
        <meta name="keywords" content="NR-35, trabalho em altura, treinamento NR-35, análise de risco, equipamentos para altura, certificação NR-35, Presidente Prudente" />
        <link rel="canonical" href="https://rvk.eng.br/servicos/nr-35/" />
        <meta property="og:title" content="Inspeções e Treinamentos NR-35 | Trabalho em Altura | RVK Engenharia" />
        <meta property="og:description" content="Treinamentos, procedimentos e análise de riscos para trabalhos em altura conforme NR-35. Certificação e documentação completa." />
        <meta property="og:url" content="https://rvk.eng.br/servicos/nr-35/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rvk.eng.br/og-image.jpg" />
      </Helmet>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-35: Trabalho em Altura</h1>
          <p className="text-lg text-gray-600 mb-6">
            Treinamentos, procedimentos e análise de riscos para trabalhos em altura, assegurando a proteção dos trabalhadores e o cumprimento das normas de segurança.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Trabalho em altura" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-35?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 35 (NR-35) estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente com esta atividade.
            </p>
            <p className="mb-4">
              Considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda. Esta norma se aplica a todas as atividades econômicas onde existam trabalhos em altura.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-35</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Treinamento NR-35</h3>
                  <p className="text-gray-600 text-sm">Capacitação teórica e prática para trabalho em altura conforme exigências da norma.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Análise de Risco</h3>
                  <p className="text-gray-600 text-sm">Elaboração de análise de risco específica para atividades em altura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Permissão de Trabalho</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de sistema de permissão de trabalho para atividades em altura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Procedimentos Operacionais</h3>
                  <p className="text-gray-600 text-sm">Elaboração de procedimentos de trabalho seguros para atividades em altura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Inspeção de EPI</h3>
                  <p className="text-gray-600 text-sm">Inspeção e certificação de equipamentos de proteção individual para trabalho em altura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Plano de Emergência</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de planos de emergência e resgate para trabalhos em altura.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Capacitação</h3>
              <p className="text-gray-600">
                Treinamentos teóricos e práticos para trabalho em altura conforme exigências da NR-35.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Documentação</h3>
              <p className="text-gray-600">
                Elaboração de toda documentação técnica exigida pela NR-35 para trabalho em altura.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Proteção</h3>
              <p className="text-gray-600">
                Avaliação e recomendação de sistemas de proteção contra quedas adequados para cada atividade.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-35</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Prevenção de acidentes graves relacionados a quedas de altura</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações e interdições</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Capacitação adequada dos trabalhadores para identificação de riscos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de custos com afastamentos, indenizações e processos trabalhistas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Melhoria da produtividade com procedimentos padronizados e seguros</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de adequação à NR-35?</h2>
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
    </>
  );
};

export default ServicosNR35;