import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoEncontrado = () => {
  const navigate=useNavigate()
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-1 fw-bold text-white ">404</h1>
      <div className="d-sm-flex justify-content-sm-center mt-3">
          <button
          type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            onClick={() =>navigate("/", { replace: true })}
          >
            Volver al Inicio
          </button>
        </div>
      </div>

  )
}

export default NoEncontrado