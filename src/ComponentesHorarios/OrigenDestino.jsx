import React, { useEffect, useState } from 'react';
import '../Estilos/horarios.css';
import { FcApproval } from "react-icons/fc";
import grilla from '../grillas.json';

export const OrigenDestino = ({ nombre , idCiudadSeleccionada , ciudadOrigen, diaRango, idaVuelta, grillaEnviada }) => {

  const switchearGrilla = ( ) => {
    switch (nombre) {
      case 'la florida x alderetes/alternativa':
            grillaEnviada(grilla.lunesAViernes.idas.floridaxalderetesalter);
            break;
      case 'la florida x w. posse':
                  
    }
  }

    const [ciudadClickeada, setCiudadClickeada] = useState(false)
    const actualizarCiudad = () => {
      idCiudadSeleccionada(nombre);
      if(diaRango === 'lunesAViernes' && idaVuelta === 'idas'){
      }
    }

    useEffect(() =>{ciudadOrigen === nombre && setCiudadClickeada(true)},[ciudadOrigen,nombre])

  return (
    <div className="container-origenes_ciudad" onClick={actualizarCiudad}>
              <p className="container-origenes_texto">{nombre}</p>
              <FcApproval className={ciudadClickeada ? 'container-origenes_img img-enabled' : 'container-origenes_img img-disabled'} />
            </div>
  )
}
