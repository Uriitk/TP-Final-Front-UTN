import { Link } from 'react-router-dom'
import heroImg from '../assets/img/hero.jpg'
import '../styles/Hero.css'

/* El fondo va en linea porque la imagen se importa desde JS */
const fondo = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${heroImg})`,
}

export const Hero = () => {
  return (
    <section className="hero" id="inicio" style={fondo}>
      <div className="hero-content">
        <h1>DC Racing</h1>
        <p className="hero-subtitle">Encontrá el vehículo de tus sueños</p>
        <p className="hero-description">
          Concesionaria especializada en vehículos nuevos y usados,
          con financiación, garantía y atención personalizada.
        </p>
        <Link to="/vehiculos" className="btn">
          Ver vehículos <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}
