import React, { useState } from 'react';
import '../Estilos/opcionsalidadestino.css';
import { FcApproval } from "react-icons/fc";



export const OpcionLocalidadDestino = ({ nombre , enviarLocalidadDestino, localidadDestino }) => {

  const [localidadClickeada, setLocalidadClickeada] = useState(false);


  const clickearImg = () => {
    enviarLocalidad(nombre)
  }  
  useEffect(() => {
    localidadOrigen === nombre ? setLocalidadClickeada(true) : setLocalidadClickeada(false)
  },[localidadOrigen])

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

