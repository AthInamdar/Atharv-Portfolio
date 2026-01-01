import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BEProjectVideo from './components/BEProjectVideo';

function App() {
  return (
    <div className="bg-background min-h-screen text-text font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BEProjectVideo />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
