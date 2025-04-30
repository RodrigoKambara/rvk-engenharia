import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre a RVK Engenharia</h1>
          <p className="text-lg text-gray-600 mb-6">
            Conheça nossa história, valores e compromisso com a segurança e qualidade em serviços de engenharia.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipe RVK Engenharia" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <p className="mb-4">
              A RVK Engenharia foi fundada em 2010 por um grupo de engenheiros com vasta experiência no setor industrial e de construção civil, que identificaram a necessidade de serviços especializados em segurança do trabalho e adequação às normas regulamentadoras.
            </p>
            <p className="mb-4">
              Ao longo dos anos, construímos uma sólida reputação no mercado, baseada na excelência técnica, comprometimento com prazos e resultados, e na capacidade de oferecer soluções personalizadas para cada cliente.
            </p>
            <p className="mb-4">
              Hoje, contamos com uma equipe multidisciplinar de engenheiros, técnicos e especialistas, prontos para atender às mais diversas demandas em segurança do trabalho, saúde ocupacional e meio ambiente.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Missão, Visão e Valores</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-gray-700">
                Proporcionar soluções em engenharia de segurança do trabalho que garantam ambientes seguros e saudáveis, contribuindo para a prevenção de acidentes e doenças ocupacionais, e para o desenvolvimento sustentável das organizações.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como referência nacional em serviços de engenharia de segurança do trabalho, destacando-se pela excelência técnica, inovação e compromisso com a satisfação dos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Ética e transparência em todas as relações</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Excelência técnica e melhoria contínua</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Compromisso com resultados e prazos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Valorização das pessoas e do trabalho em equipe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Responsabilidade social e ambiental</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Award className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p className="text-gray-600">
                Comprometimento com a excelência técnica e a melhoria contínua em todos os nossos serviços.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Equipe</h3>
              <p className="text-gray-600">
                Profissionais altamente qualificados e em constante atualização para oferecer as melhores soluções.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Clock className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-gray-600">
                Mais de uma década de atuação no mercado, com centenas de projetos bem-sucedidos.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Direção Técnica</h3>
                <p className="text-gray-700 mb-4">
                  Nossa direção técnica é composta por engenheiros com mais de 20 anos de experiência no setor, com especializações em segurança do trabalho, ergonomia e gestão ambiental.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Equipe Multidisciplinar</h3>
                <p className="text-gray-700 mb-4">
                  Contamos com engenheiros civis, mecânicos, eletricistas, técnicos em segurança do trabalho, ergonomistas e especialistas em higiene ocupacional, formando uma equipe completa para atender às diversas necessidades dos nossos clientes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Diferenciais</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Atendimento personalizado e focado nas necessidades específicas de cada cliente</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Equipe técnica altamente qualificada e em constante atualização</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Utilização de tecnologias avançadas para avaliações e medições</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Acompanhamento contínuo e suporte pós-serviço</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Compromisso com prazos e resultados</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Onde Estamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-4">
                  <MapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-600">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <Phone className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@rvkengenharia.com.br</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Área de Atuação</h3>
                <p className="text-gray-700 mb-4">
                  Atendemos todo o território nacional, com foco principal nas regiões Sudeste e Sul do Brasil. Também realizamos projetos internacionais sob demanda.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h2>
                <p className="mb-6 md:mb-0">
                  Entre em contato conosco para conhecer melhor nossos serviços e como podemos ajudar sua empresa.
                </p>
              </div>
              <div className="md:ml-6">
                <Link
                  to="/contato"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
                >
                  Fale Conosco <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;