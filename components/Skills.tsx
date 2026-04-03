'use client';

import { useState } from 'react';
import '@/app/Skills.css';

type SkillType = 'backend' | 'frontend' | 'otras';

export default function Skills() {
  const [selected, setSelected] = useState<SkillType>('backend');

  const backend = {
    languages: ['Python', 'Java', 'C#'],
    frameworks: ['Django', 'Fast api', 'Spring Boot'],
  };

  const frontend = {
    languages: ['Javascript', 'Html', 'Css'],
    frameworks: ['Angular', 'Tailwind.css', 'Next.js'],
  };

  const otras = {
    items: [
      'Unity',
      'Adobe Photoshop',
      'Krita',
      'Blender',
      'Postgres',
      'MongoDB',
      'Inglés B2',
    ],
  };

  const svgMap: Record<string, string | null> = {
    Python: '/python.svg',
    Java: '/java.svg',
    'C#': '/csharp.svg',
    Javascript: '/javascript.svg',
    Html: '/html.svg',
    Css: '/css.svg',
    Unity: '/unity.svg',
    'Adobe Photoshop': '/photoshop.svg',
    Krita: '/krita.svg',
    Blender: '/blender.svg',
    Postgres: '/postgresql.svg',
    MongoDB: '/mongodb.svg',
    'Inglés B2': '/english.svg',
  };

  const currentSkills =
    selected === 'backend' ? backend : frontend;

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-grid">

        {/* CARD 1 */}
        <div className="skills-card md:row-start-1 md:col-start-1 order-1">
          <div className="skills-card-header">
            <span className="skills-card-title">Habilidades</span>
            <button className="skills-close-btn">✕</button>
          </div>

          <div className="skills-content flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16">
            <div className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 border-4 border-red-600 bg-red-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold text-center">
                Espacio<br />para SVG
              </span>
            </div>

            <p className="font-bold text-black text-sm md:text-base xl:text-lg flex items-center">
              Las herramientas y habilidades que me permiten convertir ideas en experiencias claras, útiles y bien diseñadas.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="skills-card md:row-start-1 md:row-span-2 md:col-start-2 order-3">
          <div className="skills-card-header">
            <span className="skills-card-title">
              {selected === 'backend'
                ? 'Backend'
                : selected === 'frontend'
                ? 'Frontend'
                : 'Otras'}
            </span>
            <button className="skills-close-btn">✕</button>
          </div>

          <div className="skills-content space-y-2">
            {selected === 'otras'
              ? otras.items.map((item) => {
                  const svgPath = svgMap[item];
                  return (
                    <div key={item} className="skill-item">
                      {svgPath ? (
                        <img src={svgPath} alt={item} className="skill-icon" />
                      ) : (
                        <div className="skill-icon-placeholder">—</div>
                      )}
                      <span>{item}</span>
                    </div>
                  );
                })
              : currentSkills.languages.map((lang) => {
                  const svgPath = svgMap[lang];
                  return (
                    <div key={lang} className="skill-item">
                      {svgPath ? (
                        <img src={svgPath} alt={lang} className="skill-icon" />
                      ) : (
                        <div className="skill-icon-placeholder">—</div>
                      )}
                      <span>{lang}</span>
                    </div>
                  );
                })}
          </div>
        </div>

        {/* CARD 3 */}
        <div className="skills-card md:row-start-2 md:col-start-1 order-2 -mt-2">
          <div className="skills-card-header">
            <span className="skills-card-title">Selecciona</span>
            <button className="skills-close-btn">✕</button>
          </div>

          <div className="skills-content space-y-2">
            {[
              { key: 'backend', label: 'Backend' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'otras', label: 'Otras' },
            ].map(({ key, label }) => (
              <div
                key={key}
                onClick={() => setSelected(key as SkillType)}
                className={`skill-select ${
                  selected === key ? 'skill-active' : ''
                }`}
              >
                <span>
                  <span className="mr-2">−</span>
                  {label}
                </span>

                {selected === key && <span>◀</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4 */}
        {selected !== 'otras' && (
          <div className="skills-card md:row-start-2 md:col-start-2 order-4">
            <div className="skills-card-header">
              <span className="skills-card-title">Frameworks</span>
              <button className="skills-close-btn">✕</button>
            </div>

            <div className="skills-content space-y-2">
              {currentSkills.frameworks.map((fw) => (
                <div key={fw} className="skill-item">
                  <span>−</span>
                  <span>{fw}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}