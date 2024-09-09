import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './App.css'

export const Botonseccion = ({nombre , enviarKey}) => {
  return (
    
    <div className="seccion-boton" onClick={()=> enviarKey(nombre)}>
                <img src={require(`../src/IMG/${nombre}.png`)} alt="" />
                <p>{nombre}</p>
              </div>
  )
}
