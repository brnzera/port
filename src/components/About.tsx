import React from 'react';
import { TeamMember } from './TeamMember';
import { motion } from 'framer-motion';
import stefany from '../../fotos/stefany.jpg';
import breno from '../../fotos/breno.jpg';

const About = () => {
  const team = [
    {
      name: "Stefany Macêdo",
      role: "Design & Desenvolvimento Web",
      image: stefany,
      bio: "Desenvolvedora web com sólida experiência em design visual e estratégia de marca. Combina habilidades técnicas de programação com um olhar apurado para design, criando soluções digitais completas e identidades visuais impactantes."
    },
    {
      name: "Breno Lira",
      role: "Desenvolvimento Web & Conteúdo",
      image: breno,
      bio: "Especializado em desenvolvimento web e criação de conteúdo estratégico, Breno combina habilidades técnicas e criativas para entregar soluções digitais completas. Seu foco está em criar experiências digitais otimizadas e conteúdo que engaja."
    }
  ];

  return (
    <section id="about" className="section-padding bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre Nós</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Somos uma dupla apaixonada por criar experiências digitais que conectam 
            marcas e pessoas de forma autêntica e eficaz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;