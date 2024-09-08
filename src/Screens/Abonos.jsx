// import "./App.css";
import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { NumerosDeViajes } from "../ComponentesAbonos/NumerosDeViajes";
import { Tipodetarifa } from "../ComponentesAbonos/Tipodetarifa";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from 'react-router-dom';

const Abonos = ({enviarParametrosAbonos}) => {
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [listaLocDestino, setListaLocDestino] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [listaOrigenDestino, setListaOrigenDestino] = useState([]);
  const [via, setVia] = useState(null);



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
      default:
        break;
    }
    localidadOrigen !== null && localidadDestino !== null && viajesIngresados !== null && tarifaElegida !== null ? setBotonDisponible(true) : setBotonDisponible(false);
  }, [localidadOrigen, localidadDestino, viajesIngresados,tarifaElegida]);

  const recibirNumViaje = (viajes) => {
    setViajesIngresados(viajes);
    setInputFocus(false);
  };

  const recibirLocalidad = (localidad) => {
    setLocalidadOrigen(localidad);
    setListaOrigenDestino([localidad, ...listaOrigenDestino])
  };

  const recibirLocalidadDestino = (localidad) => {
    setLocalidadDestino(localidad);
    setListaOrigenDestino([localidad, ...listaOrigenDestino])
  };

  const recibirNumViajeInput = (e) => {
    setViajesIngresados(parseInt(e.target.value));
  };

  const recibirTarifa = (tarifa) => {
    setTarifaElegida(tarifa);
  };

  const recibirVia = via => {setVia(via);}

  return (
    <div className="container-screen">
      <div className="container-principal">
        <div className="logo-fondo"></div>
        <h1 className="titulo-principal">Calculá el precio de tu abono</h1>
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
        <div className="container-viajes-tarifa">
          <div className="cantidaddeviajes">
            <h1>Cantidad de viajes</h1>
            <div className="container-principal-numviajes">
              <div className="container-opciones-viajes">
                <NumerosDeViajes
                  numero={8}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={16}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={22}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={44}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
              </div>
              <div className="opcion-viajes-manual">
                <input
                  className="container-viajes"
                  type="num"
                  placeholder="¿...?"
                  onChange={recibirNumViajeInput}
                  onFocus={() => setInputFocus(true)}
                />
              </div>
            </div>
          </div>
          <div className="container-tipodetarifa">
            <h1>Tipo de tarifa</h1>
            <div className="container-categoriatarifa">
              <Tipodetarifa
                tarifa={"empleados"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              <Tipodetarifa
                tarifa={"estudiantes"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
            </div>
          </div>
        </div>
  
      </div>
      <Link to="/cotizacion">
        <div className={botonDisponible ? 'botonabonos botonenabled' : 'botonabonos botondisabled'} onClick={enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados,tarifaElegida,listaOrigenDestino,via)}>Calcular</div>
      </Link>
    </div>

  );
};

export default Abonos;
