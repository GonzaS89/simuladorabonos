// import "./App.css";
import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import grillab from '../grillasb.json';
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { ContainerHoraDia } from "../ComponentesHorarios/ContainerHoraDia";

const Abonos = ({ enviarParametrosAbonos, keyBoton }) => {

  // SECTOR HORARIOS

  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [hora, setHora] = useState(new Date().getHours());
  const [dia, setDia] = useState(new Date().getDay());

  useEffect(() => {
    const updateHoraMinutosDias = () => {
      setMinutos(new Date().getMinutes());
      setHora(new Date().getHours());
      setDia(new Date().getDay())
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
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [listaLocDestino, setListaLocDestino] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [listaOrigenDestino, setListaOrigenDestino] = useState([]);
  const [via, setVia] = useState(null);
  const [listaHorarios, setListaHorarios] = useState([]);



  useEffect(() => {
    switch (localidadOrigen) {
      case "la florida":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "alderetes",
          "banda del río salí",
          "san miguel de tucumán",
          "el paraíso",
          "cevil pozo",
          "colonia 4 (luisiana)",
          "fortín",
          "el talar",
        ]);
        break;

      case "w. posse":
        setListaLocDestino([
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
          "la florida",
          "el paraíso",
          "colonia 4 (luisiana)",
          "fortín",
        ]);
        break;

      case "el paraíso":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "colonia 4 (luisiana)":
        setListaLocDestino([
          "la florida",
          "el paraíso",
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "los ralos":
        setListaLocDestino([
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "cruz alta":
        setListaLocDestino([
          "cruz alta",
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "el talar":
        setListaLocDestino([
          "la florida",
          "colonia 4 (luisiana)",
          "alderetes",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "fortín":
        setListaLocDestino([
          "w. posse",
          "el paraíso",
          "alderetes",
          "el talar",
          "la florida",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "cevil pozo":
        setListaLocDestino([
          "los ralos",
          "las cejas",
          "w. posse",
          "el paraíso",
          "la florida",
          "colonia 4 (luisiana)",
          "fortín",
        ]);
        break;

      case "fila de la orilla":
        setListaLocDestino([
          "w. posse",
          "el paraíso",
          "la florida",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "fila del medio":
        setListaLocDestino([
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "las cejas":
        setListaLocDestino([
          "las cejas",
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "san miguel de tucumán",
        ]);
        break;

      case "7 de abril":
        setListaLocDestino(["banda del río salí", "san miguel de tucumán"]);
        break;

      case "san miguel de tucumán":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "los ralos",
          "cevil pozo",
          "el paraíso",
          "alderetes",
          "el talar",
          "banda del río salí",
          "fila del medio",
          "fila de la orilla",
          "fortín",
          "colonia 4 (luisiana)",
          "7 de abril",
          "las cejas",
          "la marta",
          "finca mayo",
        ]);
        break;

      case "alderetes":
        setListaLocDestino([
          "la florida",
          "el talar",
          "fortín",
          "colonia 4 (luisiana)",
          "la marta",
          "finca mayo",
        ]);
        break;

      case "banda del río salí":
        setListaLocDestino([
          "la florida",
          "el paraíso",
          "w. posse",
          "fortín",
          "alderetes",
          "colonia 4 (luisiana)",
        ]);
        break;

      case "alabama":
        setListaLocDestino([
          "los ralos",
          "cevil pozo",
          "finca mayo",
          "banda del río salí",
          "san miguel de tucumán"
        ]);
        break;
      default:
        break;
    }
    const esLocalidadDestinoValida = localidadDestino === 'san miguel de tucumán' || localidadDestino === 'banda del río salí';
    const camposCompletos = localidadOrigen !== null && localidadDestino !== null && viajesIngresados !== null && tarifaElegida !== null;

    if (esLocalidadDestinoValida ? camposCompletos && via !== null : camposCompletos) {
      setBotonDisponible(true);
    } else {
      setBotonDisponible(false);
    }

    console.log(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida)

  }, [localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via]);

  const recibirLocalidad = (localidad) => {
    setLocalidadOrigen(localidad);
    setListaOrigenDestino([localidad, ...listaOrigenDestino])
  };

  const recibirLocalidadDestino = (localidad) => {
    setLocalidadDestino(localidad);
    setListaOrigenDestino([localidad, ...listaOrigenDestino])
    setListaHorarios([])
  };


  const recibirVia = via => { setVia(via) }

  useEffect(() => {
    setVia(null)
  }, [localidadDestino])

  const recibirTarifaElegida = tarifa => { setTarifaElegida(tarifa) }
  const recibirViajesIngresados = viajes => { setViajesIngresados(viajes) }

  useEffect(() => {
    (grillab.lunesAViernes).map(horario => {
      const recorrido = horario.recorrido
      if (via === 'w. posse') {
        if ((recorrido.includes(localidadOrigen) &&
          recorrido.includes(localidadDestino))) {
          if (recorrido.includes(via)) {
            if (recorrido.indexOf(localidadOrigen) < recorrido.indexOf(localidadDestino)) {
              { setListaHorarios(prevListaHorarios => [...prevListaHorarios, horario]) }
            }
          }
        }

      }
      else if (via !== 'w. posse') {
        if ((recorrido.includes(localidadOrigen) &&
          recorrido.includes(localidadDestino))) {
          if (!recorrido.includes('w. posse')) {
            if (recorrido.indexOf(localidadOrigen) < recorrido.indexOf(localidadDestino)) {
              { setListaHorarios(prevListaHorarios => [...prevListaHorarios, horario]) }
            }
          }
        }
      }
      else{
        if ((recorrido.includes(localidadOrigen) &&
          recorrido.includes(localidadDestino))){        
            if (recorrido.indexOf(localidadOrigen) < recorrido.indexOf(localidadDestino)) {
              { setListaHorarios(prevListaHorarios => [...prevListaHorarios, horario]) }
            }
          }
        }
    })
  }, [localidadOrigen, localidadDestino, via])

  useEffect(() => {
    console.log(listaHorarios)
  }, [listaHorarios])


  return (
    <div className="container-screen">
      <div className="container-principal">
        <div className="logo-fondo"></div>
        <h1 className="titulo-principal">{keyBoton === 'abonos' ? 'Calculá el precio de tu abono' : 'Consulta de horarios'}</h1>
        <div className="container-general-parametros">
          <div className="container-origendestino">
            <div className="container-salida">
              <h1 className="titulo-container-salida">Origen</h1>
              <div className="container-opciones-salida">
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
            <div className={localidadOrigen !== null ? 'container-destino' : 'hidden'}>
              <h1 className="titulo-container-salida">Destino</h1>
              <div className="container-opciones-salida">
                {listaLocDestino !== null &&
                  listaLocDestino.map((localidad, index) => (
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
          {keyBoton === 'abonos' ?
            <Containerviajestarifas enviarTarifaElegida={recibirTarifaElegida} enviarViajesIngresados={recibirViajesIngresados} localidadOrigen={localidadOrigen} /> :
            <ContainerHoraDia hora={hora} minutos={minutos} dia={dia} localidadOrigen={localidadOrigen} />}
        </div>
      </div>
      <Link to="/cotizacion">
        <div className={botonDisponible ? 'botonabonos botonenabled' : 'botonabonos botondisabled'} onClick={enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, listaOrigenDestino, via)}>{keyBoton === 'abonos' ? 'calcular' : 'consultar'}</div>
      </Link>
    </div>

  );
};

export default Abonos;
