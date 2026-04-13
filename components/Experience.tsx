export default function Experience() {
  return (
    <section
      id="experiencia"
      className="w-full bg-white px-4 md:px-8 py-16"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              Experiencia
            </h2>

            <div className="w-full h-72 sm:h-80 md:h-[28rem] xl:h-[34rem] flex items-center justify-center">
              <img
                src="/about.png"
                alt="experiencia"
                className="w-full max-w-[900px] h-full object-contain scale-x-[-1] -translate-x-4 md:-translate-x-8"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-10">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-black">
                Academica
              </h3>

              <div className="flex flex-col gap-10 text-black">
                <div>
                  <p className="font-semibold text-sm md:text-base">
                    Bachiller Academico - Colegio Bethlemitas Pasto
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Graduada el 24 de junio de 2023
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-sm md:text-base">
                    Ingenieria de Software - Universidad Cooperativa De Colombia Campus Pasto
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Febrero 2024 - Actualidad
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-black">
                Profesional
              </h3>

              <div className="flex flex-col gap-3 text-black">
                <p className="font-semibold text-sm md:text-base">
                  Desarrolladora de software y gestora de proyectos - Universidad Cooperativa De Colombia Campus Pasto
                </p>

                <p className="text-xs md:text-sm text-gray-700">
                  Febrero 2026 - Actualidad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIOS */}
        <div className="testimonials-section mt-24 w-full bg-white py-16">
          <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-12">
            Testimonios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-stretch">

            {/* TESTIMONIO 1 */}
            <div className="relative">
              <div className="testimonial-card w-full max-w-sm h-72 md:h-80 xl:h-[22rem] bg-white border-[5px] border-black p-8 flex flex-col justify-start overflow-hidden">
                <p className="font-bold text-lg md:text-xl mb-5 break-words">
                  Oscar Andrés Osorio
                </p>

                <p className="text-sm md:text-lg text-black leading-relaxed break-words">
                  Destaca mucho su forma de pensar y proponer ideas. Siempre encuentra maneras de mejorar lo que ya está hecho, aportando soluciones que realmente hacen la diferencia en el resultado final.
                </p>
              </div>

              <div className="testimonial-pointer-outer absolute left-1/2 -translate-x-1/2 -bottom-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-black"></div>

              <div className="testimonial-pointer-inner absolute left-1/2 -translate-x-1/2 -bottom-[20px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-white"></div>
            </div>

            {/* TESTIMONIO 2 */}
            <div className="relative">
              <div className="testimonial-card w-full max-w-sm h-72 md:h-80 xl:h-[22rem] bg-white border-[5px] border-black p-8 flex flex-col justify-start overflow-hidden">
                <p className="font-bold text-lg md:text-xl mb-5 break-words">
                  Daniel Fernando Arteaga
                </p>

                <p className="text-sm md:text-lg text-black leading-relaxed break-words">
                  Ha sido una experiencia muy positiva compartir proyectos con ella. Tiene una muy buena capacidad para entender lo que se necesita y llevarlo a resultados claros, bien pensados y bien ejecutados.
                </p>
              </div>

              <div className="testimonial-pointer-outer absolute left-1/2 -translate-x-1/2 -bottom-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-black"></div>

              <div className="testimonial-pointer-inner absolute left-1/2 -translate-x-1/2 -bottom-[20px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-white"></div>
            </div>

            {/* TESTIMONIO 3 */}
            <div className="relative">
              <div className="testimonial-card w-full max-w-sm h-72 md:h-80 xl:h-[22rem] bg-white border-[5px] border-black p-8 flex flex-col justify-start overflow-hidden">
                <p className="font-bold text-lg md:text-xl mb-5 break-words">
                  Luis Carlos Revelo
                </p>

                <p className="text-sm md:text-lg text-black leading-relaxed break-words">
                  Se caracteriza por su constancia y su forma de trabajar tan organizada. Sabe adaptarse a diferentes situaciones y siempre mantiene un buen nivel en lo que hace.
                </p>
              </div>

              <div className="testimonial-pointer-outer absolute left-1/2 -translate-x-1/2 -bottom-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-black"></div>

              <div className="testimonial-pointer-inner absolute left-1/2 -translate-x-1/2 -bottom-[20px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-white"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}