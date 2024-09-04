// import "./App.css";
import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import "../Estilos/abonos.css";
import Puntos from "../ComponentesAbonos/Puntos";
import Cantidaddeviajes from "../ComponentesAbonos/Cantidaddeviajes";
import Categorias from "../ComponentesAbonos/Categorias";
import Cotizador from "../ComponentesAbonos/Resultadocotizacion";
import Listalocalidades from "../ComponentesAbonos/Listadelocalidades";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { NumerosDeViajes } from "../ComponentesAbonos/NumerosDeViajes";
import { Tipodetarifa } from "../ComponentesAbonos/Tipodetarifa";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CotizacionAbonos } from "../ComponentesAbonos/CotizacionAbonos";

const Abonos = () => {
  const [origenODestino, setOrigenODestino] = useState(null);
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [categoriaRecibida, setCategoriaRecibida] = useState("");
  const [listaLocDestino, setListaLocDestino] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [tarifaElegida, setTarifaElegida] = useState(null);

  const listaVacia = ['','', '','',]

  const recibirConfirmacionDeMenuDesplegado = (condicion) => {
    setMenuDesplegado(condicion);
  };

  const puntoElegido = (punto) => {
    setOrigenODestino(punto);
  };

  const OcultarMenuLocalidades = () => {
    setMenuDesplegado(false);
  };

  useEffect(() => {
    localidadOrigen !== null && setMenuDesplegado(false);
    localidadDestino !== null && setMenuDesplegado(false);
    switch (localidadOrigen) {
      case "la florida":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "alderetes",
          "banda del rio sali",
          "san miguel de tucuman",
          "el paraiso",
          "llona",
          "cevil pozo",
          "colonia 4 (luisiana)",
          "fortin",
          "el talar",
        ]);
        break;

      case "w. posse":
        setListaLocDestino([
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
          "la florida",
          "fortin",
        ]);
        break;

      case "el paraiso":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "colonia 4 (luisiana)":
        setListaLocDestino([
          "la florida",
          "el paraiso",
          "w. posse",
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "los ralos":
        setListaLocDestino([
          "los ralos",
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "cruz alta":
        setListaLocDestino([
          "cruz alta",
          "los ralos",
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "el talar":
        setListaLocDestino([
          "la florida",
          "colonia 4 (luisiana)",
          "alderetes",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "cevil pozo":
        setListaLocDestino([
          "llona",
          "los ralos",
          "las cejas",
          "w. posse",
          "el paraiso",
          "la florida",
          "colonia 4 (luisiana)",
          "fortin",
        ]);
        break;

      case "fila de la orilla":
        setListaLocDestino([
          "w. posse",
          "el paraiso",
          "la florida",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "fila del medio":
        setListaLocDestino([
          "w. posse",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "las cejas":
        setListaLocDestino([
          "las cejas",
          "los ralos",
          "llona",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;

      case "llona":
        setListaLocDestino([
          "w. posse",
          "el paraiso",
          "la florida",
          "colonia 4 (luisiana)",
          "cevil pozo",
          "banda del rio sali",
          "san miguel de tucuman",
        ]);
        break;
      case "7 de abril":
        setListaLocDestino(["banda del rio sali", "san miguel de tucuman"]);
        break;

      case "san miguel de tucuman":
        setListaLocDestino([
          "la florida",
          "w. posse",
          "los ralos",
          "cevil pozo",
          "el paraiso",
          "alderetes",
          "el talar",
          "banda del rio sali",
          "fila del medio",
          "fila de la orilla",
          "fortin",
          "colonia 4 (luisiana)",
          "fortin",
          "7 de abril",
          "las cejas",
          "la marta",
          "finca mayo",
        ]);

      default:
        break;
    }
  }, [localidadOrigen, localidadDestino]);

  const recepcionLocalidad = (localidad) => {
    origenODestino === "origen"
      ? setLocalidadOrigen(localidad)
      : setLocalidadDestino(localidad);
  };

  const recibirNumViaje = (viajes) => {
    setViajesIngresados(viajes);
    setInputFocus(false);
  };

  useEffect(() => {
    menuDesplegado && setViajesIngresados(0);
  }, [menuDesplegado]);

  const recibirCategoria = (categoria) => {
    setCategoriaRecibida(categoria);
  };

  const recibirLocalidad = (localidad) => {
    setLocalidadOrigen(localidad);
  };

  const recibirLocalidadDestino = (localidad) => {
    setLocalidadDestino(localidad);
  };

  const recibirNumViajeInput = (e) => {
    setViajesIngresados(parseInt(e.target.value));
  };

  const recibirTarifa = (tarifa) => {
    setTarifaElegida(tarifa);
  };

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
                tarifa={"Empleados"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              <Tipodetarifa
                tarifa={"Estudiantes"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
            </div>
          </div>
                </div>
          
          
          {/* <Puntos
                        listaDeLocalidadesDesplegada={recibirConfirmacionDeMenuDesplegado}
                        nombre={'origen'}
                        puntoElegido={puntoElegido}
                        origenODestino={origenODestino}
                        localidadOrigen={localidadOrigen} />
                    <Puntos
                        listaDeLocalidadesDesplegada={recibirConfirmacionDeMenuDesplegado}
                        nombre={'destino'}
                        puntoElegido={puntoElegido}
                        origenODestino={origenODestino}
                        localidadDestino={localidadDestino} /> */}
        
        {/* <Cantidaddeviajes
                    viajesIngresados={recibirViajesIngresados}
                    menuDesplegado={menuDesplegado} /> */}
        {/* <Categorias
                    categoriaSeleccionada={recibirCategoria} /> */}
        <Cotizador
          enviarViajesIngresados={viajesIngresados}
          localidadOrigen={localidadOrigen}
          localidadDestino={localidadDestino}
          categoria={categoriaRecibida}
        />
      </div>
          <div className="botonabonos">Calcular</div>
      <Listalocalidades
        menuDesplegado={menuDesplegado}
        puntoElegido={origenODestino}
        localidadObtenida={recepcionLocalidad}
      />
      <CotizacionAbonos numViajes={viajesIngresados}/>
      <div
        className={
          menuDesplegado ? "pantalla-difuminada mostrar" : "pantalla-difuminada"
        }
        onClick={OcultarMenuLocalidades}
      ></div>
    </div>
    
  );
};

export default Abonos;
