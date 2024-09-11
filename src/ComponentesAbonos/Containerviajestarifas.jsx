import React, { useEffect, useState } from 'react'
import { NumerosDeViajes } from './NumerosDeViajes';
import { Tipodetarifa } from './Tipodetarifa';

export const Containerviajestarifas = ({enviarViajesIngresados , enviarTarifaElegida }) => {

    const [viajesIngresados, setViajesIngresados] = useState(null);
    const [tarifaElegida, setTarifaElegida] = useState(null);
    const [inputFocus, setInputFocus] = useState(null);

    const recibirNumViaje = (viajes) => {
        setViajesIngresados(viajes);
        setInputFocus(false);
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
      },[viajesIngresados, enviarViajesIngresados])
      

  return (
    <div className='container-viajes-tarifa'>
          <div className="cantidaddeviajes">
            <h1>Cantidad de viajes</h1>
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
                  className="container-viajes"
                  type="num"
                  placeholder="¿...?"
                  onChange={recibirNumViajeInput}
                  onFocus={() => setInputFocus(true)}
                />
              </div>
            </div>
          </div>
          <div className="container-tipodetarifa">
            <h1>Tipo de tarifa</h1>
            <div className="container-categoriatarifa">
              <div className="tarifas">
              <Tipodetarifa
                tarifa={"empleados"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              <Tipodetarifa
                tarifa={"estudiantes"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              </div>
            </div>
          </div>
        </div>
  )
}
