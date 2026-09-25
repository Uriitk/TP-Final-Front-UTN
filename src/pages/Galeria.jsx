import { Gallery } from '../components/Gallery'
import { imagenesGaleria } from '../data/galeria'

export const Galeria = () => {
  return (
    <Gallery titulo="Nuestra Galería" imagenes={imagenesGaleria} />
  )
}
