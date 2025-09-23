import React from 'react';
import Home from "../src/components/home/index.jsx";
import Navbar from './components/navbar/index.jsx';
import About from './components/about/index.jsx';
import ContactSection from './components/contact/index.jsx';

const Section = ({ id, title }) => (
  <section id={id} style={{ minHeight: '100vh', backgroundColor: '#1C1F20', color: 'white', paddingTop: '100px'}}>
    <div className="container">
      <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '3rem' }}>{title}</h2>
      <p>Conteúdo da seção {title} virá aqui...</p>
    </div>
  </section>
);

function App() {
  return (
    <>
      <Navbar />
      <header id="inicio">
        <Home />
      </header>
      <About/>
      <main>
        <Section id="portfolio" title="Portfólio" />
        <ContactSection/>   
        
      </main>
      
    </>
  );
}

export default App;