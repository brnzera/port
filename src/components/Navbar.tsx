import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre Nós', href: '#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className={`flex items-center gap-2 font-bold text-xl ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Code size={28} className={scrolled ? 'text-primary' : 'text-white'} />
            <span>SB Soluções & Branding</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`btn ${
                scrolled ? 'btn-primary' : 'border-2 border-white text-white hover:bg-white/10'
              }`}
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 bg-white shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-primary hover:text-primary-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;