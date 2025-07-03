import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Methodology from './components/Methodology';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="painpoints">
          <PainPoints />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="methodology">
          <Methodology />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="casestudy">
          <CaseStudy />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;