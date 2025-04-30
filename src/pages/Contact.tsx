import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import InputMask from 'react-input-mask';
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from 'react-helmet';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inspectionType: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inspectionType: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação adicional
    if (!formData.name || !formData.email || !formData.phone || !formData.inspectionType || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um email válido.');
      return;
    }
    
    // Validação de telefone (deve ter pelo menos 14 caracteres com a máscara)
    if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      toast.error('Por favor, insira um número de telefone válido.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_0l0ac5f', // Substitua pelo seu Service ID do EmailJS
        'template_sgbzw7m', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone, // Adicionando o telefone ao envio
          inspection_type: formData.inspectionType,
          message: formData.message,
          to_email: 'comercial@rvk.eng.com' // Email de destino
        },
        '6g0ShMl2lil50fEW0' // Substitua pela sua Public Key do EmailJS
      );

      if (result.status === 200) {
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          inspectionType: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Entre em Contato | Solicite um Orçamento | RVK Engenharia</title>
        <meta name="description" content="Entre em contato com a RVK Engenharia para solicitar orçamentos de inspeções e treinamentos. Atendemos Presidente Prudente e região com serviços de engenharia mecânica e segurança do trabalho." />
        <meta name="keywords" content="contato RVK Engenharia, orçamento inspeção NR-13, orçamento NR-12, contato engenharia Presidente Prudente, solicitar inspeção" />
        <link rel="canonical" href="https://rvk.eng.br/contato/" />
        <meta property="og:title" content="Entre em Contato | Solicite um Orçamento | RVK Engenharia" />
        <meta property="og:description" content="Entre em contato com a RVK Engenharia para solicitar orçamentos de inspeções e treinamentos. Atendemos Presidente Prudente e região." />
        <meta property="og:url" content="https://rvk.eng.br/contato/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rvk.eng.br/og-image.jpg" />
      </Helmet>
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em Contato</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
          Solicite uma proposta para qualquer um de nossos serviços. Nossa equipe técnica
          está pronta para atender suas necessidades em segurança do trabalho.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Solicitar Proposta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Seu nome completo"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                  required
                  aria-required="true"
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  title="Por favor, insira um email válido"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <InputMask
                  mask="(99) 99999-9999"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange as any}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="(00) 00000-0000"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Tipo de Serviço <span className="text-red-500">*</span>
                </label>
                <select
                  name="inspectionType"
                  value={formData.inspectionType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                  aria-required="true"
                >
                  <option value="">Selecione o tipo de serviço</option>
                  <option value="nr11">NR-11 - Transporte e Movimentação de Materiais</option>
                  <option value="nr12">NR-12 - Segurança em Máquinas e Equipamentos</option>
                  <option value="nr13">NR-13 - Caldeiras, Vasos de Pressão e Tubulações</option>
                  <option value="nr15">NR-15 - Atividades e Operações Insalubres</option>
                  <option value="nr18">NR-18 - Condições de Trabalho na Construção Civil</option>
                  <option value="nr35">NR-35 - Trabalho em Altura</option>
                  <option value="multiplos">Múltiplos serviços</option>
                  <option value="outros">Outros serviços</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Descreva sua necessidade ou os equipamentos que precisam de inspeção"
                  required
                  aria-required="true"
                  minLength={10}
                ></textarea>
              </div>
              <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Campos obrigatórios
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Proposta'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <a
                  href="https://wa.me/5518991427407?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20RVK%20Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 mt-1 hover:text-green-600 transition-colors"
                  title="Fale conosco no WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5518991427407" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 hover:underline transition-colors"
                  >
                    (18) 99142-7407
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Atendimento rápido e direto</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:comercial@rvk.eng.com" 
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    comercial@rvk.eng.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Para propostas e informações</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Coronel José Soares Marcondes
                    <br />
                    Presidente Prudente - SP, 19050-230
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av. Coronel José Soares Marcondes, Presidente Prudente - SP, 19050-230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Plantão 24h para emergências
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold mb-4">Área de Atendimento</h3>
              <p className="text-gray-600">
                Atendemos Presidente Prudente e região, incluindo cidades como Álvares Machado, 
                Regente Feijó, Pirapozinho, Martinópolis, Santo Anastácio, Presidente Epitácio, 
                Presidente Venceslau e demais municípios do Oeste Paulista.
              </p>
              <p className="text-gray-600 mt-2">
                Para empresas de outras regiões, entre em contato para verificar disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;