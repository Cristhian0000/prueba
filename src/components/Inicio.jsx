import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const Inicio = () => {
  const { contexto, setContexto } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-white ">Juego de tres en raya</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <div className="form-floating">
            <input
              onBlur={(event) => {
                setContexto({ ...contexto, jugadorUno: event.target.value });
              }}
              type="text"
              id="jugadorUno"
              className="form-control"
            />
            <label htmlFor="jugadorUno">Jugador 1</label>
          </div>
          <div className="form-floating">
            <input
              onBlur={(event) => {
                setContexto({
                  ...contexto,
                  jugadorDos: event.target.value,
                });
              }}
              type="text"
              id="jugadorDos"
              className="form-control"
            />
            <label htmlFor="jugadorDos">Jugador 2</label>
          </div>
        </div>
        <div className="d-sm-flex justify-content-sm-center mt-3">
          <button
          type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() => navigate("/Juego", { replace: true })}
          >
            Empezar juego
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Inicio;
