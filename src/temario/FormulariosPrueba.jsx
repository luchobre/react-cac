import { useState } from 'react';

const FormulariosPrueba = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  

function handleInputValue (e) {
  if(inputValue.length < 4){
    setInputValue(e.target.value);
  } else {
    setInputValue1(e.target.value)
  }
}


  return (
    <div>
      <input type="text" onChange={handleInputValue} />
      <p>{inputValue}</p>
      <p>{inputValue1}</p>
    </div>
  )
}





export default FormulariosPrueba