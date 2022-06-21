import { useState } from 'react'

const initialState = {name:'', price: 0}

function Create() {
  const [product, setProduct] = useState(initialState)

  const handleChange = (e) => {
    const target = e.target
    const inputValue = e.target.value
    const inputName = e.target.name
    setProduct({
      ...product, [inputName]: inputValue,
    })
  }

  const handleClick = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/api/v1/products',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      setProduct(initialState)
      console.log('Producto Creado con Exito')})
    .catch((err) => {console.log({err})})
  }

  return (
    <>
    <div>
    <h1>Crear Nuevo Producto</h1>
    <form>
        <input type='text' name='name' value={product.name} onChange={handleChange}/>
        <input price='number' name='price' value={product.price} onChange={handleChange}/>
        <button onClick={handleClick}>Crear Producto</button>        
      </form>
    </div>
    <style jsx>
        {`
        form {
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin: 0 auto;
       }
       h1 {
        text-align: center;
       }
       input{
        margin-bottom: 0.5rem;
       }
       `}
    </style>
    </>
  )
}

export default Create