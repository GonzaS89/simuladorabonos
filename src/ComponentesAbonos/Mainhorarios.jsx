import React, { useState, useEffect } from "react";
import "../Estilos/abonos.css";
import { Link } from "react-router-dom";
import { ContainerHoraDia } from "../ComponentesHorarios/ContainerHoraDia";
import { useHabilitarBoton } from "../Hooks/useHabilitarBoton";
import { useHora } from "../Hooks/useHora";
import { useDiaDeLaSemana } from "../Hooks/useDiaDeLaSemana";
import { useFiltradoHorarios } from "../Hooks/useFiltradoHorarios";
import { motion } from "framer-motion";
import { Bloquelocalidadesorigen } from "./Bloquelocalidadesorigen";
import { Bloquelocalidadesdestino } from "./Bloquelocalidadesdestino";
import { useHeight } from "../Hooks/useHeight";

export const Mainhorarios = ({ enviarParametrosHorarios }) => {

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


  const {hLg} = useHeight;
  
  const {minutos, hora, dia} = useHora()

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const [horaManualMin, setHoraManualMin] = useState(null);
  const [horaAutoMin, setHoraAutoMin] = useState(null);
  const {esValido} = useHabilitarBoton(localidadOrigen,localidadDestino,via)

  useEffect(() => {
    esValido && setBotonDisponible(esValido) 
  },[esValido])

  const recibirLocalidad = (localidad) => {
    setLocalidadOrigen(localidad);
  };

  const recibirLocalidadDestino = (localidad) => {setLocalidadDestino(localidad);};
  const recibirVia = (via) => {setVia(via);};

  const [diaAuto, setDiaAuto] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [rangoDias, setRangoDias] = useState(null);

  const recibirDiaRango = (diarango) => {setDiaAuto(diarango);};
  const recibirDiaManual = (dia) => {setDiaManual(dia);};

  useEffect(() => {
    if (diaManual !== null) {
      setRangoDias(diaManual);
    } else {
      setRangoDias(diaAuto);
    }
  }, [diaAuto, diaManual]);

  const {diaDeLaSemana} = useDiaDeLaSemana(rangoDias);
  const {listaHorarios} = useFiltradoHorarios(localidadOrigen,localidadDestino,diaDeLaSemana,via);

  useEffect(() => {
    setVia(null);
  }, [localidadDestino]);

  const recibirHoraAutoMin = (hora) => {
    setHoraAutoMin(hora);
  };
  const recibirHoraManualMin = (hora) => {
    setHoraManualMin(hora);
  };

  return (
    <div className="container-screen">
      <div className={`text-white overflow-hidden flex flex-col h-screen-dvh mt-6 ${hLg ? 'gap-4' : 'gap-2'}`}>
        <h1 className="uppercase text-3xl">
          Consulta de horarios
        </h1>
        <Bloquelocalidadesorigen origen={localidadOrigen} recibirLocalidad={recibirLocalidad}/>
        <Bloquelocalidadesdestino origen={localidadOrigen} destino={localidadDestino} recibirVia={recibirVia} recibirLocalidadDestino={recibirLocalidadDestino}/>
          <ContainerHoraDia
            hora={hora}
            minutos={minutos}
            dia={dia}
            enviarDiaRango={recibirDiaRango}
            enviarDiaManual={recibirDiaManual}
            enviarHoraAutoMin={recibirHoraAutoMin}
            enviarHoraManualMin={recibirHoraManualMin}
            destino={localidadDestino}
          />
          <Link to="/horarios">
            <motion.div
            initial= {{y: '100%'}}
            animate={{y: botonDisponible ? 0 : '100%'}}
            transition={{duration: .5, ease:'easeInOut'}}
              className={`${botonDisponible ?  'bg-red-700' : 'bg-gray-600'} absolute py-4 text-3xl uppercase bottom-0 w-full`}
              onClick={() =>
                enviarParametrosHorarios(
                  localidadOrigen,
                  localidadDestino,
                  via,
                  listaHorarios,
                  horaAutoMin,
                  horaManualMin,
                  diaAuto,
                  diaManual
                )
              }
            >
              consultar
            </motion.div>
          </Link>
      </div>
    </div>
  );
};
