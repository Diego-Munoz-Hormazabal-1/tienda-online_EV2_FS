import Cart from '../components/Cart'

function CarritoPage({ carrito, onEliminar }) {
  return (
    <div className="container my-4">
      <h2>Tu carrito</h2>
      <Cart carrito={carrito} onEliminar={onEliminar} />
    </div>
  )
}

export default CarritoPage