import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const carouselRef = useRef(null);
  const heroRef = useRef(null);

  // Efeito de zoom na imagem
  useEffect(() => {
    // Inicia com escala 1 e aumenta gradualmente para 1.1
    const startTime = Date.now();
    const duration = 10000; // 10 segundos
    const startScale = 1;
    const endScale = 1.1;
    
    const animateZoom = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentScale = startScale + (endScale - startScale) * progress;
      
      setScale(currentScale);
      
      if (progress < 1) {
        requestAnimationFrame(animateZoom);
      }
    };
    
    requestAnimationFrame(animateZoom);
  }, []);

  const services = [
    {
      id: 'nr11',
      title: 'Inspeções e treinamentos conforme NR-11',
      description: 'Avaliação e adequação de equipamentos de transporte e movimentação de cargas, como empilhadeiras, guindastes e elevadores.',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'nr12',
      title: 'Inspeções e treinamentos conforme NR-12',
      description: 'Inspeção de segurança em máquinas e equipamentos seguindo os requisitos da NR-12.',
      image: 'https://images.unsplash.com/photo-1738103236196-4448e5b66012?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'nr13',
      title: 'Inspeções e treinamentos conforme NR-13',
      description: 'Inspeção completa de vasos de pressão, caldeiras, tanques e tubulações conforme a NR-13.',
      image: 'https://images.unsplash.com/photo-1737870563574-f0a8b33b4395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'nr15',
      title: 'Inspeções e treinamentos conforme NR-15',
      description: 'Avaliação de ambientes de trabalho, medições de agentes físicos, químicos e biológicos, e elaboração de laudos de insalubridade.',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'nr18',
      title: 'Inspeções e treinamentos conforme NR-18',
      description: 'Implementação de medidas de controle e sistemas preventivos de segurança nos processos e ambientes da construção civil.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'nr35',
      title: 'Inspeções e treinamentos conforme NR-35',
      description: 'Treinamentos, procedimentos e análise de riscos para trabalhos em altura, assegurando a proteção dos trabalhadores.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  // Ordenar os serviços em ordem crescente (NR-11, NR-12, etc.)
  const sortedServices = [...services].sort((a, b) => {
    const numA = parseInt(a.id.replace('nr', ''));
    const numB = parseInt(b.id.replace('nr', ''));
    return numA - numB;
  });

  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(sortedServices.length / cardsPerSlide);

  // Função para avançar o slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Função para voltar o slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <Helmet>
        <title>RVK Engenharia | Inspeções e Treinamentos NR-11, NR-12, NR-13, NR-15, NR-18, NR-35</title>
        <meta name="description" content="Especialistas em engenharia mecânica e segurança do trabalho. Realizamos inspeções técnicas e treinamentos para NR-11, NR-12, NR-13, NR-15, NR-18 e NR-35 em Presidente Prudente e região. Solicite um orçamento!" />
        <meta name="keywords" content="inspeção NR-13 Presidente Prudente, laudos técnicos, vasos de pressão, treinamentos NR-13, NR-12, NR-35, RVK Engenharia, engenharia mecânica, segurança do trabalho" />
        <link rel="canonical" href="https://rvk.eng.br/" />
        <meta property="og:title" content="RVK Engenharia | Inspeções e Treinamentos NR-11, NR-12, NR-13, NR-15, NR-18, NR-35" />
        <meta property="og:description" content="Especialistas em engenharia mecânica e segurança do trabalho. Inspeções técnicas e treinamentos para adequação às normas regulamentadoras em Presidente Prudente e região." />
        <meta property="og:url" content="https://rvk.eng.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rvk.eng.br/og-image.jpg" />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section com efeito de zoom */}
      <div
        ref={heroRef}
        className="h-[400px] md:h-[700px] relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1737853006230-4c6b22418aea?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            transform: `scale(${scale})`, // Apenas efeito de zoom, sem parallax
            transformOrigin: 'center center'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
  <span className="text-blue-600">RVK</span>
  <span className="text-white ml-2">Engenharia</span>
</h1>
              <p className="text-lg md:text-xl mb-8">
              Especialistas em engenharia mecânica e segurança do trabalho. Oferecemos inspeções técnicas e treinamentos para adequação às normas regulamentadoras em Presidente Prudente e região.
              </p>
              <Link
                to="/contato"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 text-sm md:text-base"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Carousel - Modificado para exibir 2 cards por vez */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Nossos Serviços
        </h2>
        
        <div className="relative" ref={carouselRef}>
          {/* Controles do carrossel */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 md:p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} className="text-blue-700" />
          </button>
          
          {/* Container do carrossel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4 flex gap-4">
                  {sortedServices.slice(slideIndex * cardsPerSlide, (slideIndex * cardsPerSlide) + cardsPerSlide).map((service) => (
                    <div key={service.id} className="w-1/2">
                      <Link to={`/servicos/${service.id}`} className="group block">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform group-hover:scale-105 h-full">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 md:h-64 object-cover"
                          />
                          <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                              {service.description}
                            </p>
                            <span className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2 text-sm md:text-base">
                              Saiba mais <ArrowRight size={16} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 md:p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} className="text-blue-700" />
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-700' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Sobre a Empresa - Nova seção */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Sobre a RVK Engenharia</h2>
            <p className="text-gray-700 mb-6">
              A RVK Engenharia é uma empresa especializada em engenharia mecânica e segurança do trabalho, com foco em inspeções técnicas e treinamentos para adequação às normas regulamentadoras. Com uma equipe de profissionais altamente qualificados, oferecemos soluções personalizadas para empresas de diversos segmentos, garantindo a segurança dos trabalhadores e o cumprimento da legislação.
            </p>
            <p className="text-gray-700 mb-8">
              Nossa missão é promover ambientes de trabalho mais seguros e saudáveis, contribuindo para a redução de acidentes e doenças ocupacionais, através de serviços de excelência técnica e comprometimento com a qualidade.
            </p>
            <div className="text-center">
              <Link
                to="/sobre"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
              >
                Conheça a nossa história <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;