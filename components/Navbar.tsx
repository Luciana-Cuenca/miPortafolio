"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const menu = [
    "Sobre mi",
    "Habilidades",
    "Proyectos",
    "Experiencia",
    "Galeria",
    "Contactos",
  ];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const nextTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (hero) {
        const heroHeight = hero.offsetHeight;
        setScrolled(window.scrollY > heroHeight - 80);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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

  const isDark = theme === "dark";
  const navbarBg = scrolled ? "bg-[#EC0202]" : isDark ? "bg-[#111111]" : "bg-white";
  const navbarText = scrolled || isDark ? "text-white" : "text-black";
  const hoverBg = scrolled || isDark ? "bg-white" : "bg-[#EC0202]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-2 md:py-3 transition-all duration-300 ${navbarBg}`}
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/icon.svg"
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />

            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
              className={`rounded-full border-2 px-3 py-2 text-base leading-none transition-transform hover:-translate-y-0.5 ${
                isDark
                  ? "border-white bg-white text-black shadow-[4px_4px_0_#ec0202]"
                  : "border-black bg-[#ec0202] text-white shadow-[4px_4px_0_black]"
              }`}
            >
              <span className="inline-block align-middle">
                {isDark ? "☀" : "☾"}
              </span>
            </button>
          </div>

          <ul className={`hidden md:flex ml-auto gap-5 title-fat ${navbarText}`}>
            {menu.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={getHref(item)}
                  className="relative block px-6 py-3 text-base font-bold"
                >
                  <span className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0" />

                  <span
                    className={`absolute inset-0 z-10 transition-transform duration-300 ${hoverBg} scale-x-0 group-hover:scale-x-100 origin-left`}
                  />

                  <span
                    className={`relative z-20 transition-colors ${
                      scrolled || isDark
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                  >
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className={`flex h-11 min-w-11 items-center justify-center border-2 border-current ${navbarText}`}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div
            className={`md:hidden mt-3 flex flex-col gap-2 border-4 border-black p-2 shadow-[6px_6px_0_black] ${navbarBg}`}
          >
            {menu.map((item, i) => (
              <a
                key={i}
                href={getHref(item)}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-bold border-2 border-black ${
                  scrolled || isDark ? "bg-white text-black" : "bg-[#EC0202] text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
