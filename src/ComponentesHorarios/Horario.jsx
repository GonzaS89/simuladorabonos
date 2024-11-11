import React, { useEffect, useState, forwardRef } from "react";
import "../Estilos/servicio.css";
import { Paradas } from "./Paradas";
import { useEstadoservicio } from "../Hooks/useEstadoservicio";

export const Horario = forwardRef(
  (
    {
      horaSalida,
      recorrido,
      nombre,
      index,
      indiceDeBusqueda,
      claseNormalizadora,
      origen,
      destino,
      horaDeReferencia,
      codigo,
      diaAuto,
      grilla
    },
    ref
  ) => {
    const [minutosDif, setMinutosDif] = useState(null);
    const [horaSalidaEnMinutos, setHoraSalidaEnMInutos] = useState(null);
    const [lengthRecorrido, setLengthRecorrido] = useState(null);
    const [claseServicioReferido, setClaseServicioRefereido] = useState(
      "containerservicio serviciodereferencia"
    );
    const [claseServicioNoReferido, setClaseServicioNoRefereido] = useState(
      "containerservicio servicioopacoychico"
    );
    const [horas, setHoras] = useState(null);
    const [minutos, setMinutos] = useState(null)


    useEffect(() => {
      setHoraSalidaEnMInutos(
        Math.trunc(horaSalida) * 60 +
          (horaSalida - Math.trunc(horaSalida)) * 100
      );
      setMinutosDif(Math.round(horaSalidaEnMinutos - horaDeReferencia));
      setLengthRecorrido(recorrido.length);
    }, [
      horaSalida,
      horaSalidaEnMinutos,
      horaDeReferencia,
      recorrido,
    ]);

    useEffect(() => {
      if (claseNormalizadora !== null) {
        setClaseServicioNoRefereido(claseNormalizadora);
        setClaseServicioRefereido(claseNormalizadora);
      }
    }, [claseNormalizadora]);

    useEffect(()=> {
        let partes = nombre.split(":");
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);
        
        setHoras(horas);setMinutos(minutos)
    },[nombre]);

    const darFormatoHoraMinuto = elemento => {
      return elemento < 10 ? `0${elemento}` : elemento
    }

    const {estado} = useEstadoservicio(minutosDif)


    return (
      <div
        className={
          index === indiceDeBusqueda
            ? claseServicioReferido
            : claseServicioNoReferido
        }
        ref={ref}
      >
        <div className="container-panelIzquierdo">
          <p className="servicionombre">
            {darFormatoHoraMinuto(horas)}
          </p>
          <p className="servicionombre">
            {darFormatoHoraMinuto(minutos)}
          </p>
          <h3 className="servicionombre">HRS</h3>
        </div>
        <div className="container-panelDerecho">
          <div className="estadodelservicio">
            <p className="estado-titulo">{diaAuto ? 'Estado del servicio' : `grilla de ${grilla}`}</p>
            <p>{diaAuto ? estado : ''}</p>
          </div>
          <div className="container-recorrido">
          <img src={require('../Iconos/divider.png')} alt="" className="divisor-horario"/>
            <div className="container-paradas">
              {recorrido.map((parada, index) => (
                <Paradas
                  key={index}
                  nombre={parada}
                  index={recorrido.indexOf(parada)}
                  length={lengthRecorrido}
                  origen={origen}
                  destino={destino}
                />
              ))}
            </div>
          </div>
          <p className="texto-precioboleto">PRECIO DEL BOLETO $ {codigo}</p>
        </div>
      </div>
    );
  }
);
