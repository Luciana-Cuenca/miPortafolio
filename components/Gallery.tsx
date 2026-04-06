'use client';

export default function Gallery() {
  return (
    <section id="galeria" className="gallery-section">

      <div className="gallery-wrapper">

        {/* 🔥 TEXTO CENTRADO */}
        <div className="skills-card gallery-text-card">
          <div className="skills-card-header">
            <span className="skills-card-title">Galeria</span>
            <button className="skills-close-btn">✕</button>
          </div>

          <div className="skills-content">
            <p className="gallery-text">
              Un espacio donde comparto parte de mi proceso creativo a través de
              ilustraciones y exploraciones visuales, reflejando mi estilo y forma de
              expresar ideas.
            </p>
          </div>
        </div>

        {/* 🔥 GRID DESORDENADO */}
        <div className="gallery-grid">

          <div className="gallery-item big"></div>
          <div className="gallery-item tall"></div>
          <div className="gallery-item medium"></div>

          <div className="gallery-item medium"></div>
          <div className="gallery-item big"></div>

          <div className="gallery-item tall"></div>
          <div className="gallery-item medium"></div>

        </div>

      </div>

    </section>
  );
}