import React, { useEffect, useState } from 'react'
import { NumerosDeViajes } from './NumerosDeViajes';
import { Tipodetarifa } from './Tipodetarifa';
import { motion } from 'framer-motion';
import { useHeight } from '../Hooks/useHeight';

export const Containerviajestarifas = ({enviarViajesIngresados , enviarTarifaElegida, destino }) => {

    const [viajesIngresados, setViajesIngresados] = useState(null);
    const [tarifaElegida, setTarifaElegida] = useState(null);
    const [inputFocus, setInputFocus] = useState(null);
    const [inputOnBlur, setInputOnBlur] = useState(null)

    const recibirNumViaje = (viajes) => {
        setViajesIngresados(viajes);
        setInputFocus(false);
        setInputOnBlur(false)
      };

      const recibirNumViajeInput = e => {
        setViajesIngresados(parseInt(e.target.value));
      };

      const recibirTarifa = (tarifa) => {
        setTarifaElegida(tarifa);
        enviarTarifaElegida(tarifa)
      };

      useEffect(() => {
        enviarViajesIngresados(viajesIngresados)
      },[viajesIngresados,enviarViajesIngresados])

const {hLg} = useHeight()


  return (
    <div className={`px-2 flex flex-col ${hLg ? 'gap-4' : ''}`}>
          <motion.div
           initial={{x: '120%'}}
           animate = {{x: destino !== null ? 0 : '120%'}}
           transition={{duration: .5 , ease: 'easeInOut'}}
          className={`flex flex-col items-start ${hLg ? 'gap-2' : ''}`}>
            <h1 className={hLg ? 'text-xl' : ''}>Cantidad de viajes</h1>
            <div className="container-principal-numviajes">
              <div className="container-opciones-viajes">
                <NumerosDeViajes
                  numero={8}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={16}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={22}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={44}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
              </div>
              <div className="absolute right-0 mr-12">
                <input
                  className={`rounded-full ${hLg ? 'w-[50px] h-[50px]' : 'w-[35px] h-[35px]'} ${!inputOnBlur ? 'bg-gray-300 text-gray-500' : 'bg-black text-white' }`}
                  type="number"
                  placeholder="¿...?"
                  onChange={recibirNumViajeInput}
                  onFocus={() => setInputFocus(true)}
                  onBlur={()=> setInputOnBlur(true)}
                  onClick={()=> setViajesIngresados(null)}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
           initial={{x: '120%'}}
           animate = {{x: viajesIngresados !== null ? 0 : '120%'}}
           transition={{duration: .5 ,  ease: 'easeInOut'}}
          className={`flex flex-col items-start w-full ${hLg ? 'gap-2' : ''}`}>
            <h1 className={`${hLg ? 'text-xl' : ''}`}>Tipo de tarifa</h1>
            <div className="w-full">
              <div className="flex justify-between">
              <Tipodetarifa
                tarifa={"social"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              <Tipodetarifa
                tarifa={"estudiantil"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              </div>
            </div>
          </motion.div>
        </div>
  )
}
