import React from "react";
import { useNavigate } from "react-router-dom";
import CabeceraPuntuacion from "./CabeceraPuntuacion";
import ListaPuntuacion from "./ListaPuntuacion";

const Puntuacion = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-2 my-2 text-center">
      <h1 className="display-5 fw-bold text-white">Puntuacion</h1>
      <div className="col-lg-6 mx-auto">
        <table className="table table-dark table-striped text-white">
          <thead>
            <CabeceraPuntuacion />
          </thead>
          <tbody>
            <ListaPuntuacion />
          </tbody>
        </table>
      </div>
      <div className="d-sm-flex justify-content-sm-center mt-3">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          onClick={() => navigate("/", { replace: true })}
        >
          Volver al Inicio{" "}
        </button>
      </div>
    </div>
  );
};

export default Puntuacion;
