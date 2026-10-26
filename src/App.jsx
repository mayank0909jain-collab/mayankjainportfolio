import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackgroundElements from './components/BackgroundElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-slate-100 selection:bg-[#5B7CFF]/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Futuristic Background & Ambient Gradient Glows */}
      <BackgroundElements />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
