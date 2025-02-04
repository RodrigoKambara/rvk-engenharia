import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inspectionType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_0l0ac5f', // Substitua pelo seu Service ID do EmailJS
        'template_sgbzw7m', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
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
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em Contato</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
          Solicite uma proposta para inspeção NR-12 ou NR-13. Nossa equipe técnica
          está pronta para atender suas necessidades.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Solicitar Proposta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tipo de Serviço</label>
                <select
                  name="inspectionType"
                  value={formData.inspectionType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Selecione o tipo de serviço</option>
                  <option value="nr12">NR-12 - Segurança em Máquinas</option>
                  <option value="nr13">NR-13 - Vasos de Pressão, Caldeiras, Tubulações, Tanques</option>
                  <option value="ambos">Ambos os serviços</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Descreva os equipamentos que precisam de inspeção"
                  required
                ></textarea>
              </div>
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
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(18) 99142-7407</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">comercial@rvk.eng.com</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;