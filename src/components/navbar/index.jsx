// import React, { useEffect } from "react";
// import { gsap } from "gsap";

export default function Navbar() {
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

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Portifólio Nicole</div>
      <ul className="nav-links">
        <li onClick={() => handleScroll("sobre")}>Sobre mim</li>
        <li onClick={() => handleScroll("qualificacoes")}>Qualificações</li>
        <li onClick={() => handleScroll("projetos")}>Projetos</li>
        <li onClick={() => handleScroll("contato")}>Contato</li>
      </ul>
    </nav>
  );
}

