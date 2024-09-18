import React, { useEffect, useState } from "react";
import "../Estilos/horarios.css";
import { IoIosArrowForward } from "react-icons/io";

export const ContainerHoraDia = ({ hora, minutos, dia , enviarDiaRango}) => {
  const [diaRango, setDiaRango] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [horaManualEnMinutos, setHoraManualEnMinutos] = useState(null);
  const [horaAutomaticaEnMinutos, setHoraAutomaticaEnMinutos] = useState(null);

  useEffect(() => {
    if (dia === "0") {
      setDiaRango("Domingos");
      enviarDiaRango("domingos")
    } else if (dia >= "1" || dia <= "5") {
      setDiaRango("Lunes a viernes");
      enviarDiaRango("lunesAViernes")
    } else if (dia === "6") {
      setDiaRango("Sábados");
      enviarDiaRango("sabados")
    }
  }, [dia]);

  useEffect(() => {
    let horas = parseInt(hora);
    let totalMinutos = horas * 60 + minutos;
    setHoraAutomaticaEnMinutos(totalMinutos)
  },[hora,minutos])


  const manejarCambio = (e) => {
    setDiaManual(e.target.value);
  };

  const enviarHoraManual = (e) => {
    let horaStr = e.target.value;
    let partes = horaStr.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let totalMinutos = horas * 60 + minutos;
    setHoraManualEnMinutos(totalMinutos);
  };

  const resetearDiaManual = () => {setDiaManual(null)}
  const resetearHoraManual = () => {setHoraManualEnMinutos(null)}
  const desactivarHoraAuto = () => {setHoraManualEnMinutos(0)}
  

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
                ? "diaautomatico"
                : "diaautomatico opcioninactiva"
            }
          onClick={resetearDiaManual}>
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
              <option value="" selected={true}>
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
          <div className={horaManualEnMinutos === null ? 'horaautomatica' : 'horaautomatica opcioninactiva'}onClick={resetearHoraManual}>
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
