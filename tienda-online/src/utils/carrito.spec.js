import { agregarAlCarrito, calcularTotal } from './carrito'

describe('carrito', () => {
  const polera = { id: 1, nombre: 'Polera', precio: 10000 }

  it('agrega un producto nuevo con cantidad 1', () => {
    const resultado = agregarAlCarrito([], polera)
    expect(resultado.length).toBe(1)
    expect(resultado[0].cantidad).toBe(1)
  })

  it('suma 1 a la cantidad si el producto ya existe', () => {
    const carrito = [{ ...polera, cantidad: 1 }]
    const resultado = agregarAlCarrito(carrito, polera)
    expect(resultado[0].cantidad).toBe(2)
  })

  it('calcula el total correctamente', () => {
    const carrito = [{ ...polera, cantidad: 2 }, { id: 2, nombre: 'Otra', precio: 5000, cantidad: 1 }]
    expect(calcularTotal(carrito)).toBe(25000)
  })
})