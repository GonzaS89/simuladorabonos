import "./App.css";
import React, { useState, useEffect } from 'react';
import ListaLocalidadesInicio from "./Componentes/ListaLocalidadesInicio";
import ListaLocalidadesDestino from "./Componentes/ListaLocalidadesDestino";
import InicioDestino from "./Componentes/InicioDestino";

function App () {

  const [localidad , setLocalidad] = useState(null)

  const info = (data) => {
    setLocalidad(data)
  }

  useEffect(() => {
    console.log(localidad)
  },[localidad])

  return (
    <div className="App">
      <InicioDestino inicio = {localidad}/>
      <div className="contenedor-general">
        <div className="contenedor-slide-localidades">
          <ListaLocalidadesInicio localidadClickeada={info}/>
          <ListaLocalidadesDestino />
        </div>
      </div>
    </div>
  );
}

export default App;
