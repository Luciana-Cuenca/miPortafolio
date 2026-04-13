export default function SeparatorTriangle() {
  return (
    <div className="separator-triangle w-full h-12 bg-white flex justify-center">
      <div className="relative">

        {/* BORDE NEGRO */}
        <div
          className="
            absolute top-0 left-1
            w-0 h-0
            border-l-[32px] md:border-l-[52px]
            border-r-[32px] md:border-r-[52px]
            border-t-[32px] md:border-t-[52px]
            border-l-transparent border-r-transparent
            border-t-black
          "
        />

        {/* TRIÁNGULO ROJO */}
        <div
          className="
            relative
            w-0 h-0
            border-l-[30px] md:border-l-[50px]
            border-r-[30px] md:border-r-[50px]
            border-t-[30px] md:border-t-[50px]
            border-l-transparent border-r-transparent
            border-t-[#EC0202]
          "
        />

      </div>
    </div>
  );
}
