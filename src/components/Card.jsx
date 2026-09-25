import { Link } from 'react-router-dom'

export const Card = ({ badge, imagen, titulo, descripcion, textoBoton, link }) => {
  return (
    <article className="card">
      <div className="card-image">
        <span className="card-badge">{badge}</span>
        <img src={imagen} alt={titulo} />
      </div>
      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to={link} className="btn">
          {textoBoton}
        </Link>
      </div>
    </article>
  )
}
