import React from "react";
import Titulo from "./Titulo";
import { useNavigate } from "react-router-dom";


const ModosJuego = () => {
  const navigate = useNavigate();


  
  const redireccionar = (modo) => {
    navigate(`/inicio?type_mode=${modo}`, { replace: true })
    
  };

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Titulo />
      <div className="col-lg-6 mx-auto">
        <div className="d-sm-flex justify-content-sm-center mt-3">
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() => redireccionar("multijugador")}
          >
            Multijugador{" "}
          </button>
        </div>
        <div className="d-sm-flex justify-content-sm-center mt-3">
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() => redireccionar("un_jugador")}
          >
            {" "}
            Jugador vs PC{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModosJuego;
