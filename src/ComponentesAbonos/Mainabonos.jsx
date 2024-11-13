import React, { useState, useEffect } from "react";
import "../Estilos/abonos.css";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { motion } from "framer-motion";
import { Bloquelocalidadesorigen } from "./Bloquelocalidadesorigen";
import { Bloquelocalidadesdestino } from "./Bloquelocalidadesdestino";
import { useHeight } from "../Hooks/useHeight";

export const Mainabonos = ({ enviarParametrosAbonos }) => {

  useEffect(() => {
    // Función que maneja la acción de retroceder
    const handleBackButton = (event) => {
        // Redirigir a una URL específica cuando se presiona el botón de "back"
        window.location.href = '/';
    };

    // Añadir el listener al evento popstate
    window.addEventListener('popstate', handleBackButton);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
        window.removeEventListener('popstate', handleBackButton);
    };
}, []);


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

  const {hMd,hLg} = useHeight()

const titleSize = () => {
  if(hLg){return 'text-2xl'}
  else if(hMd){return 'text-xl'}
}

  return (
    <div className="container-screen">
      <div className={`text-white overflow-hidden flex flex-col  ${hLg ? 'gap-6' : 'gap-2'} h-screen-dvh pt-6  xs:w-full md:w-[500px] relative`}>
        <h1 className={`uppercase ${titleSize()}`}>Calculá el precio de tu abono</h1>
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
