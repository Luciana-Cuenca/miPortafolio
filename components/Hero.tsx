"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <section
      id="hero"
      className="bg-[#EC0202] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-20"
    >

      {/* TEXTO */}
      <div
        className={`text-center md:text-left transform transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl text-white title-fat text-cartoon">
          Luciana Cuenca
        </h1>

        <p className="text-white mt-3 text-lg">
          Desarrolladora de software, Artista digital
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
          <button className="bg-white px-4 py-2 text-black shadow-cartoon hover:translate-y-1 transition">
            Descargar CV
          </button>

          <button className="bg-white px-4 py-2 text-black shadow-cartoon hover:translate-y-1 transition">
            Contactame
          </button>
        </div>
      </div>

      {/* IMAGEN */}
      {/* <img src="/hero.png" className="w-72 mt-10 md:mt-0" /> */}

      <div
        className={`w-56 h-56 md:w-72 md:h-72 bg-black mt-10 md:mt-0 shadow-cartoon-lg transform transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      ></div>

    </section>
  );
}