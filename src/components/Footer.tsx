import React from 'react';
import { Code, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} />
              <span className="font-bold text-xl">SB Soluções & Branding</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformamos ideias em experiências digitais impactantes que conectam marcas com pessoas.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento de Sites</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Criação de Logomarcas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Produção de Conteúdo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Design para Redes Sociais</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <a href="https://www.instagram.com/sb_solucoesebranding/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-pink-400 transition-colors text-lg">
                <Instagram size={26} className="mr-1" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+55 (81) 99281-3108</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>sbsolucoesebranding@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Brasil</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href="https://wa.me/5500123456789" 
                className="inline-flex items-center px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors text-white font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale no WhatsApp
              </a>
              <a href="https://www.instagram.com/sb_solucoesebranding/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-md shadow hover:scale-105 transition-transform">
                <Instagram size={20} className="mr-2" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SB Soluções & Branding. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;