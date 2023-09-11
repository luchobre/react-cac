import { useState, useEffect } from "react";
import "../styles/useStateReloj.css";

const UseStateReloj = () => {
  const [time, setTime] = useState(new Date()); //Hago el use state con la hora actual estática como parametro

  const handleTime = () => {
    //creo el manejador del tiempo para actualizar la hora con la hora actual
    setTime(new Date());
  };

  useEffect(() => {
    const intervalo = setInterval(handleTime, [1000]); //creo un use effect con un intervalo para que se actualice el estado cada vez que pasa 1 segundo
    return () => {
      clearInterval(intervalo); //limpio el efecto del intervalo
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, 0);
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);

  //******************************CRONOMETRO************************************* */

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
              setMinutos(minutos + 1);
            } else {
              setMinutos(0);

              if (horas < 24) {
                setHoras(horas + 1);
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

  const mili = miliseg.toString().padStart(3, 0);
  const seg = segundos.toString().padStart(2, 0);
  const min = minutos.toString().padStart(2, 0);
  const hor = horas.toString().padStart(2, 0);

  return (
    <>
      <div className="container">
        <div className="casio-f91w">
          <div className="top bracelet">
            <div className="first band"></div>
            <div className="second band"></div>
          </div>
          <div className="core-watch-container">
            <div className="buttons-container">
              <div className="left top button-notch"></div>
              <div className="button"></div>
              <div className="space"></div>
              <div className="left bottom button-notch"></div>
              <div className="button"></div>
            </div>
            <div className="core-watch">
              <div className="crystal-screen">
                <div className="color-border">
                  <div className="lcd-screen">
                    <div className="top">
                      <div className="brand text-white">CASIO</div>
                      <div className="model text-yellow font-cursive">
                        F-91W
                      </div>
                    </div>
                    <div className="center">
                      <div className="inner-top">
                        <div className="action text-white font-small">
                          <span className="left arrow">◀</span> LIGHT
                        </div>
                        <div className="chronograph text-yellow font-small">
                          ALARM CHRONOGRAPH
                        </div>
                      </div>
                      <div className="inner-center">
                        <div className="lcd-top">
                          <span className="timemode">24H</span>
                          <span className="weekday mini">--</span>
                          <span className="day mini">--</span>
                        </div>
                        <div className="lcd-bottom">
                          <span className="time">
                            <span className="hours">{hours}</span>
                            <span className="sep">:</span>
                            <span className="minutes">{minutes}</span>
                          </span>
                          <span className="seconds mini">{seconds}</span>
                        </div>
                      </div>
                      <div className="inner-bottom">
                        <div className="mode text-white font-small">
                          <span className="left arrow">◀</span> MODE
                        </div>
                        <div className="alarm text-white font-small">
                          ALARM ON-OFF/24HR{" "}
                          <span className="right arrow">▶</span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="water text-white font-medium">WATER</div>
                      <div className="wr-box text-red">
                        <span>
                          W<span className="r">R</span>
                        </span>
                      </div>
                      <div className="resist text-white font-medium">
                        RESIST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-container">
              <div className="right top button-notch"></div>
              <div className="space"></div>
              <div className="right bottom button-notch"></div>
              <div className="button"></div>
            </div>
          </div>
          <div className="bottom bracelet">
            <div className="first band"></div>
            <div className="second band"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="casio-f91w">
          <div className="top bracelet">
            <div className="first band"></div>
            <div className="second band"></div>
          </div>
          <div className="core-watch-container">
            <div className="buttons-container">
              <div className="left top button-notch"></div>
              <div className="button" onClick={iniciar}></div>
              <div className="space"></div>
              <div className="left bottom button-notch"></div>
              <div className="button" onClick={reiniciar}></div>
            </div>
            <div className="core-watch">
              <div className="crystal-screen">
                <div className="color-border">
                  <div className="lcd-screen">
                    <div className="top">
                      <div className="brand text-white">CASIO</div>
                      <div className="model text-yellow font-cursive">
                        F-91W
                      </div>
                    </div>
                    <div className="center">
                      <div className="inner-top">
                        <div className="action text-white font-small">
                          <span className="left arrow">◀</span> LIGHT
                        </div>
                        <div className="chronograph text-yellow font-small">
                          ALARM CHRONOGRAPH
                        </div>
                      </div>
                      <div className="inner-center">
                        <div className="lcd-top">
                          <span className="timemode">24H</span>
                          <span className="weekday mini">--</span>
                          <span className="day mini">--</span>
                        </div>
                        <div className="lcd-bottom">
                          <span className="time">
                            <span className="hours">{hor}</span>
                            <span className="sep">:</span>
                            <span className="minutes">{min}</span>
                            <span className="sep">:</span>
                            <span className="seconds">{seg}</span>
                            <span className="seconds mini">{mili}</span>
                          </span>
                        </div>
                      </div>
                      <div className="inner-bottom">
                        <div className="mode text-white font-small">
                          <span className="left arrow">◀</span> MODE
                        </div>
                        <div className="alarm text-white font-small">
                          ALARM ON-OFF/24HR{" "}
                          <span className="right arrow">▶</span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="water text-white font-medium">WATER</div>
                      <div className="wr-box text-red">
                        <span>
                          W<span className="r">R</span>
                        </span>
                      </div>
                      <div className="resist text-white font-medium">
                        RESIST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-container">
              <div className="right top button-notch"></div>
              <div className="space"></div>
              <div className="right bottom button-notch"></div>
              <div className="button" onClick={pausar}></div>
            </div>
          </div>
          <div className="bottom bracelet">
            <div className="first band"></div>
            <div className="second band"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseStateReloj;
