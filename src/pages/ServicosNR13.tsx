import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Gauge, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ServicosNR13 = () => {
  return (
    <>
      <Helmet>
        <title>Inspeções e Treinamentos NR-13 | Caldeiras e Vasos de Pressão | RVK Engenharia</title>
        <meta name="description" content="Inspeção completa de vasos de pressão, caldeiras, tanques e tubulações conforme NR-13. Laudos técnicos com ART e treinamentos certificados em Presidente Prudente e região." />
        <meta name="keywords" content="NR-13, inspeção caldeiras, vasos de pressão, inspeção tubulações, laudo técnico NR-13, treinamento NR-13, Presidente Prudente" />
        <link rel="canonical" href="https://rvk.eng.br/servicos/nr-13/" />
        <meta property="og:title" content="Inspeções e Treinamentos NR-13 | Caldeiras e Vasos de Pressão | RVK Engenharia" />
        <meta property="og:description" content="Inspeção completa de vasos de pressão, caldeiras, tanques e tubulações conforme NR-13. Laudos técnicos com ART e treinamentos certificados." />
        <meta property="og:url" content="https://rvk.eng.br/servicos/nr-13/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rvk.eng.br/og-image.jpg" />
      </Helmet>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-13: Caldeiras, Vasos de Pressão e Tubulações</h1>
          <p className="text-lg text-gray-600 mb-6">
            Inspeções técnicas, laudos e relatórios para caldeiras e vasos de pressão, assegurando a integridade dos equipamentos e a segurança das instalações.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1737870563574-f0a8b33b4395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Caldeiras e vasos de pressão" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-13?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 13 (NR-13) estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão e suas tubulações de interligação nos aspectos relacionados à instalação, inspeção, operação e manutenção.
            </p>
            <p className="mb-4">
              Esta norma visa garantir a segurança e a saúde dos trabalhadores que operam ou realizam atividades de manutenção nestes equipamentos, prevenindo acidentes graves como explosões, que podem ter consequências catastróficas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-13</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Inspeção de Segurança</h3>
                  <p className="text-gray-600 text-sm">Inspeções periódicas em caldeiras, vasos de pressão e tubulações conforme prazos estabelecidos na NR-13.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Testes Hidrostáticos</h3>
                  <p className="text-gray-600 text-sm">Realização de testes de pressão para verificar a integridade estrutural dos equipamentos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Laudos Técnicos</h3>
                  <p className="text-gray-600 text-sm">Emissão de laudos e relatórios técnicos assinados por profissionais habilitados conforme exigido pela norma.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Prontuário de Vasos de Pressão</h3>
                  <p className="text-gray-600 text-sm">Elaboração e atualização de prontuários técnicos com toda documentação exigida pela NR-13.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Treinamentos</h3>
                  <p className="text-gray-600 text-sm">Capacitação de operadores de caldeiras e vasos de pressão conforme requisitos da norma.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Plano de Inspeção</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de planos de inspeção e manutenção para garantir a integridade dos equipamentos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <AlertTriangle className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Prevenção</h3>
              <p className="text-gray-600">
                Identificação precoce de problemas para prevenir falhas catastróficas em equipamentos pressurizados.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Gauge className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Monitoramento</h3>
              <p className="text-gray-600">
                Acompanhamento contínuo das condições operacionais de caldeiras e vasos de pressão.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Documentação</h3>
              <p className="text-gray-600">
                Elaboração e gestão de toda documentação técnica exigida pela NR-13.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-13</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Prevenção de acidentes graves como explosões e vazamentos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Aumento da vida útil dos equipamentos com manutenção adequada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações e interdições</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de custos operacionais com paradas não programadas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Maior segurança para trabalhadores e instalações</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de inspeção NR-13?</h2>
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

export default ServicosNR13;