import { useState } from "react"


const Prueba = () => {

    const [contador, setContador] = useState(0)

    function handleInc() {
        setContador((contador) => contador + 1)
    }
    function handleDec() {
        setContador(contador - 1)
    }

  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>{contador}</h1>
        <button onClick={handleDec}>-</button>

    </div>
  )
}

export default Prueba