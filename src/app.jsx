// import Navbar from "./components/navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

// export default App;
import React from 'react';
import Home from "../src/components/home/index.jsx";
import Navbar from './components/navbar/index.jsx';

// Placeholders para as outras seções
const Section = ({ id, title }) => (
  <section id={id} style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', paddingTop: '100px'}}>
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
      <main>
        <Section id="expertise" title="Expertise" />
        <Section id="portfolio" title="Portfólio" />
        <Section id="contato" title="Fale Comigo" />
      </main>
    </>
  );
}

export default App;