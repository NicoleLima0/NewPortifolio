import { motion } from 'framer-motion';


const AboutSection = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
    'Next.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ];

  return (
    <section id="sobre" className="section-padding bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Sou uma desenvolvedora full-stack apaixonada por criar soluções 
              digitais inovadoras. Com mais de 5 anos de experiência, transformo 
              ideias complexas em aplicações web elegantes e funcionais.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Minha especialidade está em desenvolvimento front-end moderno, 
              arquitetura de sistemas escaláveis e experiência do usuário. 
              Acredito que a tecnologia deve ser intuitiva e acessível.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div // badge prime
                    variant="secondary" 
                    className="px-3 py-1 text-sm bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                  >
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="d-flex gap-2 flex-column" 
          >
            <div className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Frontend Specialist
                </h3>
                <p className="text-neutral-600">
                  Especialista em React, TypeScript e frameworks modernos. 
                  Criando interfaces responsivas e performáticas.
                </p>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Backend Development
                </h3>
                <p className="text-neutral-600">
                  Desenvolvimento de APIs robustas e arquiteturas escaláveis 
                  com Node.js, Python e bancos de dados modernos.
                </p>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-neutral-600">
                  Design centrado no usuário, prototipagem e criação de 
                  experiências digitais intuitivas e atraentes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;