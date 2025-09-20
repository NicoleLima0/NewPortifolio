import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../assets/sass/core/navbar.scss'; // Criaremos este arquivo de estilo em breve
import developerImage from '../../assets/images/foto_perfil.png'; // **IMPORTANTE: Coloque sua foto na pasta src/assets/images/**

const Home = () => {
  const component = useRef(null); // Ref para o container principal
  const slider = useRef(null); // Ref para a camada de "transição"

  useLayoutEffect(() => {
    // gsap.context() é a forma moderna e segura de usar GSAP no React
    let ctx = gsap.context(() => {
      let tl = gsap.timeline(); // Timeline para sequenciar as animações

      // Animação inicial da camada de transição
      tl.to(slider.current, {
        duration: 1.5,
        xPercent: 100,
        ease: 'power3.inOut',
      });
      
      // Animação do conteúdo do Home após a transição
      tl.fromTo('.Home-content', 
        { y: 50, opacity: 0 }, 
        { duration: 1, y: 0, opacity: 1, stagger: 0.2 },
        "-=0.5" // Começa um pouco antes da animação anterior terminar
      );

    }, component);

    return () => ctx.revert(); // Função de limpeza
  }, []);

  return (
    <div className="Home-container" ref={component}>
      <div className="container-fluid g-0">
        <div className="row g-0">
          {/* Coluna da Imagem (Esquerda) */}
          <div className="col-md-6">
            <div className="home-image-container">
              <img src={developerImage} alt="Desenvolvedora" className="home-image" />
            </div>
          </div>

          {/* Coluna do Texto (Direita) */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center text-white Home-text-panel">
            {/* O Navbar será posicionado aqui em cima */}
            <div className="Home-content">
              <h1 className="Home-title">Developer</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Esta é a camada que fará a animação de entrada */}
      <div className="intro-slider" ref={slider}></div>
    </div>
  );
};

export default Home;