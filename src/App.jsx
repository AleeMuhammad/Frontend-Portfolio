import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import About from './components/About';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative text-white">
      <Background />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <MySkills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
