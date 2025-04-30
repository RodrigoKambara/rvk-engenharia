import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Thermometer, Droplets, FileText } from 'lucide-react';

const ServicosNR15 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">NR-15: Atividades e Operações Insalubres</h1>
          <p className="text-lg text-gray-600 mb-6">
            Avaliação de ambientes de trabalho, medições de agentes físicos, químicos e biológicos, e elaboração de laudos de insalubridade conforme exigências legais.
          </p>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        {/* Imagem principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" 
            alt="Avaliação de ambiente de trabalho" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é a NR-15?</h2>
            <p className="mb-4">
              A Norma Regulamentadora 15 (NR-15) estabelece os limites de tolerância para agentes insalubres presentes nos ambientes de trabalho, bem como os critérios técnicos e legais para caracterização da insalubridade.
            </p>
            <p className="mb-4">
              Esta norma abrange a avaliação de agentes físicos (ruído, calor, radiações, pressões hiperbáricas, etc.), químicos (poeiras, gases, vapores, etc.) e biológicos (micro-organismos, vírus, bactérias, etc.) que podem causar danos à saúde dos trabalhadores expostos.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nossos Serviços em NR-15</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Avaliação Quantitativa</h3>
                  <p className="text-gray-600 text-sm">Medições precisas de agentes físicos e químicos com equipamentos calibrados e certificados.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Avaliação Qualitativa</h3>
                  <p className="text-gray-600 text-sm">Análise de agentes biológicos e outros fatores de risco conforme anexos da NR-15.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Laudo de Insalubridade</h3>
                  <p className="text-gray-600 text-sm">Elaboração de laudos técnicos para caracterização ou descaracterização de insalubridade.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">PPRA/PGR</h3>
                  <p className="text-gray-600 text-sm">Desenvolvimento de Programas de Prevenção de Riscos Ambientais e Gerenciamento de Riscos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Medidas de Controle</h3>
                  <p className="text-gray-600 text-sm">Recomendação e implementação de medidas para eliminação ou neutralização da insalubridade.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Perícias Técnicas</h3>
                  <p className="text-gray-600 text-sm">Realização de perícias técnicas para processos administrativos ou judiciais.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Thermometer className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Agentes Físicos</h3>
              <p className="text-gray-600">
                Avaliação de ruído, calor, frio, vibrações, pressões anormais, radiações e outros agentes físicos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Droplets className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Agentes Químicos</h3>
              <p className="text-gray-600">
                Medição de poeiras, névoas, gases, vapores e outros compostos químicos no ambiente de trabalho.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Documentação</h3>
              <p className="text-gray-600">
                Elaboração de toda documentação técnica e legal relacionada à insalubridade.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefícios da Adequação à NR-15</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Prevenção de doenças ocupacionais relacionadas à exposição a agentes insalubres</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Conformidade legal e prevenção de autuações e processos trabalhistas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Redução de custos com pagamento de adicionais de insalubridade desnecessários</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Melhoria das condições ambientais de trabalho</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>Documentação técnica robusta para defesa em processos administrativos e judiciais</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">Precisa de avaliação de insalubridade?</h2>
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

export default ServicosNR15;