import React, { useState } from "react";


const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleIncrement = () => {
    setContador(contador + 1)
    console.log("mas")
  }
  const handleDecrement = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{contador}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Contador;
