import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { useReturnDestinos } from "../Hooks/useReturnDestinos";
import { motion } from "framer-motion";

export const Mainabonos = ({ enviarParametrosAbonos }) => {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const { arrayDestinos } = useReturnDestinos(localidadOrigen)

  useEffect(() => { tarifaElegida ? setBotonDisponible(true) : setBotonDisponible(false); }, [tarifaElegida]);

  const recibirLocalidad = (localidad) => { setLocalidadOrigen(localidad); };
  const recibirLocalidadDestino = (localidad) => { setLocalidadDestino(localidad); };
  const recibirVia = via => { setVia(via) }

  useEffect(() => {
    setVia(null)
  }, [localidadDestino])

  const recibirTarifaElegida = tarifa => { setTarifaElegida(tarifa) }
  const recibirViajesIngresados = viajes => { setViajesIngresados(viajes) }

  return (
    <div className="container-screen">
      <div className="text-white overflow-hidden flex flex-col gap-6 h-screen-dvh mt-6">
        <h1 className="uppercase text-3xl">Calculá el precio de tu abono</h1>
          <div className="flex flex-col px-2 gap-2">
            <h1 className="text-2xl text-left">Origen</h1>
            <div className="flex items-start gap-2 overflow-x-scroll">
              {localidades.map((localidad, index) => (
                <OpcionLocalidad
                  key={index}
                  index={index}
                  nombre={localidad.nombre}
                  enviarLocalidad={recibirLocalidad}
                  localidadOrigen={localidadOrigen}
                />
              ))}
            </div>
          </div>
          <div className={localidadOrigen !== null ? 'flex flex-col px-2 gap-2' : 'hidden w-full'}>
            <h1 className="text-2xl text-left">Destino</h1>
            <div className="flex items-start gap-2 uppercase text-sm overflow-x-scroll">
              {arrayDestinos !== null &&
                arrayDestinos.map((localidad, index) => (
                  <OpcionLocalidadDestino
                    key={index}
                    index={index}
                    nombre={localidad}
                    enviarLocalidadDestino={recibirLocalidadDestino}
                    localidadDestino={localidadDestino}
                    localidadOrigen={localidadOrigen}
                    enviarVia={recibirVia}
                  />
                ))}
            </div>
          </div>
        <Containerviajestarifas enviarTarifaElegida={recibirTarifaElegida} enviarViajesIngresados={recibirViajesIngresados} destino={localidadDestino} />
        <Link to='/cotizacion'>
          <motion.div 
           initial= {{y: '100%'}}
           animate={{y: botonDisponible ? 0 : '100%'}}
           transition={{duration: .5, ease:'easeInOut'}}
           className={`${botonDisponible ?  'bg-red-700' : 'bg-gray-600'} uppercase py-4  text-3xl absolute bottom-0 w-full`}onClick={() => enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via)}>calcular</motion.div>
        </Link>
      </div>
    </div>
  )
}
