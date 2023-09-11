import React, { useState } from "react";
import '../styles/contadorConInputs.css';

const Contador = () => {
  const [backgroundColor, setBackgroundColor] = useState()
  const [color, setColor] =useState("white")
  const [inputValue, setInputValue] = useState(0);
  const [contador, setContador] = useState(0);

  // const handleColor = () => {
  //   setColor('#242424')
  // }
  const handleTheme = () => {
    setBackgroundColor('#dbdbdb')
    setColor('#242424')
  }
  const handleThemeDark = () => {
    setBackgroundColor('#242424')
    setColor('white')
  }
  const handleIncrement = () => {
      setContador(contador + inputValue);
  };
  const handleDecrement = () => {
      setContador(contador - inputValue);
  };
  let handleReset = () => {
    setContador(0)
    setInputValue(0)
  }
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setInputValue(value);
  };

  return (
    <div className="container" style={{ backgroundColor, color }}>
      <div className="theme-container">
        <button onClick={handleTheme}>⭐</button>
        <button onClick={handleThemeDark}>🌑</button>
      </div>
      <div className="container-contador">
        <h2>CONTADOR</h2>
        <h3>¿De a cuánto queres sumar?</h3>
        <input
          className="contador-input"
          type="text"
          placeholder="¿De a cuanto queres sumar?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="contador-container">
          <button onClick={handleDecrement}>-</button>
          <h1>{contador}</h1>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="contador-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Contador;
