import { calcularTotal } from '../utils/carrito'

function Cart({ carrito, onEliminar }) {
  if (carrito.length === 0) return <p>Tu carrito está vacío</p>

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th></th></tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => onEliminar(item.id)}>
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${calcularTotal(carrito).toLocaleString('es-CL')}</h4>
    </div>
  )
}

export default Cart