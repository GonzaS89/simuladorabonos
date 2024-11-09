import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from "react-router-dom";
import { ContainerHoraDia } from "../ComponentesHorarios/ContainerHoraDia";
import { useReturnDestinos } from "../Hooks/useReturnDestinos";
import { useHabilitarBoton } from "../Hooks/useHabilitarBoton";
import { useHora } from "../Hooks/useHora";
import { useDiaDeLaSemana } from "../Hooks/useDiaDeLaSemana";
import { useFiltradoHorarios } from "../Hooks/useFiltradoHorarios";
import { motion } from "framer-motion";

export const Mainhorarios = ({ enviarParametrosHorarios }) => {
  
  const {minutos, hora, dia} = useHora()

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const [horaManualMin, setHoraManualMin] = useState(null);
  const [horaAutoMin, setHoraAutoMin] = useState(null);
  const { arrayDestinos } = useReturnDestinos(localidadOrigen)
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
      <div className="text-white overflow-hidden flex flex-col gap-6 h-screen-dvh mt-6">
        <h1 className="uppercase text-3xl">
          Consulta de horarios
        </h1>
          <div className="flex flex-col px-2 gap-2 items-start">
            <h1 className="text-2xl">Origen</h1>
            <div className="flex items-start gap-2">
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
          <div className={localidadOrigen !== null ? 'flex flex-col px-2 items-start gap-2' : 'hidden'}>
            <h1 className="text-2xl">Destino</h1>
            <div className="flex items-start gap-2 uppercase text-sm">
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
              className={`${botonDisponible ?  'bg-red-700' : 'bg-gray-600'} uppercase py-4  text-3xl absolute bottom-0 w-full`}
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
