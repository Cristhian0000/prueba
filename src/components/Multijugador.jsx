import React from 'react'

const Multijugador = () => {
  return (
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
  )
}

export default Multijugador