import React, { useState, useEffect } from "react";
import "../Estilos/abonos.css";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { motion } from "framer-motion";
import { Bloquelocalidadesorigen } from "./Bloquelocalidadesorigen";
import { Bloquelocalidadesdestino } from "./Bloquelocalidadesdestino";

export const Mainabonos = ({ enviarParametrosAbonos }) => {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);

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
        <Bloquelocalidadesorigen origen={localidadOrigen} recibirLocalidad={recibirLocalidad}/>
         <Bloquelocalidadesdestino origen={localidadOrigen} destino={localidadDestino} recibirVia={recibirVia} recibirLocalidadDestino={recibirLocalidadDestino}/>
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
