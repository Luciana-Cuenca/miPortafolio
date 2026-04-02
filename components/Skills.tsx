'use client';

import { useState } from 'react';

export default function Skills() {
  const [selected, setSelected] =
    useState<'backend' | 'frontend' | 'otras'>('backend');

  const backend = {
    languages: ['Python', 'Java', 'C#'],
    frameworks: ['Django', 'Fast api', 'Spring Boot'],
  };

  const frontend = {
    languages: ['Javascript', 'Html', 'Css'],
    frameworks: ['Angular', 'Tailwind.css', 'Next.js'],
  };

  const otras = {
    items: ['Unity', 'Adobe Photoshop', 'Krita', 'Blender', 'Postgres', 'MongoDB', 'Inglés B2'],
  };

  // Mapa de SVGs disponibles
  const svgMap: Record<string, string | null> = {
    'Python': '/python.svg',
    'Java': '/java.svg',
    'C#': '/csharp.svg',
    'Javascript': '/javascript.svg',
    'Html': '/html.svg',
    'Css': '/css.svg',
    'Unity': '/unity.svg',
    'Adobe Photoshop': '/photoshop.svg',
    'Krita': '/krita.svg',
    'Blender': '/blender.svg',
    'Postgres': '/postgresql.svg',
    'MongoDB': '/mongodb.svg',
    'Inglés B2': '/english.svg',
  };

  const currentSkills =
    selected === 'backend' ? backend : frontend;

  return (
    <section id="habilidades" className="w-full bg-white py-8 px-6 md:px-20">

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full gap-2 md:gap-x-4 md:gap-x-12 md:gap-y-0">

        {/* CARD 1: HABILIDADES */}
        <div className="bg-white border-4 border-black shadow-cartoon-lg h-fit md:row-start-1 md:col-start-1 order-1">
          <div className="bg-gray-700 px-5 py-3 flex justify-between border-b-4 border-black">
            <span className="text-white font-bold text-lg md:text-2xl xl:text-4xl">Habilidades</span>
            <button className="w-7 h-7 bg-gray-400 border-2 border-black font-bold text-black">✕</button>
          </div>

          <div className="p-4 md:p-6 xl:p-8 flex flex-col md:flex-row gap-3 md:gap-4 xl:gap-6">
            {/* Espacio para imagen SVG */}
            <div className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 border-4 border-red-600 bg-red-500 flex-shrink-0 flex items-center justify-center rounded-sm">
              <span className="text-white text-xs font-bold text-center">Espacio<br/>para SVG</span>
            </div>

            <p className="font-bold text-black text-sm md:text-base xl:text-lg leading-relaxed flex items-center">
              Las herramientas y habilidades que me permiten convertir ideas en experiencias claras, útiles y bien diseñadas.
            </p>
          </div>
        </div>

        {/* CARD 2: LENGUAJES / OTRAS */}
        <div className="bg-white border-4 border-black shadow-cartoon-lg md:row-start-1 md:row-span-2 md:col-start-2 order-3 h-fit">
          <div className="bg-gray-700 px-5 py-3 flex justify-between border-b-4 border-black">
            <span className="text-white font-bold text-lg md:text-2xl xl:text-4xl">
              {selected === 'backend'
                ? 'Backend'
                : selected === 'frontend'
                ? 'Frontend'
                : 'Otras'}
            </span>
            <button className="w-7 h-7 bg-gray-400 border-2 border-black font-bold text-black">✕</button>
          </div>

          <div className="p-4 md:p-6 xl:p-8 space-y-2 md:space-y-2 xl:space-y-3">
            {selected === 'otras'
              ? otras.items.map((item) => {
                  const svgPath = svgMap[item];
                  return (
                    <div key={item} className="flex gap-2 md:gap-3 xl:gap-4 items-center font-bold text-black text-sm md:text-base xl:text-lg">
                      {/* SVG o placeholder */}
                      {svgPath ? (
                        <img src={svgPath} alt={item} className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 border-2 border-black bg-gray-100 flex-shrink-0 flex items-center justify-center text-xs font-bold">—</div>
                      )}
                      <span>{item}</span>
                    </div>
                  );
                })
              : currentSkills.languages.map((lang) => {
                  const svgPath = svgMap[lang];
                  return (
                    <div key={lang} className="flex gap-2 md:gap-3 xl:gap-4 items-center font-bold text-black text-sm md:text-base xl:text-lg">
                      {/* SVG o placeholder */}
                      {svgPath ? (
                        <img src={svgPath} alt={lang} className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 border-2 border-black bg-gray-100 flex-shrink-0 flex items-center justify-center text-xs font-bold">—</div>
                      )}
                      <span>{lang}</span>
                    </div>
                  );
                })}
          </div>
        </div>

        {/* CARD 3: SELECCIONA */}
        <div className="bg-white border-4 border-black shadow-cartoon-lg md:row-start-2 md:col-start-1 order-2 relative md:h-fit -mt-2 md:-mt-3 xl:-mt-6">
          <div className="bg-gray-700 px-5 py-3 flex justify-between border-b-4 border-black">
            <span className="text-white font-bold text-lg md:text-2xl xl:text-4xl">Selecciona</span>
            <button className="w-7 h-7 bg-gray-400 border-2 border-black font-bold text-black">✕</button>
          </div>

          <div className="p-4 md:p-6 xl:p-8 space-y-2 md:space-y-3 xl:space-y-4 md:max-h-80 md:overflow-hidden">
            {[
              { key: 'backend', label: 'Backend' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'otras', label: 'Otras' }
            ].map(({ key, label }) => (
              <div
                key={key}
                onClick={() => setSelected(key as any)}
                className={`cursor-pointer border-3 border-black px-3 md:px-4 xl:px-5 py-2 md:py-3 xl:py-4 font-bold text-black text-sm md:text-base xl:text-xl transition-colors relative flex items-center justify-between ${
                  selected === key ? 'bg-[#FFE357]' : 'bg-white'
                }`}
              >
                <span><span className="text-lg md:text-2xl xl:text-3xl mr-2">−</span>{label}</span>
                {selected === key && <span className="text-2xl md:text-3xl xl:text-4xl">◀</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4: FRAMEWORKS */}
        {selected !== 'otras' && (
          <div className="bg-white border-4 border-black shadow-cartoon-lg h-fit md:row-start-2 md:col-start-2 order-4">
            <div className="bg-gray-700 px-5 py-3 flex justify-between border-b-4 border-black">
              <span className="text-white font-bold text-lg md:text-2xl xl:text-4xl">Frameworks</span>
              <button className="w-7 h-7 bg-gray-400 border-2 border-black font-bold text-black">✕</button>
            </div>

            <div className="p-4 md:p-6 xl:p-8 space-y-2 md:space-y-4 xl:space-y-5">
              {currentSkills.frameworks.map((fw) => (
                <div key={fw} className="flex gap-2 md:gap-3 xl:gap-4 items-center font-bold text-black text-sm md:text-base xl:text-lg">
                  <span className="text-lg md:text-2xl xl:text-3xl">−</span>
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