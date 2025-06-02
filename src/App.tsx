import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import AnimatedBackground from './components/ui/animated-background';

function App() {
  return (
    <AnimatedBackground className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </AnimatedBackground>
  );
}

export default App;