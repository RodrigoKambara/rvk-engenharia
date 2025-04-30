import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a RVK Engenharia | Empresa de Engenharia Mecânica e Segurança do Trabalho</title>
        <meta name="description" content="Conheça a RVK Engenharia, empresa especializada em engenharia mecânica e segurança do trabalho em Presidente Prudente. Nossa história, missão, visão e valores." />
        <meta name="keywords" content="RVK Engenharia, empresa de engenharia Presidente Prudente, engenharia mecânica, segurança do trabalho, história da empresa, equipe técnica" />
        <link rel="canonical" href="https://rvk.eng.br/sobre/" />
        <meta property="og:title" content="Sobre a RVK Engenharia | Empresa de Engenharia Mecânica e Segurança do Trabalho" />
        <meta property="og:description" content="Conheça a RVK Engenharia, empresa especializada em engenharia mecânica e segurança do trabalho em Presidente Prudente. Nossa história, missão, visão e valores." />
        <meta property="og:url" content="https://rvk.eng.br/sobre/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rvk.eng.br/og-image.jpg" />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre a RVK Engenharia</h1>
              <p className="text-lg md:text-xl">
                Especialistas em engenharia mecânica e segurança do trabalho, 
                oferecendo inspeções técnicas e treinamentos de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* História da Empresa */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa História</h2>
          <p className="text-gray-700 mb-4">
            Fundada em 2010, a RVK Engenharia nasceu da visão de profissionais experientes em engenharia mecânica 
            que identificaram a necessidade de serviços especializados em inspeções técnicas e treinamentos para 
            adequação às normas regulamentadoras no setor industrial.
          </p>
          <p className="text-gray-700 mb-4">
            Ao longo dos anos, expandimos nossa atuação para abranger diversas normas regulamentadoras, 
            com foco especial em NR-11, NR-12, NR-13, NR-15, NR-18 e NR-35, desenvolvendo metodologias 
            próprias para inspeções técnicas e treinamentos que garantem a segurança e conformidade dos 
            equipamentos e processos industriais.
          </p>
          <p className="text-gray-700">
            Hoje, somos reconhecidos pela excelência técnica e comprometimento com a segurança, 
            atendendo empresas de diversos segmentos em Presidente Prudente e região, com uma 
            equipe de engenheiros mecânicos e de segurança do trabalho altamente qualificados.
          </p>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              Missão, Visão e Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Target className="text-blue-600 w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Missão</h3>
                <p className="text-gray-700 text-center">
                  Promover ambientes de trabalho seguros através de inspeções técnicas e treinamentos 
                  de excelência em engenharia mecânica e segurança do trabalho, garantindo a conformidade 
                  com as normas regulamentadoras e a integridade dos colaboradores.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Award className="text-blue-600 w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Visão</h3>
                <p className="text-gray-700 text-center">
                  Ser referência regional em serviços de engenharia mecânica e segurança do trabalho, 
                  reconhecida pela qualidade técnica das inspeções e treinamentos, contribuindo para 
                  a redução de acidentes e o aumento da produtividade nas empresas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Heart className="text-blue-600 w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Excelência técnica e rigor nas inspeções</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compromisso com a segurança e bem-estar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ética e transparência em todas as relações</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Atualização constante e inovação</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa Equipe */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa Equipe</h2>
          <p className="text-gray-700 mb-6">
            Contamos com uma equipe multidisciplinar de engenheiros mecânicos e engenheiros de segurança 
            do trabalho, todos com formação especializada e certificações nas áreas de atuação. Nossos 
            profissionais possuem ampla experiência em inspeções técnicas e ministração de treinamentos 
            para as diversas normas regulamentadoras.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3">Qualificações da nossa equipe:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Engenheiros mecânicos com registro no CREA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Engenheiros de segurança do trabalho especializados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Técnicos certificados para inspeções específicas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Instrutores qualificados para ministrar treinamentos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Profissionais com experiência prática em ambiente industrial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Áreas de Atuação */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Áreas de Atuação</h2>
            <p className="text-gray-700 mb-8">
              A RVK Engenharia é especializada em serviços de engenharia mecânica e segurança do trabalho, 
              com foco em inspeções técnicas e treinamentos para adequação às normas regulamentadoras:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Inspeções Técnicas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inspeção de máquinas e equipamentos (NR-12)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inspeção de caldeiras e vasos de pressão (NR-13)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inspeção de equipamentos de transporte (NR-11)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Avaliação de ambientes insalubres (NR-15)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inspeção de sistemas para trabalho em altura (NR-35)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Treinamentos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Operação segura de máquinas e equipamentos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Operação de caldeiras e vasos de pressão</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Operação de equipamentos de movimentação</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trabalho em altura e espaços confinados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prevenção e combate a incêndios</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700">
              Além das inspeções e treinamentos, oferecemos serviços complementares como elaboração 
              de laudos técnicos, análise de riscos, desenvolvimento de procedimentos operacionais 
              e consultoria para adequação às normas regulamentadoras.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de inspeções técnicas ou treinamentos?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma avaliação personalizada das necessidades 
            da sua empresa em engenharia mecânica e segurança do trabalho.
          </p>
          <Link
            to="/contato"
            className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold transition-colors"
          >
            Solicitar Proposta <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;