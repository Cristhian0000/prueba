import Juego from "./components/Juego";
import Puntuacion from "./components/Puntuacion";
import NoEncontrado from "./components/NoEncontrado";
import Inicio from './components/Inicio'
import ModosJuego from './components/ModosJuego'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/userContext";
import { useState } from "react";

function App() {
  const [contexto,setContexto]=useState({jugadorX:'',jugadorO:''})
  return (
    <div className="App">
    <BrowserRouter>
      <UserContext.Provider value={{contexto,setContexto}}>
        <Routes>
          <Route path="/" element={<ModosJuego/>}></Route>
          <Route path="/inicio" element={<Inicio/>}></Route>
          <Route path="juego" element={<Juego />}></Route>
          <Route path="puntuacion" element={<Puntuacion />}></Route>

          <Route path="*" element={<NoEncontrado />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
