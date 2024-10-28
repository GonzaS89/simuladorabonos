import React from 'react';
import './App.css'

export const Botonseccion = ({nombre , enviarKey}) => {
  return (
    
    <div className="seccion-boton">
                <img src={require(`../src/IMG/${nombre}.png`)} alt="" />
                <p>{nombre}</p>
              </div>
  )
}
