"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <section
      id="hero"
      className="
        bg-[#EC0202] 
        flex flex-col md:flex-row items-center justify-between 
        
        px-6 md:px-20 lg:px-28
        pt-24 md:pt-40 lg:pt-48
        pb-20 md:pb-40 lg:pb-48
        
        gap-16 lg:gap-24
      "
    >

      {/* TEXTO */}
      <div
        className={`text-center md:text-left md:ml-10 transform transition-all duration-700 z-10 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1
          className="
            text-4xl md:text-6xl font-extrabold text-white leading-none
            [text-shadow:2px_2px_0_black]
            md:[text-shadow:3px_3px_0_black]
          "
        >
          Luciana Cuenca
        </h1>

        <p className="mt-4 text-white text-xl md:text-3xl leading-tight [text-shadow:2px_2px_0_black]">
          Desarrolladora de software, Artista digital
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start">
          <a
            href="/cv.pdf"
            download="Luciana_Cuenca_CV.pdf"
            className="bg-white px-6 py-3 text-black shadow-cartoon text-lg md:text-xl font-extrabold transition transform hover:-translate-y-1 active:translate-y-0.5"
          >
            Descargar CV
          </a>

          <button className="bg-white px-6 py-3 text-black shadow-cartoon text-lg md:text-xl font-extrabold transition transform hover:-translate-y-1 active:translate-y-0.5">
            Contáctame
          </button>
        </div>
      </div>

      {/* IMAGEN */}
      <div
        className={`w-40 h-40 sm:w-52 sm:h-52 md:w-60 lg:w-80 flex items-center justify-center overflow-visible transform transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src="/hero.png"
          alt="hero"
          className="
            w-[150%] sm:w-[150%] md:w-[170%] lg:w-[189%]

            max-w-none
            h-auto
            object-contain

            translate-x-0 md:-translate-x-10 lg:-translate-x-36
            translate-y-2 md:translate-y-6 lg:translate-y-16
          "
        />
      </div>

    </section>
  );
}