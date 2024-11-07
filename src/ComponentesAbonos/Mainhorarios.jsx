import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import grillab from "../grillasb.json";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from "react-router-dom";
import { ContainerHoraDia } from "../ComponentesHorarios/ContainerHoraDia";
import { useReturnDestinos } from "../Hooks/useReturnDestinos";
import { useHabilitarBoton } from "../Hooks/useHabilitarBoton";

export const Mainhorarios = ({ enviarParametrosHorarios }) => {
  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [hora, setHora] = useState(new Date().getHours());
  const [dia, setDia] = useState(new Date().getDay());
  useEffect(() => {
    const updateHoraMinutosDias = () => {
      setMinutos(new Date().getMinutes());
      setHora(new Date().getHours());
      setDia(new Date().getDay());
    };

    // Actualiza cada minuto
    const timerIdMinutes = setInterval(updateHoraMinutosDias, 1000);

    // También actualiza inmediatamente cuando el componente se monta
    updateHoraMinutosDias();

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timerIdMinutes);
  }, []);

  //
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const [listaHorarios, setListaHorarios] = useState([]);
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

  const recibirLocalidadDestino = (localidad) => {
    setLocalidadDestino(localidad);
    setListaHorarios([]);
  };

  const recibirVia = (via) => {
    setVia(via);
  };

  const [diaAuto, setDiaAuto] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [rangoDias, setRangoDias] = useState(null);
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

  const recibirDiaRango = (diarango) => {
    setDiaAuto(diarango);
  };

  const recibirDiaManual = (dia) => {
    setDiaManual(dia);
  };

  useEffect(() => {
    if (diaManual !== null) {
      setRangoDias(diaManual);
    } else {
      setRangoDias(diaAuto);
    }
  }, [diaAuto, diaManual]);

  useEffect(() => {
    switch (rangoDias) {
      case "lunesAViernes":
        setDiaDeLaSemana(grillab.lunesAViernes);
        break;

      case "sabados":
        setDiaDeLaSemana(grillab.sabados);
        break;

      case "domingos":
        setDiaDeLaSemana(grillab.domingos);
        break;

      default:
        break;
    }
  }, [rangoDias]);

  useEffect(() => {
    setVia(null);
  }, [localidadDestino]);

  useEffect(() => {
    if (diaDeLaSemana !== null) {
      const horariosFiltrados = [];
      diaDeLaSemana.forEach((horario) => {
        const recorrido = horario.recorrido;

        const incluyeOrigen = recorrido.includes(localidadOrigen);
        const incluyeDestino = recorrido.includes(localidadDestino);
        const indexOrigen = recorrido.indexOf(localidadOrigen);
        const indexDestino = recorrido.indexOf(localidadDestino);

        // Caso cuando 'via' es null
        if (via === null) {
          if (localidadOrigen === localidadDestino) {
            if (incluyeOrigen && recorrido.indexOf("s. m. de tucumán") !== 0) {
              horariosFiltrados.push(horario);
            }
          } else if (
            incluyeOrigen &&
            incluyeDestino &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' es 'w. posse'
        else if (via === "w. posse") {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            recorrido.includes(via) &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' no es 'w. posse'
        else {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            !recorrido.includes("w. posse") &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
      });

      // Actualiza el estado solo una vez con los horarios filtrados
      setListaHorarios(horariosFiltrados.sort((a, b) => a.salida - b.salida));
    }
  }, [localidadOrigen, localidadDestino, via, diaDeLaSemana]);

  const recibirHoraAutoMin = (hora) => {
    setHoraAutoMin(hora);
  };
  const recibirHoraManualMin = (hora) => {
    setHoraManualMin(hora);
  };

  return (
    <div className="container-screen">
      <div className="text-white overflow-hidden flex flex-col justify-between">
        <h1 className="titulo-principal">
          Consulta de horarios
        </h1>
        <div className="container-general-parametros">
        <div className="flex flex-col">
          <div className="flex flex-col px-2 gap-2">
            <h1 className="text-xl">Origen</h1>
            <div className="flex items-start gap-2">
              {localidades.map((localidad, index) => (
                <OpcionLocalidad
                  key={index}
                  nombre={localidad.nombre}
                  enviarLocalidad={recibirLocalidad}
                  localidadOrigen={localidadOrigen}
                />
              ))}
            </div>
          </div>
          <div className={localidadOrigen !== null ? 'flex flex-col px-2 gap-2' : 'hidden'}>
            <h1 className="text-xl">Destino</h1>
            <div className="flex items-start gap-2 uppercase text-sm">
              {arrayDestinos !== null &&
                arrayDestinos.map((localidad, index) => (
                  <OpcionLocalidadDestino
                    key={index}
                    nombre={localidad}
                    enviarLocalidadDestino={recibirLocalidadDestino}
                    localidadDestino={localidadDestino}
                    localidadOrigen={localidadOrigen}
                    enviarVia={recibirVia}
                  />
                ))}
            </div>
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
          />
          <Link to="/horarios">
            <div
              className={
                botonDisponible
                  ? "botonabonos botonenabled"
                  : "botonabonos botondisabled"
              }
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
