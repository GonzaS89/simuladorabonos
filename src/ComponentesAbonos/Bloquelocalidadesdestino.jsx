import React from 'react';
import { OpcionLocalidadDestino } from './OpcionLocalidadDestino';
import {useReturnDestinos} from '../Hooks/useReturnDestinos';
import { useHeight } from '../Hooks/useHeight';
import { motion } from 'framer-motion';

export const Bloquelocalidadesdestino = ({ origen, destino, recibirVia, recibirLocalidadDestino }) => {

    const { arrayDestinos } = useReturnDestinos(origen) 

    const {hLg} = useHeight();

  return (
    <div className={`flex flex-col px-2' ${hLg ? 'gap-2' : ''}`}>
    <motion.h1 
    initial={{opacity:0}}
    animate={{opacity: origen !== null ? 1 : 0}}
    transition={{duration: .5}}
    className={`${hLg ? 'text-2xl' : 'text-lg'} text-left`}>Destino</motion.h1>
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
