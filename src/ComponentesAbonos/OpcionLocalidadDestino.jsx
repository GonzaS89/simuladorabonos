import React, { useState, useEffect } from 'react';
import '../Estilos/opcionsalidadestino.css';
import { FaCheckCircle } from "react-icons/fa";



export const OpcionLocalidadDestino = ({ nombre , enviarLocalidadDestino, localidadDestino, localidadOrigen }) => {

  const [localidadClickeada, setLocalidadClickeada] = useState(false);


  const clickearImg = () => {
    enviarLocalidadDestino(nombre)
  }  
  useEffect(() => {
    localidadDestino === nombre ? setLocalidadClickeada(true) : setLocalidadClickeada(false)
  },[localidadDestino])

  useEffect(() => {
    setLocalidadClickeada(false)
  },[localidadOrigen])

  return (
    <div className="container-salida-localidad" onClick={clickearImg}>
      <div className="imagen-localidad-opcion">
      <img src={require(`../IMG/${nombre}.avif`)} alt=""className={localidadClickeada ? 'sombrearImg' : ''}/>
      <FaCheckCircle className={localidadClickeada ? 'icono-checked mostrarIconoCheked' : 'icono-checked hidden'}/>
      </div>
        <p>{nombre}</p>
    </div>
  )
}

