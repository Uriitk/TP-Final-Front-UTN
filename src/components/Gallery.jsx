import '../styles/Gallery.css'

/* Recibe el titulo de la seccion y un array de imagenes con src y alt */
export const Gallery = ({ titulo, imagenes }) => {
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2>{titulo}</h2>
        <div className="gallery-grid">
          {imagenes.map((imagen) => (
            <img
              key={imagen.id}
              className="gallery-item"
              src={imagen.src}
              alt={imagen.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
