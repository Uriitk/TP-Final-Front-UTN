import { useState } from 'react'

/* Hook para manejar cualquier formulario controlado.
   Recibe los valores iniciales y devuelve los valores actuales,
   la funcion para los onChange y otra para limpiar todo */
export const useForm = (valoresIniciales) => {
  const [valores, setValores] = useState(valoresIniciales)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Campo "${name}" cambió a:`, value)

    // copio lo que ya estaba y piso solo el campo que cambió
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  const resetForm = () => {
    setValores(valoresIniciales)
  }

  return { valores, handleChange, resetForm }
}
