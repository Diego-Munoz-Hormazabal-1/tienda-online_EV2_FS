import { validarEmail, validarFormulario } from './validaciones'

describe('validaciones', () => {
  it('acepta un correo válido', () => {
    expect(validarEmail('ana@correo.cl')).toBeTrue()
  })

  it('rechaza un correo sin arroba', () => {
    expect(validarEmail('anacorreo.cl')).toBeFalse()
  })

  it('devuelve 3 errores si el formulario está vacío', () => {
    const errores = validarFormulario({ nombre: '', email: '', mensaje: '' })
    expect(Object.keys(errores).length).toBe(3)
  })
})