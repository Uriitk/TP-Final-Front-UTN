import { Hero } from '../components/Hero'
import { Card } from '../components/Card'
import { Gallery } from '../components/Gallery'
import { vehiculos } from '../data/vehiculos'
import { imagenesGaleria } from '../data/galeria'

/* En el inicio solo se muestran los primeros 3 autos */
const destacados = vehiculos.slice(0, 3)

export const Home = () => {
  return (
    <>
      <Hero />

      {/* Sobre Nosotros */}
      <section className="about">
        <div className="container">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>DC Racing</strong> nos especializamos en la venta de
            vehículos nacionales e importados. Nuestro objetivo es brindar
            una experiencia transparente y segura, ofreciendo unidades
            seleccionadas, asesoramiento personalizado y distintas opciones
            de financiación para ayudarte a encontrar el vehículo ideal.
          </p>
        </div>
      </section>

      {/* Vehículos Destacados */}
      <section className="services">
        <div className="container">
          <h2>Vehículos destacados</h2>
          <div className="cards">
            {destacados.map((auto) => (
              <Card
                key={auto.id}
                {...auto}
                textoBoton="Ver vehículo"
                link="/vehiculos"
              />
            ))}
          </div>
        </div>
      </section>

      <Gallery titulo="Nuestra Galería" imagenes={imagenesGaleria} />
    </>
  )
}
