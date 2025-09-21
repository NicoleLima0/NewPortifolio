import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../assets/sass/core/navbar.scss";
import developerImage from "../../assets/images/foto_perfil.png";
import { Button } from 'primereact/button';

const Home = () => {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.to(slider.current, {
        duration: 1.5,
        xPercent: 100,
        ease: "power3.inOut",
      });

      tl.fromTo(
        ".Home-content",
        { y: 50, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, stagger: 0.2 },
        "-=0.5"
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-page" ref={component}>
      <div className="container-fluid g-0">
        <div className="row g-0">
          {/* Coluna da Imagem (Esquerda) */}
          <div className=" col-md-6">
            <div className="home-image-container power3.inOut">
              <img
                src={developerImage}
                alt="Desenvolvedora"
                className="home-image"
              />
            </div>
          </div>

          {/* Coluna do Texto (Direita) */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center text-white Home-text-panel">
            {/* O Navbar será posicionado aqui em cima */}
            <div className="Home-content">
              <h1 className="Home-title">Desenvolvedora front-end</h1>
              <p>A mais pica de todas!!</p>
              <div className="d-flex gap-2">
                <Button icon="pi pi-check" label="Projetos"/>
                <Button icon="pi pi-check" label="Contato"/>
              </div>
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
