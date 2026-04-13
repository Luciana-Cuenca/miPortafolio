'use client';

import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/galeria/galeria1.jpeg",
    "/galeria/galeria2.jpeg", 
    "/galeria/galeria3.jpeg", 
    "/galeria/galeria4.jpeg",
    "/galeria/galeria5.jpeg", 
    "/galeria/galeria6.png",  
    "/galeria/galeria7.jpeg",  
  ];

  return (
    <section id="galeria" className="gallery-section py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4">

        {/* TEXTO */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
            Galeria
          </h2>

          <p className="max-w-xl text-base md:text-lg text-black leading-relaxed">
            Un espacio donde comparto parte de mi proceso creativo a través de
            ilustraciones y exploraciones visuales.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]">

          {images.map((src, i) => {
            const isTall = i === 1 || i === 4 || i === 5 || i === 6; 
            

            return (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className={`
                  relative overflow-hidden border-[4px] border-black cursor-pointer group bg-white
                  ${isTall ? "row-span-2" : ""}
                `}
              >
                <img
                  src={src}
                  alt={`galeria-${i}`}
                  className="w-full h-full object-cover 
                  transition-transform duration-500 ease-out
                  group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
              </div>
            );
          })}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full border-[6px] border-white shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}