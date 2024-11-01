import React, { useEffect, useState } from 'react'
import { NumerosDeViajes } from './NumerosDeViajes';
import { Tipodetarifa } from './Tipodetarifa';

export const Containerviajestarifas = ({enviarViajesIngresados , enviarTarifaElegida, localidadDestino }) => {

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
      

  return (
    <div className='px-2 flex flex-col gap-4'>
          <div className={`flex flex-col items-start gap-2 ${localidadDestino !== null ? 'translate-x-0 duration-300' : '-translate-x-full'}`}>
            <h1 className='text-xl'>Cantidad de viajes</h1>
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
              <div className="opcion-viajes-manual">
                <input
                  className={inputOnBlur ? 'container-viajes opcionSeleccionada' : 'container-viajes'}
                  type="number"
                  placeholder="¿...?"
                  onChange={recibirNumViajeInput}
                  onFocus={() => setInputFocus(true)}
                  onBlur={()=> setInputOnBlur(true)}
                  onClick={()=> setViajesIngresados(null)}
                />
              </div>
            </div>
          </div>
          <div className={`flex flex-col gap-2 items-start w-full ${viajesIngresados !== null ? 'translate-x-0 duration-300' : '-translate-x-full'}`}>
            <h1 className='text-xl'>Tipo de tarifa</h1>
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
          </div>
        </div>
  )
}
