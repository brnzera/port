import React from 'react';
import { ArrowRight } from 'lucide-react';
import GradientButton from './ui/gradient-button';
import { Squares } from './ui/squares-background';
import { TiltedCard } from './ui/tilted-card';
import sb from '../../fotos/sb.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-black/50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated squares background */}
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="rgba(59, 130, 246, 0.2)"
          hoverFillColor="rgba(59, 130, 246, 0.1)"
          className="bg-transparent"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              SUA IDENTIDADE<br />
              DIGITAL ESTÁ<br />
              <span className=""> 
                <span className="text-red-600">AFASTANDO</span> CLIENTES
              </span><br />
              SEM VOCÊ PERCEBER.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto lg:mx-0 animate-slide-up">
              Criamos sites e logomarcas que conectam sua marca com as pessoas certas. 
              Chega de perder clientes por falta de confiança! Tenha uma identidade forte, 
              autêntica e moderna para sua marca se destacar no mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <GradientButton
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                width="300px"
                height="60px"
              >
                <span className="flex items-center">
                  VEJA NOSSOS PROJETOS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </GradientButton>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <TiltedCard
              imageSrc={sb}
              altText="Design Moderno"
              captionText="Design Moderno e Profissional"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 flex flex-col justify-end p-4 
                              bg-gradient-to-t from-black/80 to-transparent 
                              rounded-b-[15px]">
                  <p className="text-lg font-semibold text-white drop-shadow-sm">
                    Design Profissional
                  </p>
                  <p className="text-sm text-gray-200 drop-shadow-sm">
                    Websites & Branding
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;