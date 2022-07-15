import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [estado, actualizarEstado] = useState('Jesus')
  console.log({estado}) 
  return (
    <div>
      <h1>Hola Mundos!</h1>
      <Link href= '/products/create'>Crear Producto</Link><br></br>
      <Link href="/contactos/listado">Listado Contacto</Link>
    </div>
  )
}
