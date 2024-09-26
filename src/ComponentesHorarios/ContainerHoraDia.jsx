import React, { useEffect, useState } from "react";
import "../Estilos/horarios.css";
import { IoIosArrowForward } from "react-icons/io";

export const ContainerHoraDia = ({ hora, minutos, dia, enviarDiaRango, enviarDiaManual, enviarHoraAutoMin, enviarHoraManualMin }) => {
  const [diaRango, setDiaRango] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [horaManualEnMinutos, setHoraManualEnMinutos] = useState(null);
  const [horaAutoEnMinutos, setHoraAutoEnMinutos] = useState();


  useEffect(() => {
    if (dia === "0") {
      setDiaRango("Domingos");
    } else if (dia >= "1" || dia <= "5") {
      setDiaRango("Lunes a viernes");
      enviarDiaRango("lunesAViernes")
    } else if (dia === "6") {
      setDiaRango("Sábados");
      enviarDiaRango("sabados")
    }
  }, [dia, enviarDiaRango]
);


  const actualizarHora = () => {
    let horas = parseInt(hora);
    let totalMinutos = horas * 60 + parseInt(minutos);
    enviarHoraAutoMin(totalMinutos)
    setHoraAutoEnMinutos(totalMinutos)
  }

  useEffect(() => {
    if(horaAutoEnMinutos !== null){
      let horas = parseInt(hora);
    let totalMinutos = horas * 60 + parseInt(minutos);
    enviarHoraAutoMin(totalMinutos)
    setHoraAutoEnMinutos(totalMinutos)
    }
  }, [hora, minutos,horaAutoEnMinutos, enviarHoraAutoMin])

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setDiaManual(valor);
    enviarDiaRango(null)
    if(valor === 'Lunes a viernes'){
      enviarDiaManual('lunesAViernes')
    }
    else if(valor === 'Sábados'){
      enviarDiaManual('sabados')
    }
    else if(valor === 'Domingos'){
      enviarDiaManual('domingos')
    }
    
  }

  const enviarHoraManual = (e) => {
    let horaStr = e.target.value;
    let partes = horaStr.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let totalMinutos = horas * 60 + minutos;
    enviarHoraManualMin(totalMinutos);
    setHoraManualEnMinutos(totalMinutos);
  };


  const resetearHoraManual = () => { setHoraManualEnMinutos(null); enviarHoraManualMin(null); actualizarHora()}
  const desactivarHoraAuto = () => { setHoraManualEnMinutos(0); enviarHoraAutoMin(null) ;setHoraAutoEnMinutos(null)}

  return (
    <div
      className="container-bloque_hora-dia"
    >
      <div className="container-diaSemana">
        <h1>Día de la semana</h1>
        <div className="container-horaautomanual">
          <div
            className={
              diaManual === null
                ? 'diaautomatico'
                : 'diaautomatico opcioninactiva'
            }
            onClick={()=> setDiaManual(null)}>
            {diaRango}
          </div>
          <div className="container-select">
            <div
              className={
                diaManual === null
                  ? "containter-select-mascara"
                  : "containter-select-mascara opcionactiva"
              }
            >
              {diaManual !== null ? diaManual : "Elegí un día"}
              <IoIosArrowForward className="arrow-select" />
            </div>
            <select
              className="select-diasemana"
              name=""
              id=""
              onChange={manejarCambio}
            >
              <option value="" selected={true} disabled = {true}>
                Elegí un día
              </option>
              <option value="Lunes a viernes">Lunes a viernes</option>
              <option value="Sábados">Sábados</option>
              <option value="Domingos">Domingos</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-hora">
        <h1>Hora</h1>
        <div className="container-horaautomanual">
          <div className={horaManualEnMinutos === null ? 'horaautomatica' : 'horaautomatica opcioninactiva'} onClick={resetearHoraManual}>
            {hora < 10 ? `0${hora}` : hora}:
            {minutos < 10 ? `0${minutos}` : minutos}
          </div>
          <input
            type="time"
            className={horaManualEnMinutos === null ? 'input-horamanual opcioninactiva' : 'input-horamanual'}
            onChange={enviarHoraManual}
            onClick={desactivarHoraAuto}
          />
        </div>
      </div>
    </div>
  );
};
