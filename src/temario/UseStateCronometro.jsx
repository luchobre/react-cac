// import { useState, useEffect } from "react";
// const UseStateCronometro = () => {
//   const [cronometro, setCronometro] = useState(0);
//   const [pausado, setPausado] = useState(false);

//   useEffect(() => {
//     let intervalo;

//     if (!pausado) {
//       intervalo = setInterval(() => {
//         setCronometro((prevCronometro) => prevCronometro + 1);
//       }, 1);
//       setTimeout(() => {
//         clearInterval(intervalo);
//         console.log("Llegué a 1000");
//       }, 1000);
//     } else {
//       clearInterval(intervalo); // Si está pausado, detener el intervalo
//     }

//     return () => {
//       clearInterval(intervalo);
//     };
//   }, [pausado]);

//   const iniciar = () => {
//     setPausado(false);
//   };

//   const reiniciar = () => {
//     setCronometro(0);
//   };

//   const pausar = () => {
//     setPausado(true);
//   };

//   return (
//     <div>
//       <p>{cronometro}</p>
//       <button onClick={iniciar}>Iniciar</button>
//       <button onClick={reiniciar}>Reiniciar</button>
//       <button onClick={pausar}>Pausar</button>
//     </div>
//   );
// };

// export default UseStateCronometro;

import { useState, useEffect } from "react";

const UseStateCronometro = () => {
  const [miliseg, setMiliseg] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (corriendo) {
      intervalo = setInterval(() => {
        if (miliseg < 999) {
          setMiliseg(miliseg + 1);
        } else {
          setMiliseg(0);

          if (segundos < 59) {
            setSegundos(segundos + 1);
          } else {
            setSegundos(0);

            if (minutos < 59) {
              setMinutos ( minutos + 1 );
            } else {
              setMinutos(0);

              if (horas < 24 ) {
                setHoras ( horas + 1);
              } else {
                setHoras(0);
              }
            }
            }
        }
      }, 1);
    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [miliseg, segundos, minutos, horas, corriendo]);

  const iniciar = () => {
    setCorriendo(true);
  };
  const reiniciar = () => {
    setMiliseg(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setCorriendo(false);
  };
  const pausar = () => {
    setCorriendo(false);
  };

  const mili = miliseg.toString().padStart(3,0);
  const seg = segundos.toString().padStart(2,0);
  const min = minutos.toString().padStart(2,0);
  const hor = horas.toString().padStart(2,0);
  
  return (
    <div>
      <p>{mili}</p>
      <p>{seg}</p>
      <p>{min}</p>
      <p>{hor}</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={pausar}>Pausar</button>
    </div>
  );
};

export default UseStateCronometro;
