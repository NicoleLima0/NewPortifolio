// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// export default function Navbar() {
//   useEffect(() => {
//     // Animação de entrada da navbar
//     gsap.from(".navbar", {
//       duration: 1,
//       y: -100,
//       opacity: 0,
//       ease: "power3.out",
//     });

//     // Animação individual dos links
//     gsap.from(".nav-links li", {
//       duration: 1,
//       y: -20,
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power3.out",
//       delay: 0.5,
//     });
//   }, []);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Portifólio Nicole</div>
//       <ul className="nav-links">
//         <li onClick={() => handleScroll("sobre")}>Início</li>
//         <li onClick={() => handleScroll("qualificacoes")}>Expertise</li>
//         <li onClick={() => handleScroll("projetos")}>Portfólio</li>
//         <li onClick={() => handleScroll("contato")}>Fale comigo</li>
//       </ul>
//     </nav>
//   );
// }

import '../../assets/sass/core/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid justify-content-end">
        <ul className="navbar-nav Home-content"> {/* Adicionamos Home-content para animar junto */}
          <li className="nav-item">
            <a className="nav-link" href="#inicio">O início</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#expertise">Expertise</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfólio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">Fale comigo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

