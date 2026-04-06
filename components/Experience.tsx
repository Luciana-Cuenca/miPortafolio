export default function Experience() {
  return (
    <section
      id="experiencia"
      className="w-full bg-white px-6 md:px-16 xl:px-24 py-16"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* IZQUIERDA */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
            Experiencia
          </h2>

          <div className="w-full h-56 sm:h-64 md:h-80 xl:h-[420px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold text-sm md:text-base">
              Espacio para imagen
            </span>
          </div>
        </div>

        {/* DERECHA */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-16">

          {/* ACADÉMICA */}
          <div className="flex flex-col gap-10">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-black">
              Académica
            </h3>

            <div className="flex flex-col gap-10 text-black">
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Bachiller Académico - Colegio Bethlemitas Pasto
                </p>
                <p className="text-xs md:text-sm text-gray-700">
                  Graduada el 24 de junio de 2023
                </p>
              </div>

              <div>
                <p className="font-semibold text-sm md:text-base">
                  Ingeniería de Software - Universidad Cooperativa De Colombia Campus Pasto
                </p>
                <p className="text-xs md:text-sm text-gray-700">
                  Febrero 2024 - Actualidad
                </p>
              </div>
            </div>
          </div>

          {/* PROFESIONAL */}
          <div className="flex flex-col gap-4">
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

      {/*  TESTIMONIOS */}
      <div className="mt-24 w-full bg-white py-16 px-4 md:px-10">

        {/* TÍTULO */}
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-12">
          Testimonios
        </h2>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">

          {[1, 2, 3].map((i) => (
            <div key={i} className="relative">

              {/* CUADRO */}
              <div className="w-72 h-64 md:w-80 md:h-72 bg-white border-[5px] border-black p-6 flex flex-col justify-start">

                <p className="font-bold text-lg mb-4">nombre</p>

                <p className="text-base text-black">
                  Aquí va el texto del testimonio.
                  <br />
                  Texto de ejemplo.
                </p>
              </div>

              {/* PICO */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-black"></div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-[20px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-white"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}