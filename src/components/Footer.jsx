import '../styles/Footer.css'

// Redes sociales: "icono" es la clase de FontAwesome de cada red
const redes = [
  { nombre: 'Instagram', url: 'https://instagram.com', icono: 'fa-instagram' },
  { nombre: 'Facebook', url: 'https://facebook.com', icono: 'fa-facebook' },
  { nombre: 'WhatsApp', url: 'https://whatsapp.com', icono: 'fa-whatsapp' },
]

// Pie de página con datos de la concesionaria, redes y copyright
export const Footer = () => {
  const anioActual = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-brand">
          <h3>DC Racing</h3>
          <p>Concesionaria especializada en vehículos nacionales e importados.</p>
          <p className="footer-location">
            <i className="fa-solid fa-location-dot"></i>
            Buenos Aires, Argentina
          </p>
        </div>

        <div className="footer-contact">
          <h4>Seguinos</h4>
          <div className="footer-social">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                aria-label={red.nombre}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands ${red.icono}`}></i>
              </a>
            ))}
          </div>
          <p className="footer-email">
            <i className="fa-solid fa-envelope"></i>
            info@dcracing.com
          </p>
        </div>
      </div>

      <p className="copyright container">
        © {anioActual} DC Racing - Todos los derechos reservados.
      </p>
    </footer>
  )
}
