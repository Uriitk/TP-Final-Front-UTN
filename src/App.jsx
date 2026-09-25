import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Vehiculos } from './pages/Vehiculos'
import { Galeria } from './pages/Galeria'
import { Contacto } from './pages/Contacto'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Todas las paginas van adentro del Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
