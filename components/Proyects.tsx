'use client';

import { useState, useEffect } from 'react';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  github: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'LumpyMed',
    descripcion: 'Aquí va el texto, después lo ponemos',
    tecnologias: 'Java, Spring Boot, Angular y Tailwind CSS',
    github: 'https://github.com/Luciana-Cuenca/lumpyMedBackend.git'
  },
  {
    id: 2,
    titulo: 'Arritmo',
    descripcion: 'Aquí va el texto, después lo ponemos',
    tecnologias: 'Unity',
    github: '#'
  },
  {
    id: 3,
    titulo: 'Full-House',
    descripcion: 'Aquí va el texto, después lo ponemos',
    tecnologias: 'React, TypeScript, Vite, Python y FastAPI',
    github: '#'
  },
  {
    id: 4,
    titulo: 'Proyecto 4',
    descripcion: 'Aquí va el texto, después lo ponemos',
    tecnologias: 'Tecnologías a definir',
    github: '#'
  },
  {
    id: 5,
    titulo: 'Proyecto 5',
    descripcion: 'Aquí va el texto, después lo ponemos',
    tecnologias: 'Tecnologías a definir',
    github: '#'
  }
];

export default function Proyects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detectar móvil
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

  // desktop y mobile
  const visibleProjects = isMobile
    ? proyectos
    : [
        proyectos[currentIndex],
        proyectos[(currentIndex + 1) % proyectos.length],
        proyectos[(currentIndex + 2) % proyectos.length],
      ];

  return (
    <section id="proyectos" className="proyectsSection">

      <h2 className="title mb-6">Proyectos</h2>

      <div className="carouselContainer">

        {/* Flecha izquierda (solo desktop) */}
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
                  <div className="miniBox">✕</div>
                </div>

                <div className="imageContainer">
                  <div className="imagePlaceholder"></div>
                </div>

                <p className="proyectDescription">{proyecto.descripcion}</p>

                <p className="tecnologias">
                  <strong>Tecnologías:</strong> {proyecto.tecnologias}
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

        {/* Flecha derecha (solo desktop) */}
        {!isMobile && (
          <button className="arrow nextArrow" onClick={nextSlide} />
        )}

      </div>
    </section>
  );
}