import React from "react";

const Cuadrado = ({ value, onClick }) => {
  return <button className="cuadrado" onClick={onClick}>{value? value.simbolo : ""}</button>;
};

export default Cuadrado;
