import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problems from './components/Problems';
import About from './components/About';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
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
        <section id="problems">
          <Problems />
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
        <section id="testimonials">
          <Testimonials />
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