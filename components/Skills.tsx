'use client';

import { useState } from 'react';
import '@/app/Skills.css';

type SkillType = 'backend' | 'frontend' | 'otras';

type BackendFrontend = {
  title: string;
  description: string;
  skills: string[];
  frameworks: string[];
};

type Otras = {
  title: string;
  description: string;
  skills: string[];
};

type SkillsData = {
  backend: BackendFrontend;
  frontend: BackendFrontend;
  otras: Otras;
};

export default function Skills() {
  const [selected, setSelected] = useState<SkillType>('backend');

  const data: SkillsData = {
    backend: {
      title: 'Backend',
      description: 'Logica del sistema, APIs y bases de datos',
      skills: ['Python', 'Java', 'C#'],
      frameworks: ['Django', 'FastAPI', 'Spring Boot'],
    },
    frontend: {
      title: 'Frontend',
      description: 'Interfaces visuales y experiencia de usuario',
      skills: ['JavaScript', 'HTML', 'CSS'],
      frameworks: ['Angular', 'Tailwind.css', 'Next.js'],
    },
    otras: {
      title: 'Otras herramientas',
      description: 'Software y habilidades complementarias',
      skills: [
        'Unity',
        'Adobe Photoshop',
        'Krita',
        'Blender',
        'Postgres',
        'MongoDB',
        'Ingles B2',
      ],
    },
  };

  const svgMap: Record<string, string | null> = {
    Python: '/python.svg',
    Java: '/java.svg',
    'C#': '/csharp.svg',
    JavaScript: '/javascript.svg',
    HTML: '/html.svg',
    CSS: '/css.svg',
    Unity: '/unity.svg',
    'Adobe Photoshop': '/photoshop.svg',
    Krita: '/krita.svg',
    Blender: '/blender.svg',
    Postgres: '/postgresql.svg',
    MongoDB: '/mongodb.svg',
    'Ingles B2': '/english.svg',
  };

  const current = data[selected];
  const hasFrameworks = selected === 'backend' || selected === 'frontend';

  return (
    <section id="habilidades" className="skills-section">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-8">
          Habilidades
        </h2>

        <div className="skills-grid">
          <div className="skills-card h-[420px] flex flex-col">
            <div className="skills-card-header">
              <span className="skills-card-title">Habilidades</span>
              <button className="skills-close-btn" />
            </div>

            <div className="skills-content flex flex-col gap-4 overflow-y-auto">
              <p>
                Explora las tecnologias y herramientas que utilizo para desarrollar proyectos.
              </p>

              {(['backend', 'frontend', 'otras'] as SkillType[]).map((key) => (
                <div
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`skill-select ${
                    selected === key ? 'skill-active' : ''
                  }`}
                >
                  <span>{data[key].title}</span>
                  {selected === key && <span>{'<'}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-card h-[420px] flex flex-col">
            <div className="skills-card-header">
              <span className="skills-card-title">{current.title}</span>
              <button className="skills-close-btn" />
            </div>

            <div className="skills-content flex flex-col gap-4 overflow-y-auto">
              <p>{current.description}</p>

              <div>
                <p className="font-bold mb-2">
                  {selected === 'otras' ? 'Herramientas' : 'Tecnologias'}
                </p>

                {current.skills.map((item) => (
                  <div key={item} className="skill-item">
                    {svgMap[item] ? (
                      <img src={svgMap[item]!} className="skill-icon" />
                    ) : (
                      <div className="skill-icon-placeholder">-</div>
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {hasFrameworks && (
                <div className="mt-4 border-t-2 border-black pt-3">
                  <p className="font-bold mb-2">Frameworks</p>

                  {data[selected].frameworks.map((fw) => (
                    <div key={fw} className="skill-item">
                      <span>-</span>
                      <span>{fw}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
