// import { useState, useEffect } from "react";

// const UseStateCronometro = () => {
//   const [cronometro, setCronometro] = useState(0);
//   const [pausado, setPausado] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (!pausado) {
//       interval = setInterval(() => {
//         setCronometro((prevCronometro) => prevCronometro + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [pausado]);

//   const reset = () => {
//     setCronometro(0);
//     setPausado(false);
//   };

//   const pausa = () => {
//     setPausado(true);
//   };

//   return (
//     <div>
//       <p>{cronometro}</p>
//       <button onClick={reset}>Reset</button>
//       <button onClick={pausa}>Pausa</button>
//     </div>
//   );
// };

// export default UseStateCronometro;

import { useState, useEffect } from "react";

const UseStateCronometro = () => {

  const [cronometro, setCronometro] = useState(0);
  const [pausado, setPausado] = useState(false);
  // const [iniciado, setIniciado] = useState(false)
  

  useEffect(() => {
    let intervalo;
    if (!pausado) {
      intervalo = setInterval(() => {
        setCronometro((prevCronometro) => prevCronometro + 1)
      }, 1000);
    }
    return () => {
      clearInterval(intervalo)
    } 
  }, [pausado])

  const iniciar = () => {
    setPausado(false)
  }

  const reiniciar = () => {
    setCronometro(0)
  };

  const pausar = () => {
    setPausado(true)
  }


  return (
    <div>
     <p>{cronometro}</p>
     <button onClick={iniciar}>Iniciar</button>
     <button onClick={reiniciar}>Reiniciar</button>
     <button onClick={pausar}>Pausar</button>
    </div>
  )
}

export default UseStateCronometro