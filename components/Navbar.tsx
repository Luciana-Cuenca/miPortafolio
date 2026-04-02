"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    "Sobre mi",
    "Habilidades",
    "Proyectos",
    "Experiencia",
    "Galeria",
    "Contactos",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (hero) {
        const heroHeight = hero.offsetHeight;
        setScrolled(window.scrollY > heroHeight - 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        px-6 md:px-10 py-4
        transition-all duration-300
        ${scrolled ? "bg-[#EC0202]" : "bg-[#ffffff]"}
      `}
    >
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <img
          src="/icon.svg"
          alt="logo"
          className="w-14 h-16 object-contain"
        />

        {/* DESKTOP */}
        <ul
          className={`
            hidden md:flex gap-6 title-fat text-lg
            ${scrolled ? "text-white" : "text-black"}
          `}
        >
          {menu.map((item, i) => {
            const getHref = (item: string) => {
              switch(item) {
                case "Sobre mi": return "#about";
                case "Habilidades": return "#habilidades";
                case "Proyectos": return "#proyectos";
                case "Experiencia": return "#experiencia";
                case "Galeria": return "#galeria";
                case "Contactos": return "#contactos";
                default: return "#";
              }
            };
            
            return (
              <li
                key={i}
                className="relative px-3 py-1 cursor-pointer group"
              >
                <a href={getHref(item)}>
                  <span
                    className={`
                      relative z-10 font-bold transition-colors
                      ${
                        scrolled
                          ? "text-white group-hover:text-black"
                          : "text-black group-hover:text-white"
                      }
                    `}
                  >
                    {item}
                  </span>
                </a>

                {/* RECTÁNGULO (SOLO HOVER) */}
                <span
                  className={`
                    absolute inset-0
                    ${scrolled ? "bg-white" : "bg-[#EC0202]"}
                    origin-left
                    transition-transform duration-300
                    shadow-cartoon
                    scale-x-0 group-hover:scale-x-100
                  `}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          {menu.map((item, i) => {
            const getHref = (item: string) => {
              switch(item) {
                case "Sobre mi": return "#about";
                case "Habilidades": return "#habilidades";
                case "Proyectos": return "#proyectos";
                case "Experiencia": return "#experiencia";
                case "Galeria": return "#galeria";
                case "Contactos": return "#contactos";
                default: return "#";
              }
            };
            
            return (
              <a
                key={i}
                href={getHref(item)}
                onClick={() => setOpen(false)}
                className="bg-[#EC0202] text-white px-4 py-2 shadow-cartoon"
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}