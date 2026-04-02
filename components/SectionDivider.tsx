export default function SectionDivider() {
  return (
    <div className="w-full bg-white flex items-center justify-center px-6 md:px-10 py-1">

      {/* línea izquierda */}
      <div className="flex-1 h-[3px] bg-[#EC0202] mx-4"></div>

      {/* icono centro */}
      <img
        src="/icon.svg"
        alt="icon"
        className="w-7 h-7 md:w-8 md:h-8 object-contain"
      />

      {/* línea derecha */}
      <div className="flex-1 h-[3px] bg-[#EC0202] mx-4"></div>

    </div>
  );
}