import React, { useState } from "react";
import Tablero from "./Tablero";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Juego = () => {
  const { contexto } = useContext(UserContext);
  const navigate = useNavigate();
  // Array(9).fill(null)
  const [tablero, setTablero] = useState({});
  const [movimiento, setMovimiento] = useState(0);
  const [turnoX, setTurnoX] = useState(true);
  const [ganador, setGanador] = useState(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [XuO,setXuO]=useState("X")
 const [tiempo,setTiempo]=useState(0)
const [mostrarTablero,setMostrarTablero]=useState(false)

  const calcularGanador = (jugadas) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        jugadas[a] &&
        jugadas[a] === jugadas[b] &&
        jugadas[a] === jugadas[c]
      ) {
        return jugadas[a];
      }
    }
    return null;
  };
  const calculaPuntuacionPorMovimientos = (movimiento) => {
    switch (movimiento) {
      case 5:
        return 10;
      case 6:
        return 8;

      case 7:
        return 5;

      case 8:
        return 3;

      default:
        return 0;
    }
  };
   
  const handleClick = (i) => {
    const tiempoJugada= Date.now-tiempo
    const historialMovimientos = tablero.slice(0, movimiento + 1);
    const cuadrados = historialMovimientos[movimiento];
    if (ganador ||cuadrados[i]) return;
    cuadrados[i] = XuO;
    setTablero([...historialMovimientos, cuadrados]);
    setMovimiento(historialMovimientos.length);
    setXuO(!turnoX?"X" : "O")
    setTurnoX(!turnoX);
    
  };
  useEffect(() => {
    const simboloGanador = calcularGanador(tablero[movimiento]);
    setGanador(simboloGanador);
    if (ganador) {
      const puntaje = calculaPuntuacionPorMovimientos(movimiento);
      setPuntuacion(puntaje);
      return alert(
        "El ganador es: " + ganador + " su puntuacion fue: " + puntaje
      );
    }
    const almacenaPuntajes=()=>{
      localStorage.setItem("puntaje",puntuacion)
    }
  }, [ganador, tablero, movimiento]);

  useEffect(() =>{
    if (mostrarTablero===true){
      setTiempo(Date.now)

    }
  },[mostrarTablero])
  return (
    <div className="px-4 py-2 my-2 text-center">
      <h1 className="display-5 fw-bold text-white">Juego de Tres En Raya</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input
            className="form-control"
            type="text"
            defaultValue={contexto.jugadorUno}
            disabled
          />
          <input
            className="form-control"
            type="text"
            defaultValue={contexto.jugadorDos}
            disabled
          />
        </div>
        <h5 className="text-end text-white">Puntuacion: {puntuacion}</h5>
        <h5 className="text-end text-white">ganador: {ganador}</h5>
        <div>
        {
          mostrarTablero? <div className="mt-3">
          <Tablero movimientos={tablero[movimiento]} onClick={handleClick} />
        </div>:<button onClick={()=>setMostrarTablero(!mostrarTablero)}> Empezar juego</button>
        }
        </div>
        
      </div>

      <div className="d-sm-flex justify-content-sm-center mt-3">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          onClick={() => navigate("/puntuacion", { replace: true })}
        >
          Ver Puntuacion
        </button>
      </div>
    </div>
  );
};

export default Juego;
