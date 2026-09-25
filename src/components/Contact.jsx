import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/Contact.css'

const formularioVacio = {
  nombre: '',
  email: '',
  telefono: '',
  comentarios: '',
  motivo: 'comprar',
  contacto: '',
}

const opcionesContacto = ['WhatsApp', 'Llamada', 'Email']

export const Contact = () => {
  const { valores, handleChange, resetForm } = useForm(formularioVacio)
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    // Evita que el navegador recargue la pagina al enviar
    e.preventDefault()
    console.log('Formulario enviado:', valores)
    setEnviado(true)
    resetForm()
  }

  const handleReset = (e) => {
    e.preventDefault()
    console.log('Formulario reseteado')
    setEnviado(false)
    resetForm()
  }

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2>Contactanos</h2>
        <p className="contact-text">
          ¿Encontraste un vehículo que te interesa?
          Completá el formulario y uno de nuestros asesores se comunicará con vos.
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={valores.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={valores.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={valores.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows="5"
              value={valores.comentarios}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo de contacto</label>
            <select
              id="motivo"
              name="motivo"
              value={valores.motivo}
              onChange={handleChange}
              required
            >
              <option value="comprar">Comprar vehículo</option>
              <option value="vender">Vender vehículo</option>
              <option value="solicitar">Solicitar financiación</option>
            </select>
          </div>

          <fieldset>
            <legend>¿Cómo preferís que nos comuniquemos?</legend>
            {opcionesContacto.map((opcion) => (
              <label key={opcion}>
                <input
                  type="radio"
                  name="contacto"
                  value={opcion}
                  checked={valores.contacto === opcion}
                  onChange={handleChange}
                  required
                />
                {opcion}
              </label>
            ))}
          </fieldset>

          <div className="form-buttons">
            <button type="submit" className="btn">Enviar</button>
            <button type="reset" className="btn btn-secondary">Limpiar</button>
          </div>

          {enviado && (
            <p className="form-mensaje">
              ¡Gracias! Recibimos tu consulta, te vamos a contactar a la brevedad.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
