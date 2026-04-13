export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black px-4 md:px-8 py-16 scroll-mt-28"
    >

      <div className="w-full max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* TEXTO  TÍTULO */}
          <div className="w-full md:w-1/2 flex flex-col">

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-8">
              Sobre mí
            </h2>

            <div className="text-lg md:text-xl leading-relaxed space-y-6">

              <p className="text-2xl md:text-3xl font-semibold">
                Me gusta crear.
              </p>

              <p>
                A través del diseño y la programación, busco desarrollar proyectos donde las ideas cobren vida de forma visual e interactiva.
              </p>

              <p>
                Me interesa especialmente la combinación entre creatividad y desarrollo, explorando cómo construir experiencias que sean tanto atractivas como funcionales, cuidando cada detalle desde lo visual hasta lo técnico.
              </p>

              <p>
                Siempre estoy aprendiendo, experimentando y encontrando nuevas formas de mejorar y evolucionar en lo que hago.
              </p>

            </div>

          </div>

          {/* IMAGEN*/}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[900px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#EC0202] border-4 border-black"></div>
              <div className="relative h-72 md:h-[420px] overflow-hidden border-4 border-black bg-white">
                <img
                  src="/aboutimg.jpeg"
                  alt="Sobre mi"
                  className="w-full h-full object-cover object-[center_10%]"
                />
              </div>
            </div>
          </div>

        </div>

        

      </div>
    </section>
  );
}
