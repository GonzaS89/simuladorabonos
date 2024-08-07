import "./App.css";
import React, { useState, useEffect } from 'react';

import { Puntos } from "./Componentes/Puntos";
import { Listadelocalidades } from "./Componentes/Listadelocalidades";
import { Cantidaddeviajes } from "./Componentes/Cantidaddeviajes";
import { Categorias } from "./Componentes/Categorias";

function App ( ) {

  const [origenODestino, setOrigenODestino] = useState(null);
  const [menuDesplegado , setMenuDesplegado] = useState(false);
  const [localidadOrigen , setLocalidadOrigen] = useState(null);
  const [localidadDestino , setLocalidadDestino] = useState(null);

  const recibirConfirmacionDeMenuDesplegado = (condicion) => {
    setMenuDesplegado(condicion);
  }

  const puntoElegido = (punto) => {
    setOrigenODestino(punto)
  }

  const OcultarMenuLocalidades = ( ) => {
    setMenuDesplegado(false)
  }

  useEffect(() => {
    localidadOrigen !== null && setMenuDesplegado(false);
    localidadDestino !== null && setMenuDesplegado(false);
  },[localidadOrigen , localidadDestino])

  const recepcionLocalidad = (localidad) => {
    origenODestino === 'origen' ?
     setLocalidadOrigen(localidad) :
     setLocalidadDestino(localidad) 
   
  }

  return (
    <div className="App">
      <div className="container-principal">
        <h1 className="titulo-principal">Cotizador de abonos</h1>
        <div className="container-salida-llegada">
          <Puntos 
          listaDeLocalidadesDesplegada = {recibirConfirmacionDeMenuDesplegado}
          nombre = {'origen'}
          puntoElegido = {puntoElegido}
          origenODestino = {origenODestino}
          localidadOrigen = {localidadOrigen}/>
          <Puntos 
          listaDeLocalidadesDesplegada = {recibirConfirmacionDeMenuDesplegado}
          nombre = {'destino'}
          puntoElegido = {puntoElegido}
          origenODestino = {origenODestino}
          localidadDestino = {localidadDestino}/>
        </div>
        <Cantidaddeviajes />
        <Categorias />
      </div>
      <Listadelocalidades 
      menuDesplegado = {menuDesplegado}
      puntoElegido = {origenODestino}
      localidadObtenida={recepcionLocalidad}/>
      <div 
      className={menuDesplegado ? "pantalla-difuminada mostrar" : "pantalla-difuminada"}
      onClick={OcultarMenuLocalidades}></div>
    </div>
  );
}

export default App;
