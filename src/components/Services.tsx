import React from 'react';
import { Globe, Palette, FileText, Instagram } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "SITES",
      description: "Criamos websites profissionais, responsivos e otimizados para converter visitantes em clientes.",
    },
    {
      icon: <Palette className="h-10 w-10 text-white" />,
      title: "LOGOS",
      description: "Desenvolvemos identidades visuais que comunicam a essência e os valores da sua marca.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "CRIAÇÃO DE CONTEÚDO",
      description: "Produzimos conteúdo estratégico e criativo para fortalecer a presença da sua marca.",
    },
    {
      icon: <Instagram className="h-10 w-10 text-white" />,
      title: "POSTAGENS INSTAGRAM",
      description: "Elaboramos posts visualmente atrativos e estratégicos para engajar seu público nas redes sociais.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">O que fazemos</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Combinamos criatividade e estratégia para desenvolver soluções digitais 
            que elevam sua marca e impulsionam seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;