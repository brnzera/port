import React, { useState } from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import mateuslins from '../../fotos/mateuslins.jpg';
import samira from '../../fotos/samira.jpg';
import joaosilva from '../../fotos/joaosilva.jpg';
import biancagomes from '../../fotos/biancagomes.jpg';
import drfelipe from '../../fotos/drfelipe.jpg';
import mfferraz from '../../fotos/mfferraz.jpg';
import { FaWhatsapp } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('sites');
  
  const siteTestimonials = [
    {
      quote: "Site institucional para clínica médica, com foco em agilidade, clareza de informações e credibilidade profissional.",
      name: "Dr. Felipe",
      designation: "Site Profissional",
      src: drfelipe,
    },
    {
      quote: "Landing page moderna para consultoria financeira, com destaque para captação de leads e apresentação de serviços.",
      name: "MF Ferraz",
      designation: "Site Profissional",
      src: mfferraz,
    },
  ];

  const logoTestimonials = [
    {
      quote: "Criamos identidades visuais marcantes que comunicam a essência da sua marca. Design estratégico e memorável.",
      name: "SB Soluções & Branding",
      designation: "Identidade Visual",
      src: mateuslins,
    },
    {
      quote: "Logomarcas profissionais que destacam seu negócio. Design moderno e versátil para todos os meios.",
      name: "SB Soluções & Branding",
      designation: "Identidade Visual",
      src: samira,
    },
    {
      quote: "Branding completo para empresas que querem se destacar. Sua marca única e memorável começa aqui.",
      name: "SB Soluções & Branding",
      designation: "Identidade Visual",
      src: joaosilva,
    },
    {
      quote: "Identidade visual personalizada para sua empresa, transmitindo confiança e profissionalismo.",
      name: "SB Soluções & Branding",
      designation: "Identidade Visual",
      src: biancagomes,
    },
  ];

  return (
    <section id="projects" className="section-padding gradient-section secondary-to-primary">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Nossos Projetos</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Conheça alguns dos nossos trabalhos recentes e veja como podemos transformar 
            sua presença digital.
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveFilter('sites')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'sites'
                  ? 'bg-white text-primary'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Sites
            </button>
            <button
              onClick={() => setActiveFilter('logos')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'logos'
                  ? 'bg-white text-primary'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Logos
            </button>
          </div>
        </div>
        <AnimatedTestimonials 
          testimonials={activeFilter === 'sites' ? siteTestimonials : logoTestimonials} 
        />
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/5581992813108?text=Opa%2C%20tenho%20interesse!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors text-xl font-bold border-2 border-green-300 animate-bounce"
            style={{ minWidth: 320 }}
          >
            <FaWhatsapp size={44} className="text-white drop-shadow-lg bg-white/10 rounded-full p-1" />
            <span className="tracking-wide">CHAMA NO <span className="font-bold">WHATSAPP</span></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;