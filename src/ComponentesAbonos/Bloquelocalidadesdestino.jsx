import React from 'react';
import { OpcionLocalidadDestino } from './OpcionLocalidadDestino';
import {useReturnDestinos} from '../Hooks/useReturnDestinos'

export const Bloquelocalidadesdestino = ({ origen, destino, recibirVia, recibirLocalidadDestino }) => {

    const { arrayDestinos } = useReturnDestinos(origen) 

  return (
    <div className={origen !== null ? 'flex flex-col px-2 gap-2' : 'hidden w-full'}>
    <h1 className="text-2xl text-left">Destino</h1>
    <div className="flex items-start gap-2 uppercase text-sm overflow-scroll">
      {arrayDestinos?.length > 0 && 
        arrayDestinos.map((localidad, index) => (
          <OpcionLocalidadDestino
            key={index}
            index={index}
            nombre={localidad}
            enviarLocalidadDestino={recibirLocalidadDestino}
            localidadDestino={destino}
            localidadOrigen={origen}
            enviarVia={recibirVia}
          />
        ))}
    </div>
  </div>
  )
}
