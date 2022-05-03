import React from "react";
import Cuadrado from "./Cuadrado";
const Tablero = ({ movimientos, onClick }) => {
  return (
    <div className="tablero">
      {movimientos.map((cuadrado, i) => (
        <Cuadrado key={i} value={cuadrado} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Tablero;

