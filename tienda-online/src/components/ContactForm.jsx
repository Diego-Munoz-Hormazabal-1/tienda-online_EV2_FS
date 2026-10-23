import { useState } from 'react'
import { validarFormulario } from '../utils/validaciones'

function ContactForm() {
  const [datos, setDatos] = useState({ nombre: '', email: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function manejarCambio(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const nuevosErrores = validarFormulario(datos)
    setErrores(nuevosErrores)
    setEnviado(Object.keys(nuevosErrores).length === 0)
  }

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input className="form-control" name="nombre" value={datos.nombre} onChange={manejarCambio} />
        {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
      </div>
      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input className="form-control" name="email" value={datos.email} onChange={manejarCambio} />
        {errores.email && <small className="text-danger">{errores.email}</small>}
      </div>
      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea className="form-control" name="mensaje" value={datos.mensaje} onChange={manejarCambio} />
        {errores.mensaje && <small className="text-danger">{errores.mensaje}</small>}
      </div>
      <button type="submit" className="btn btn-success">Enviar</button>
      {enviado && <p className="text-success mt-2">¡Mensaje enviado!</p>}
    </form>
  )
}

export default ContactForm