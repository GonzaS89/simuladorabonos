import React from 'react';
import '../Estilos/servicio.css';

export const Horario = ( {nombre , hora , recorrido} ) => {
  return (
    <div className="containerservicio">
        <p className="servicionombre">Servicio de las {nombre} hrs.</p>
        <p className="serviciohora">{hora}</p>
        <p className="serviciorecorrido"><strong>Recorrido</strong>: {recorrido}</p>
    </div>
  )
}
