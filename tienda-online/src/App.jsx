import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import CarritoPage from './pages/CarritoPage'
import Contacto from './pages/Contacto'
import { agregarAlCarrito, eliminarDelCarrito } from './utils/carrito'

function App() {
  const [carrito, setCarrito] = useState([])

  return (
    <>
      <Navbar cantidad={carrito.length} />
      <Routes>
        <Route path="/" element={<Inicio onAgregar={(p) => setCarrito(agregarAlCarrito(carrito, p))} />} />
        <Route path="/carrito" element={<CarritoPage carrito={carrito} onEliminar={(id) => setCarrito(eliminarDelCarrito(carrito, id))} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App