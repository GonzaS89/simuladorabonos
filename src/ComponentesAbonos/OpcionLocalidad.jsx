import React, { useEffect, useState } from 'react';
import '../Estilos/opcionsalidadestino.css';
import { FcApproval } from "react-icons/fc";



export const OpcionLocalidad = ({ nombre , enviarLocalidad, localidadOrigen }) => {

  const [localidadClickeada, setLocalidadClickeada] = useState(false);


  const clickearImg = () => {
    enviarLocalidad(nombre)
  }  
  useEffect(() => {
    localidadOrigen === nombre ? setLocalidadClickeada(true) : setLocalidadClickeada(false)
  },[localidadOrigen])
 
  


  return (
    <div className="container-salida-localidad" onClick={clickearImg}>
      <div className="imagen-localidad-opcion">
      <img src={require(`../IMG/${nombre}.avif`)} alt=""className={localidadClickeada ? 'sombrearImg' : ''}/>
      <FcApproval className={localidadClickeada ? 'icono-checked mostrarIconoCheked' : 'icono-checked hidden'}/>
      </div>
        <p>{nombre}</p>
    </div>
  )
  }
