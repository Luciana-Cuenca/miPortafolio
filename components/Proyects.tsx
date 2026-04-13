'use client';
import { useState, useEffect } from 'react';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  github: string;
  imagen: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'LumpyMed',
    descripcion: 'Proyecto enfocado en ser una herramienta de medición para la dosificación de medicamentos pediátricos.',
    tecnologias: 'Java, Spring Boot, Angular y Tailwind CSS',
    github: 'https://github.com/Luciana-Cuenca/lumpyMedBackend.git',
    imagen: '/lumpy.png',
  },
  {
    id: 2,
    titulo: 'Arritmo',
    descripcion: 'Proyecto en desarrollo en Unity que convierte patrones de arritmia en una experiencia interactiva de ritmo y diseño.',
    tecnologias: 'Unity',
    github: 'https://github.com/Luciana-Cuenca/Arritmo.git',
    imagen: '/arritmo.png',
  },
  {
    id: 3,
    titulo: 'Full-House',
    descripcion: 'Proyecto ganador de hackatón enfocado en la gestión de propiedades con inteligencia artificial.',
    tecnologias: 'React, TypeScript, Vite, Python y FastAPI',
    github: 'https://github.com/sebastianTFRB/FrontendWeb_reto3.git',
    imagen: '/fullhouseIMG.jpg',
  },
  {
    id: 4,
    titulo: 'Battery Life Estimator',
    descripcion: 'Estimador de vida útil y rendimiento de batería para motocicleta eléctrica.',
    tecnologias: 'Firebase Studio, NextJS, Typescript',
    github: 'https://github.com/RexbilXD/BatteryLifeEstimator.git',
    imagen: '/battery.png',
  },
  {
    id: 5,
    titulo: 'Integracion continua',
    descripcion: 'Programa educativo orientado al aprendizaje infantil mediante actividades interactivas y dinámicas.',
    tecnologias: 'TypeScript, web app',
    github: 'https://github.com/C-David-Burbano-C/integracion_continua.git',
    imagen: '/integracion.png',
  }
];

export default function Proyects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proyectos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  const visibleProjects = isMobile
    ? proyectos
    : [
        proyectos[currentIndex],
        proyectos[(currentIndex + 1) % proyectos.length],
        proyectos[(currentIndex + 2) % proyectos.length],
      ];

  return (
    <section id="proyectos" className="proyectsSection">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-6 text-center">
          Proyectos
        </h2>

        <div className="carouselContainer">
          {!isMobile && (
            <button className="arrow prevArrow" onClick={prevSlide} />
          )}

          <div className="carousel">
            <div className="carouselTrack">
              {visibleProjects.map((proyecto, index) => (
                <div
                  key={`${proyecto.id}-${index}`}
                  className={`proyectCard ${
                    !isMobile && index === 1 ? 'middle' : 'side'
                  }`}
                >
                  <div className="cardHeader">
                    <h3 className="proyectTitle">{proyecto.titulo}</h3>
                    <div className="miniBox">X</div>
                  </div>

                  
                  <div className="imageContainer">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="projectImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>

                  <p className="proyectDescription">{proyecto.descripcion}</p>

                  <p className="tecnologias">
                    <strong>Tecnologias:</strong> {proyecto.tecnologias}
                  </p>

                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubBtn"
                  >
                    Ir al github
                  </a>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button className="arrow nextArrow" onClick={nextSlide} />
          )}
        </div>
      </div>
    </section>
  );
}