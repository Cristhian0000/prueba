import React, { useState } from "react";
import Tablero from "./Tablero";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  calculaPuntuacion,
  calcularGanador,
  calcularTiempo,
} from "../utilitarios/utilitarios";

const Juego = () => {
  const { contexto } = useContext(UserContext);
  const navigate = useNavigate();
  const [tablero, setTablero] = useState([Array(9).fill(null)]);
  const [movimiento, setMovimiento] = useState(0);
  const [turnoX, setTurnoX] = useState(true);
  const [ganador, setGanador] = useState(null);
  const [XuO, setXuO] = useState("X");
  const [tiempo, setTiempo] = useState(0);
  const [empate, setEmpate] = useState(false);
  const [mostrarTablero, setMostrarTablero] = useState(false);

  const handleClick = (i) => {
    const tiempoJugada = Date.now() - tiempo;
    const historialMovimientos = tablero.slice(0, movimiento + 1);
    const cuadrados = historialMovimientos[movimiento];
    if (ganador || (cuadrados[i] && cuadrados[i].simbolo)) return;
    cuadrados[i] = {
      simbolo: XuO,
      tiempo: tiempoJugada,
    };
    setTablero([...historialMovimientos, cuadrados]);
    setMovimiento(historialMovimientos.length);
    setXuO(!turnoX ? "X" : "O");
    setTurnoX(!turnoX);
  };

  const reiniciarPartida = () => {
    setTablero([Array(9).fill(null)]);
    setMovimiento(0);
    setTurnoX(true);
    setGanador(null);
    setXuO("X");
    setTiempo(0);
    setEmpate(false);
    setMostrarTablero(false);
  };

  useEffect(() => {
    const almacenaPuntajes = (simboloGanador) => {
      const nombreGanador =
      simboloGanador === "X" ? contexto.jugadorX : contexto.jugadorO;
      const tiempo = calcularTiempo(tablero[movimiento], simboloGanador);
      const puntaje = calculaPuntuacion(movimiento, tiempo);
      const ranking = JSON.parse(localStorage.getItem("ranking"));
      ranking.push({
        nombre: nombreGanador,
        simbolo: simboloGanador,
        puntaje: puntaje,
      });
      localStorage.setItem("ranking", JSON.stringify(ranking));
      alert(
        "El ganador es: " + nombreGanador + " su puntuacion fue: " + puntaje
      );
    };
    if (ganador) {
      almacenaPuntajes(ganador);
    }
  }, [ganador]);

  useEffect(() => {
    if (ganador === null && movimiento === 9) {
      alert("Empate");
      setEmpate(true);
    }
  }, [ganador, movimiento]);

  useEffect(() => {
    const jugadorGanador = calcularGanador(tablero[movimiento]);

    setGanador(jugadorGanador);
  }, [tablero, movimiento]);

  useEffect(() => {
    if (mostrarTablero === true) {
      setTiempo(Date.now());
    }
  }, [turnoX, mostrarTablero]);

  return (
    <div className="px-4 py-2 my-2 text-center">
      <h1 className="display-5 fw-bold text-white">Juego de Tres En Raya</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            name={contexto.jugadorX}
            type="button"
            className={turnoX ? "btn btn-success" : "btn btn-outline-success"}
            disabled
          >
            {contexto.jugadorX}
          </button>
          <button
            name={contexto.jugadorO}
            type="button"
            className={turnoX ? "btn btn-outline-success" : "btn btn-success"}
            disabled
          >
            {contexto.jugadorO}
          </button>
        </div>

        {/* {ganador && (
          <div>
            {" "}
            <h5 className="text-end text-white">Puntuacion: </h5>
            <h5 className="text-end text-white">ganador: {ganador}</h5>
          </div>
        )} */}
        <div>
          {mostrarTablero ? (
            <div className="mt-3">
              <Tablero
                movimientos={tablero[movimiento]}
                onClick={handleClick}
              />
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 my-5 me-sm-3 fw-bold"
              onClick={() => setMostrarTablero(!mostrarTablero)}
            >
              {" "}
              iniciar Partida
            </button>
          )}
        </div>
      </div>

      <div className="d-sm-flex justify-content-sm-center mt-3">
        {ganador && (
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() => navigate("/puntuacion", { replace: true })}
          >
            Ver Puntuacion
          </button>
        )}
        {empate && (
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() => reiniciarPartida()}
          >
            Desempatar
          </button>
        )}
      </div>
    </div>
  );
};

export default Juego;
