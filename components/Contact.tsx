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
  {href: "mailto:lucugo.08@gmail.com", icon: "/email.svg", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contactos" className="w-full bg-white">
      <div className="px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
            Contactos
          </h2>

          <p className="max-w-xl text-base md:text-lg text-black leading-relaxed">
            Aqui puedes encontrar los medios de contacto de las personas que participaron en los proyectos, por si quieres comunicarte, hacer alguna consulta o conocer mas sobre su trabajo.
          </p>
        </div>
      </div>

      <div className="bg-[#EC0202] px-4 md:px-8 py-20 relative text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
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

        <div className="absolute bottom-24 right-10 hidden md:block">
          <div className="w-44 h-44 bg-white/20 rounded-full"></div>
        </div>

        <div className="mt-20 flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-white"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="flex-1 h-[2px] bg-white"></div>
        </div>

        <p className="text-center text-sm mt-6">
          Gracias por llegar hasta aqui, cada proyecto es una parte de lo que soy y de lo que sigo construyendo.
        </p>

        <div className="flex justify-center gap-6 mt-6">
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
