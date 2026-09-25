import '../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'

/* Secciones del menú */
const links = [
  { nombre: 'Inicio', url: '/' },
  { nombre: 'Vehículos', url: '/vehiculos' },
  { nombre: 'Galería', url: '/galeria' },
  { nombre: 'Contacto', url: '/contacto' },
]

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <i className="fa-solid fa-car-side"></i>
          DC Racing
        </Link>

        {/* NavLink para que marque en rojo la página en la que se encuentra el usuario */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.url}>
              <NavLink to={link.url}>{link.nombre}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
