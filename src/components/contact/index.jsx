import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';

// Importação do SCSS
import '../../assets/sass/core/contact.scss';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do Título
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Animação do Conteúdo
      gsap.fromTo(contentRef.current, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: 'pi pi-envelope', // Ícone do PrimeIcons
      label: 'Email',
      value: 'contato@dev.com',
      href: 'mailto:contato@dev.com'
    },
    {
      icon: 'pi pi-phone',
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: 'pi pi-map-marker',
      label: 'Localização',
      value: 'São Paulo, SP',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: 'pi pi-linkedin',
      label: 'LinkedIn',
      href: '#'
    },
    {
      icon: 'pi pi-github',
      label: 'GitHub',
      href: '#'
    }
  ];

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="contact-section"
    >
      <div className="container">
        <h2 ref={titleRef} className="contact-section__title">
          Fale Comigo
        </h2>
        
        <div ref={contentRef} className="contact-section__content">
          {/* Formulário de Contato */}
          <div 
            title="Envie uma Mensagem" 
            className="contact-form"
          >
            <form className="p-fluid d-flex flex-column gap-4">

              <span className="p-float-label">
                    <InputText id="name" />
                    <label htmlFor="name">Seu nome</label>
                  </span>

              <span className="p-float-label">
                    <InputText id="email" type="email" />
                    <label htmlFor="email">Seu email</label>
                  </span>
              
              <span className="p-float-label">
                <InputText id="subject" />
                <label htmlFor="subject">Assunto</label>
              </span>
              
              <span className="p-float-label">
                <InputTextarea id="message" rows={6} className="contact-form__textarea" />
                <label htmlFor="message">Sua mensagem</label>
              </span>
              
              <Button
                type="submit"
                label="Enviar Mensagem"
                className="p-button-custom"
              />
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info__title">
                Informações de Contato
              </h3>
              <div className="contact-info__list">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="contact-info__item">
                    <div className="contact-info__icon-wrapper">
                      <i className={`${info.icon} contact-info__icon`} />
                    </div>
                    <div>
                      <p className="contact-info__label">{info.label}</p>
                      <p className="contact-info__value">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="contact-info__title">
                Redes Sociais
              </h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-links__item"
                    aria-label={social.label}
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="call-to-action">
              <h4 className="call-to-action__title">Vamos trabalhar juntos!</h4>
              <p className="call-to-action__text">
                Estou sempre aberta a novos projetos e oportunidades. 
                Entre em contato e vamos criar algo incrível juntos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;