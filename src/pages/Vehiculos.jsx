import { Card } from '../components/Card'
import { vehiculos } from '../data/vehiculos'

export const Vehiculos = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Todos nuestros vehículos</h2>
        <div className="cards">
          {vehiculos.map((auto) => (
            <Card
              key={auto.id}
              {...auto}
              textoBoton="Consultar"
              link="/contacto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
