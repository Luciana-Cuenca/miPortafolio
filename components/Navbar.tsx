"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Sobre mi",
    "Habilidades",
    "Proyectos",
    "Experiencia",
    "Galeria",
    "Contactos",
  ];

  return (
    <nav className="bg-[#d9d9d9] px-6 md:px-10 py-4 relative">

      <div className="flex justify-between items-center">
        {/* LOGO */}
        <div className="w-8 h-8 bg-black"></div>

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-6 text-black title-fat text-lg">

          {menu.map((item, i) => (
            <li
              key={i}
              className="relative px-3 py-1 cursor-pointer group"
            >
              <span className="relative z-10 font-bold">{item}</span>

              {/* RECTÁNGULO ROJO */}
              <span className="absolute inset-0 bg-[#EC0202] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 shadow-cartoon"></span>
            </li>
          ))}

        </ul>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 font-[var(--font-baloo)]">

          {menu.map((item, i) => (
            <div
              key={i}
              className="bg-[#EC0202] text-white px-4 py-2 shadow-cartoon"
            >
              {item}
            </div>
          ))}

        </div>
      )}
    </nav>
  );
}