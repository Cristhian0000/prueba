import React, { useEffect, useState } from "react";

const ListaPuntuacion = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const ranking = JSON.parse(localStorage.getItem("ranking"));
    setLista(ranking.sort((a, b) => b.puntaje - a.puntaje));
  }, []);
  return (
    <>
      {
        lista.map((item, i) => (
        <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{item.nombre}</td>
      <td>{item.simbolo}</td>
      <td>{item.puntaje}</td>
    </tr>))
        }
    </>
  );
};

export default ListaPuntuacion;
