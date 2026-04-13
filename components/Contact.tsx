import SectionDivider from "./SectionDivider";

const contacts = [
  {
    name: "Carlos David Burbano",
    portfolioUrl: "https://portafolio-eosin-nine.vercel.app/",
  },
  {
    name: "Alejandro España",
    portfolioUrl: "https://portafolio-eight-rust-41.vercel.app/es",
  },
  {
    name: "Luis Esteba Castillo",
    portfolioUrl: "#",
  },
  {
    name: "Bayron Felipe Jaramillo",
    portfolioUrl: "#",
  },
  {
    name: "Matheu Rurales",
    portfolioUrl: "https://www.matheu.site/",
  },
];

const socialLinks = [
  { href: "www.linkedin.com/in/luciana-cuenca-26356a39b", icon: "/linkedin.svg", label: "LinkedIn" },
  { href: "https://github.com/Luciana-Cuenca", icon: "/github.svg", label: "GitHub" },
  { href: "https://www.instagram.com/blood_ink_08/", icon: "/instagram.svg", label: "Instagram" },
  { href: "mailto:lucugo.08@gmail.com", icon: "/email.svg", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contactos" className="w-full bg-white">

      {/* HEADER (ligero shift a la derecha) */}
      <div className="px-4 md:px-8 py-16 md:pl-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
            Contactos
          </h2>

          <p className="max-w-xl text-base md:text-lg text-black leading-relaxed">
            Aqui puedes encontrar los medios de contacto de las personas que participaron en los proyectos, por si quieres comunicarte, hacer alguna consulta o conocer mas sobre su trabajo.
          </p>
        </div>
      </div>

      {/* ROJO */}
      <div className="bg-[#EC0202] px-4 md:px-8 py-32 relative text-white overflow-hidden">

        {/* CONTACTOS (un poco más a la derecha) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 relative z-20 md:ml-6 lg:ml-12">
          {contacts.map((contact) => (
            <div key={contact.name} className="flex flex-col items-start gap-4">
              <p className="text-lg md:text-xl font-bold leading-snug">
                {contact.name}
              </p>

              <a
                href={contact.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white px-5 py-2 text-base md:text-lg font-bold hover:bg-white hover:text-[#EC0202] transition-colors"
              >
                Portafolio
              </a>
            </div>
          ))}
        </div>

        {/* GATO ( */}
        <div className="absolute bottom-50 right-0 hidden md:block z-0 pointer-events-none">
          <img
            src="/gato.png"
            alt="gato"
            className="w-[480px] lg:w-[540px] object-contain opacity-90"
          />
        </div>

        {/* DIVIDER */}
        <div className="mt-55 relative z-20">
          <div className="w-full max-w-[1400px] mx-auto flex items-center justify-center">

            <div className="flex-1 h-[3px] bg-white mx-4"></div>

            <img
              src="/icon.svg"
              alt="icon"
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
            />

            <div className="flex-1 h-[3px] bg-white mx-4"></div>

          </div>
        </div>

        {/* TEXTO FINAL */}
        <p className="text-center text-sm mt-12 relative z-20">
          Gracias por llegar hasta aqui, cada proyecto es una parte de lo que soy y de lo que sigo construyendo.
        </p>

        {/* REDES */}
        <div className="flex justify-center gap-6 mt-8 relative z-20">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={social.icon}
                alt={social.label}
                className="h-8 w-8 object-contain"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}