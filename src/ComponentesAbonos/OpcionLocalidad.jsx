import React, { useState } from 'react';
import '../Estilos/opcionsalidadestino.css';
import { FcApproval } from "react-icons/fc";



export const OpcionLocalidad = ({ nombre , enviarLocalidad }) => {

  const [imgClickeada, setImgClickeada] = useState(false);

  const clickearImg = () => {setImgClickeada(true)}

  const localidadClickeada = () => {
    enviarLocalidad(nombre)
  }

  return (
    <div className="container-salida-localidad" onClick={clickearImg}>
      <div className="imagen-localidad-opcion" onClick={localidadClickeada}>
      <img src={require(`../IMG/${nombre}.avif`)} alt=""className={imgClickeada ? 'sombrearImg' : ''}/>
      <FcApproval className={imgClickeada ? 'icono-checked mostrarIconoCheked' : 'icono-checked hidden'}/>
      </div>
        <p>{nombre}</p>
    </div>
  )
}

