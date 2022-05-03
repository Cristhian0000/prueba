import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";

const Inicio = () => {
  const { contexto, setContexto } = useContext(UserContext);
  const navigate = useNavigate();
  const [mostrarFormulario,setMostrarFuncion]=useState(false)

  const validar=(jugadorUno,jugadorDos)=>{
    const campo1=document.getElementById(jugadorUno).value
    const campo2=document.getElementById(jugadorDos).value
    if(campo1.length===0 || campo2.length===0){
      return false;
    }
    else{
      return true
    }
  }

  const redireccionar=()=>{
    if(validar('X','O')){
      
      if(localStorage.length===0){
        localStorage.setItem('ranking',JSON.stringify([]))
      }
      navigate("/Juego", { replace: true })
    }
    else{
      alert("Ingrese Nombre de Jugadores")
    }
  }

  return (
    
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-white ">Juego de tres en raya</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <div className="form-floating">
            <input onBlur={(event) => {setContexto({ ...contexto, jugadorX: event.target.value }); }} type="text" id="X" className="form-control" />
            <label htmlFor="X">Jugador 1</label>
          </div>
          <div className="form-floating">
            <input onBlur={(event) => { setContexto({...contexto, jugadorO: event.target.value }); }} type="text" id="O" className="form-control" />
            <label htmlFor="O">Jugador 2</label>
          </div>
        </div>
        <div className="d-sm-flex justify-content-sm-center mt-3">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={() =>redireccionar()} >Empezar juego </button>
        </div>
      </div>
    </div>
    
  );
};

export default Inicio;
