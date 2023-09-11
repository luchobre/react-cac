import { useState } from "react";

const UseStateTarea1 = () => {
  const alumnos = [
    {
      nombre: "Luciano",
      edad: 25,
    },
    {
      nombre: "Matias",
      edad: 28,
    },
    {
      nombre: "Roberto",
      edad: 35,
    },
    {
      nombre: "Pedro",
      edad: 41,
    },
  ];

  const [array, setArray] = useState(0);

  function handleArrayInc() {
    if (array <= (alumnos.length) - 2) {
        setArray(array + 1);
    }
  }
  function handleArrayDec() {
      if (array >= 1) {
        setArray(array - 1);
    }
  }

  return (
    <div>
      <h1>Grupo</h1>
      <button onClick={handleArrayInc}>→</button>
      <div>{alumnos[array].nombre}</div>
      <div>{alumnos[array].edad}</div>
      <button onClick={handleArrayDec}>←</button>
    </div>
  );
};

export default UseStateTarea1;
