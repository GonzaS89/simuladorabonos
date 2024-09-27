import React, { useEffect, useState, forwardRef } from "react";
import "../Estilos/servicio.css";
import { Paradas } from "./Paradas";

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
      codigo
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

    const definirMensaje = () => {
      if(minutosDif < -90){
        return 'Inactivo'
      }
      else if (minutosDif < -60) {
        return "Inició recorrido hace mas de una hora";
      }
      else if (minutosDif < -30 && minutosDif > -60) {
        return "Inició recorrido hace media hora";
      }
      else if (minutosDif >= -30 && minutosDif < 0) {
        return `Inició recorrido hace ${Math.abs(minutosDif)} minutos`;
      }
      else if (minutosDif === 0) {
        return "Está iniciando recorrido";
      }
      else if (minutosDif > 0 && minutosDif <= 3) {
        return "Pronto iniciará su recorrido";
      }
      else if (minutosDif === 60) {
        return "Iniciará recorrido en una hora";
      }
      else if (minutosDif > 60 && minutosDif <= 90) {
        return "Iniciará su recorrido en poco más de una hora";
      }
      else if (minutosDif > 90 && minutosDif < 120) {
        return "Iniciará su recorrido en poco menos de dos horas";
      }
      else if (minutosDif > 120) {
        return "inactivo";
      }
    };

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
            <p className="estado-titulo">ESTADO DEL SERVICIO</p>
            <p>{definirMensaje()}</p>
          </div>
          <div className="container-recorrido">
            <div className="container-paradas">
              {recorrido.map((parada) => (
                <Paradas
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
