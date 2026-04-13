export default function SectionDivider() {
  return (
    <div className="section-divider w-full bg-white px-4 md:px-8 py-1">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-center">
        <div className="flex-1 h-[3px] bg-[#EC0202] mx-4"></div>

        <img
          src="/icon.svg"
          alt="icon"
          className="w-7 h-7 md:w-8 md:h-8 object-contain"
        />

        <div className="flex-1 h-[3px] bg-[#EC0202] mx-4"></div>
      </div>
    </div>
  );
}
