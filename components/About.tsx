export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black px-6 md:px-20 py-16 scroll-mt-28"
    >

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* TEXTO  TÍTULO */}
          <div className="w-full md:w-1/2 flex flex-col">

            <h2 className="text-4xl md:text-5xl title-fat mb-8 md:ml-6">
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

            <img
              src="/about.png"
              alt="about"
              className="
                w-full
                max-w-[800px]  
                h-auto
                object-cover
              "
            />

          </div>

        </div>

        

      </div>
    </section>
  );
}