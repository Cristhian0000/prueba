import React from "react";

const Cuadrado = ({ value, onClick }) => {
  const Style = value ? `squares${value}` : "squares";
  return <button className="square" onClick={onClick}>{value}</button>;
};

export default Cuadrado;
