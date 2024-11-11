import React from 'react';
import localidades from "../localidades.json";
import { OpcionLocalidad } from './OpcionLocalidad';
import { useHeight } from '../Hooks/useHeight';

export const Bloquelocalidadesorigen = ({ origen, recibirLocalidad }) => {

  const {hLg} = useHeight();
  
  return (
    <div className={`flex flex-col px-2 ${hLg ? 'gap-2' : ''}`}>
<h1 className={`${hLg ? 'text-2xl' : 'text-lg'} text-left`}>Origen</h1>
    <div className="flex items-start gap-2 overflow-x-scroll">
      {localidades.map((localidad, index) => (
        <OpcionLocalidad
          key={index}
          index={index}
          nombre={localidad.nombre}
          enviarLocalidad={recibirLocalidad}
          localidadOrigen={origen}
        />
      ))}
    </div>
  </div>
  )
}
