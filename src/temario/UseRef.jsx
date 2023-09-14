import { useRef } from 'react';

const UseRef = () => {


    //EJEMPLO1 
/*
const prueba = useRef(1)

function handlePrueba () {
    prueba.current = prueba.current + 1
    if (prueba.current > 5) {
        console.log(`Apretaste ${prueba.current} veces`)
    }
}

  
  
    return (
        <button onClick={handlePrueba}>
            Apretame {prueba.current}
        </button>
  )
}
*/
    //EJEMPLO 2
/*
const inputFocus = useRef(null);

function handleFocus () {
    inputFocus.current.focus();
}



return (
    <div>
        <input type="text" ref={inputFocus}/>
        <button onClick={handleFocus}>Apretame</button>
    </div>
)
*/


}
export default UseRef