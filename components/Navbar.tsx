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

  const getHref = (item: string) => {
    switch (item) {
      case "Sobre mi":
        return "#about";
      case "Habilidades":
        return "#habilidades";
      case "Proyectos":
        return "#proyectos";
      case "Experiencia":
        return "#experiencia";
      case "Galeria":
        return "#galeria";
      case "Contactos":
        return "#contactos";
      default:
        return "#";
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        px-4 sm:px-6 md:px-9
        py-2 md:py-3
        transition-all duration-300
        ${scrolled ? "bg-[#EC0202]" : "bg-[#ffffff]"}
      `}
    >
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <img
          src="/icon.svg"
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />

        {/* DESKTOP MENU */}
        <ul
          className={`
            hidden md:flex gap-5 title-fat
            ${scrolled ? "text-white" : "text-black"}
          `}
        >
          {menu.map((item, i) => (
            <li key={i} className="relative group">
              <a
                href={getHref(item)}
                className="relative block px-6 py-3 text-base font-bold"
              >
                <span className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0" />

                <span
                  className={`
                    absolute inset-0 z-10
                    transition-transform duration-300
                    ${scrolled ? "bg-white" : "bg-[#EC0202]"}
                    scale-x-0 group-hover:scale-x-100 origin-left
                  `}
                />

                <span
                  className={`
                    relative z-20 transition-colors
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
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl transition ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU ANIMADO */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 flex flex-col gap-2
          ${open ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {menu.map((item, i) => (
          <a
            key={i}
            href={getHref(item)}
            onClick={() => setOpen(false)}
            className="bg-[#EC0202] text-white px-5 py-3 text-sm rounded"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}