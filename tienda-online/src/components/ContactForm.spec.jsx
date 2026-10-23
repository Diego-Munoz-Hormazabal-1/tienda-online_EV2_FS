import { act } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from './ContactForm'

globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('ContactForm', () => {
  let contenedor, root

  beforeEach(() => {
    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)
    root = createRoot(contenedor)
    act(() => root.render(<ContactForm />))
  })

  afterEach(() => {
    act(() => root.unmount())
    contenedor.remove()
  })

  it('no muestra errores al cargar el formulario', () => {
    expect(contenedor.querySelectorAll('.text-danger').length).toBe(0)
  })

  it('muestra 3 errores al enviar el formulario vacío', () => {
    act(() => contenedor.querySelector('button[type="submit"]').click())
    expect(contenedor.querySelectorAll('.text-danger').length).toBe(3)
  })
})