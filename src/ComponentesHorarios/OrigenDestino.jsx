import React, { useEffect, useState } from 'react';
import '../Estilos/horarios.css';
import { FcApproval } from "react-icons/fc";

export const OrigenDestino = ({ nombre , idCiudadSeleccionada , ciudadOrigen}) => {

    const [ciudadClickeada, setCiudadClickeada] = useState(false)

    const actualizarCiudad = () => {idCiudadSeleccionada(nombre);}

    useEffect(() =>{ciudadOrigen === nombre && setCiudadClickeada(true)},[ciudadOrigen,nombre])

  return (
    <div className="container-origenes_ciudad" onClick={actualizarCiudad}>
              <p className="container-origenes_texto">{nombre}</p>
              <FcApproval className={ciudadClickeada ? 'container-origenes_img img-enabled' : 'container-origenes_img img-disabled'} />
            </div>
  )
}
 