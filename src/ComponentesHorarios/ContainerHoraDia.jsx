import React, { useEffect, useState } from "react";
import "../Estilos/horarios.css";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import {useHeight} from '../Hooks/useHeight'

export const ContainerHoraDia = ({
  hora,
  minutos,
  dia,
  enviarDiaRango,
  enviarDiaManual,
  enviarHoraAutoMin,
  enviarHoraManualMin,
  destino
}) => {
  const [diaRango, setDiaRango] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [horaManualEnMinutos, setHoraManualEnMinutos] = useState(null);
  const [horaAutoEnMinutos, setHoraAutoEnMinutos] = useState();

  useEffect(() => {
    if (dia === "0") {
      setDiaRango("Domingos");
    } else if (dia >= "1" || dia <= "5") {
      setDiaRango("Lunes a viernes");
      enviarDiaRango("lunesAViernes");
    } else if (dia === "6") {
      setDiaRango("Sábados");
      enviarDiaRango("sabados");
    }
  }, [dia, enviarDiaRango]);

  const actualizarHora = () => {
    let horas = parseInt(hora);
    let totalMinutos = horas * 60 + parseInt(minutos);
    enviarHoraAutoMin(totalMinutos);
    setHoraAutoEnMinutos(totalMinutos);
  };

  useEffect(() => {
    if (horaAutoEnMinutos !== null) {
      let horas = parseInt(hora);
      let totalMinutos = horas * 60 + parseInt(minutos);
      enviarHoraAutoMin(totalMinutos);
      setHoraAutoEnMinutos(totalMinutos);
    }
  }, [hora, minutos, horaAutoEnMinutos, enviarHoraAutoMin]);

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setDiaManual(valor);
    enviarDiaRango(null);
    if (valor === "Lunes a viernes") {
      enviarDiaManual("lunesAViernes");
    } else if (valor === "Sábados") {
      enviarDiaManual("sabados");
    } else if (valor === "Domingos") {
      enviarDiaManual("domingos");
    }
  };

  const enviarHoraManual = (e) => {
    let horaStr = e.target.value;
    let partes = horaStr.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let totalMinutos = horas * 60 + minutos;
    enviarHoraManualMin(totalMinutos);
    setHoraManualEnMinutos(totalMinutos);
  };

  const resetearHoraManual = () => {
    setHoraManualEnMinutos(null);
    enviarHoraManualMin(null);
    actualizarHora();
  };
  const desactivarHoraAuto = () => {
    setHoraManualEnMinutos(0);
    enviarHoraAutoMin(null);
    setHoraAutoEnMinutos(null);
  };

  const {hLg} = useHeight()

  

  return (
    <div className={`${hLg ? 'my-2' : ''} px-2`}>
      <motion.div 
        initial={{x: '120%'}}
        animate = {{x: destino !== null ? 0 : '120%'}}
        transition={{duration: .5 , ease: 'easeInOut'}}
      className="container-diaSemana overflow-hidden">
        <h1 className={`text-left ${hLg ? 'text-2xl' : 'text-xl'}`}>Día de la semana</h1>
        <div 
        className='flex justify-between'>
          <div
            className={`${diaManual === null 
              ?  'bg-gray-200  text-black'  :'bg-gray-200 text-gray-500'} w-36 py-[10px] flex justify-center items-center uppercase rounded-md`
              
            }
            onClick={() => setDiaManual(null)}
          >
            {diaRango}
          </div>
          <div className='flex items-center justify-center rounded-md relative w-36'>
            <div
              className={ `${diaManual === null ? 'text-gray-500' : ' text-black'} absolute uppercase text-base pointer-events-none bg-gray-200 z-50 flex items-center  justify-center rounded-md py-[10px] w-full`}
            >
              {diaManual !== null ? diaManual : "Elegí un día"}
              <IoIosArrowForward className="arrow-select" />
            </div>
            <select
              className="w-2/3 text-gray-500"
              name=""
              id=""
              onChange={manejarCambio}
            >
              <option value="" selected={true} disabled={true}>
                Elegí un día
              </option>
              <option value="Lunes a viernes">Lunes a viernes</option>
              <option value="Sábados">Sábados</option>
              <option value="Domingos">Domingos</option>
            </select>
          </div>
        </div>
      </motion.div>
      <motion.div 
         initial={{x: '-120%'}}
         animate = {{x: destino !== null ? 0 : '-120%'}}
         transition={{duration: .5 , delay:.5, ease: 'easeInOut'}}
      className="container-hora">
        <h1 className={`text-left ${hLg ? 'text-2xl' : 'text-xl'}`}>Hora</h1>
        <div className="flex justify-between">
          <div
            className={`flex items-center justify-center bg-gray-200 w-36 rounded-md text-xl ${horaAutoEnMinutos === null ? 'text-gray-400' : 'text-black'}`}
            onClick={resetearHoraManual}
          >
            {hora < 10 ? `0${hora}` : hora}:
            {minutos < 10 ? `0${minutos}` : minutos}
          </div>
          <div className="container-input">
            <div
              className={
                horaManualEnMinutos === null
                  ? "container-input_mascara"
                  : "hidden"
              }
            >
              Marcá una hora
              <IoIosArrowForward className="arrow-select" />
            </div>
            <input
              type="time"
              className={
                horaManualEnMinutos === null
                  ? "input-horamanual opcioninactiva"
                  : "input-horamanual"
              }
              onChange={enviarHoraManual}
              onClick={desactivarHoraAuto}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
