import productos from '../data/productos'
import ProductCard from '../components/ProductCard'

function Inicio({ onAgregar }) {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Productos</h2>
      <div className="row g-4">
        {productos.map((p) => (
          <div className="col-12 col-md-6 col-lg-4" key={p.id}>
            <ProductCard producto={p} onAgregar={onAgregar} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inicio