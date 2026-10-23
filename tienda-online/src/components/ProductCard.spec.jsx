import { act } from 'react'
import { createRoot } from 'react-dom/client'
import ProductCard from './ProductCard'

globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('ProductCard', () => {
  let contenedor, root
  const producto = { id: 1, nombre: 'Polera Negra', precio: 9990 }

  beforeEach(() => {
    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)
    root = createRoot(contenedor)
  })

  afterEach(() => {
    act(() => root.unmount())
    contenedor.remove()
  })

  it('muestra el nombre del producto', () => {
    act(() => root.render(<ProductCard producto={producto} onAgregar={() => {}} />))
    expect(contenedor.querySelector('.card-title').textContent).toBe('Polera Negra')
  })

  it('llama a onAgregar al hacer click en el botón', () => {
    const espia = jasmine.createSpy('onAgregar')
    act(() => root.render(<ProductCard producto={producto} onAgregar={espia} />))
    act(() => contenedor.querySelector('button').click())
    expect(espia).toHaveBeenCalledWith(producto)
  })
})