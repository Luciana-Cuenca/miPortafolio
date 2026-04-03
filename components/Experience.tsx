export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-white px-6 md:px-16 xl:px-24 py-16"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* IZQUIERDA */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* TÍTULO */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
            Experiencia
          </h2>

          {/* IMAGEN */}
          <div className="w-full h-56 sm:h-64 md:h-80 xl:h-[420px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold text-sm md:text-base">
              Espacio para imagen
            </span>
          </div>
        </div>

        {/* DERECHA */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-18">

          {/* ACADÉMICA */}
          <div className="flex flex-col gap-10">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-black">
              Académica
            </h3>

            <div className="flex flex-col gap-10 text-black">
              <div>
                <p className="font-semibold text-sm gap-10 md:text-base">
                  Bachiller Académico - Colegio Bethlemitas Pasto
                </p>
                <p className="text-xs md:text-sm gap-10 text-gray-700">
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
    </section>
  );
}