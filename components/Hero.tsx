"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <section
      id="hero"
      className="bg-[#EC0202] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 md:pt-40 pb-20 md:pb-40 gap-20"
    >

      {/* TEXTO */}
      <div
        className={`text-center md:text-left md:ml-10 transform transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >

        {/* TÍTULO */}
        <h1
          className="
            text-4xl md:text-6xl font-extrabold text-white leading-none
            [text-shadow:2px_2px_0_black]
            md:[text-shadow:3px_3px_0_black]
          "
        >
          Luciana Cuenca
        </h1>

        {/* SUBTÍTULO (STABLE) */}
        <p className="mt-4 text-white text-xl md:text-3xl leading-tight [text-shadow:2px_2px_0_black]">
          Desarrolladora de software, Artista digital
        </p>

        {/* BOTONES */}
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
        className={`w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-black shadow-cartoon-lg transform transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      ></div>

    </section>
  );
}