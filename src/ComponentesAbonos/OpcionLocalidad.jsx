import React from 'react';
import '../Estilos/opcionsalidadestino.css';


export const OpcionLocalidad = ({ nombre }) => {
  return (
    <div className="container-salida-localidad">
      <div className="imagen-localidad-opcion">
      <img src={require(`../IMG/${nombre}.jpg`)} alt=""/>
      </div>
        <p>{nombre}</p>
    </div>
  )
}

