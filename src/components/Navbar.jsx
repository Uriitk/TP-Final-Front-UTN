import '../styles/Navbar.css'

// Links del menú de navegación: agregar una sección nueva es sumar un objeto acá
const links = [
  { nombre: 'Inicio', url: '/' },
  { nombre: 'Vehículos', url: '/vehiculos' },
  { nombre: 'Galería', url: '/galeria' },
  { nombre: 'Contacto', url: '/contacto' },
]

// Barra de navegación fija en la parte superior de todas las páginas
export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          <i className="fa-solid fa-car-side"></i>
          DC Racing
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.nombre}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
