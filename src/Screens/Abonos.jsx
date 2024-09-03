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

const Abonos = () => {
  const [origenODestino, setOrigenODestino] = useState(null);
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [categoriaRecibida, setCategoriaRecibida] = useState("");
  const [listaLocDestino, setListaLocDestino] = useState(['cruz alta']);

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

      case 'la florida':
        setListaLocDestino(['la florida', 'w. posse', 'alderetes', 'banda del rio sali', 'san miguel de tucuman', 'el paraiso', 'llona', 'cevil pozo', 'colonia 4 (luisiana)', 'fortin', 'el talar']);
        break;

      case 'w. posse':
        setListaLocDestino(['llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman', 'la florida', 'fortin']);
        break;

      case 'el paraiso':
        setListaLocDestino(['la florida', 'w. posse', 'llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
        break;

      case 'colonia 4 (luisiana)':
        setListaLocDestino(['la florida', 'el paraiso', 'w. posse', 'llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
        break;

      case 'los ralos':
        setListaLocDestino(['los ralos', 'llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
        break;

      case 'cruz alta':
        setListaLocDestino(['cruz alta', 'los ralos', 'llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
        break;

      case 'el talar':
        setListaLocDestino(['la florida', 'colonia 4 (luisiana)', 'alderetes', 'banda del rio sali', 'san miguel de tucuman'])
        break;

      case 'cevil pozo':
        setListaLocDestino(['llona', 'los ralos', 'las cejas', 'w. posse', 'el paraiso', 'la florida', 'colonia 4 (luisiana)', 'fortin']);
        break

        case 'fila de la orilla':
          setListaLocDestino(['w. posse', 'el paraiso', 'la florida', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman'])
          break;

        case 'fila del medio':
          setListaLocDestino(['w. posse','cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
          break;

         case 'las cejas' :
          setListaLocDestino(['las cejas', 'los ralos', 'llona', 'cevil pozo', 'banda del rio sali', 'san miguel de tucuman']);
          break;
         
        case 'llona':
          setListaLocDestino(['w. posse', 'el paraiso', 'la florida','colonia 4 (luisiana)', 'cevil pozo', 'banda del rio sali','san miguel de tucuman']);
          break;
          case '7 de abril':
            setListaLocDestino(['banda del rio sali', 'san miguel de tucuman'])
            break

          default:break;
    }
  }, [localidadOrigen, localidadDestino]);

  const recepcionLocalidad = (localidad) => {
    origenODestino === "origen"
      ? setLocalidadOrigen(localidad)
      : setLocalidadDestino(localidad);
  };

  const recibirViajesIngresados = (viajes) => {
    setViajesIngresados(viajes);
  };

  useEffect(() => {
    menuDesplegado && setViajesIngresados(0);
  }, [menuDesplegado]);

  const recibirCategoria = (categoria) => {
    setCategoriaRecibida(categoria);
  };

  const recibirLocalidad = localidad => {
    setLocalidadOrigen(localidad);
  };

  return (
    <div className="container-screen">
      <div className="container-principal">
        <h1 className="titulo-principal">Calculá el precio de tu abono</h1>
        <div className="container-salida">
          <h1 className="titulo-container-salida">Origen</h1>
          <div className="container-opciones-salida">
            {localidades.map((localidad, index) => (
              <OpcionLocalidad key={index} nombre={localidad.nombre} enviarLocalidad={recibirLocalidad} />
            ))}
          </div>
          <h1 className="titulo-container-salida">Destino</h1>
          <div className="container-opciones-salida">
            {listaLocDestino.map((localidad, index) => (
              <OpcionLocalidad key={index} nombre={localidad} />
            ))}
          </div>
          <div className="cantidaddeviajes">
            <h1>Cantidad de viajes</h1>
            <div className="container-principal-numviajes">
              <div className="container-opciones-viajes">
                <NumerosDeViajes numero={8} />
                <NumerosDeViajes numero={16} />
                <NumerosDeViajes numero={22} />
                <NumerosDeViajes numero={44} />
              </div>
              <div className="opcion-viajes-manual">
                <input
                  className="container-viajes"
                  type="num"
                  placeholder="¿...?"
                />
              </div>
            </div>
          </div>
          <div className="container-tipodetarifa">
            <h1>Tipo de tarifa</h1>
            <div className="container-categoriatarifa">
              <Tipodetarifa tarifa={"Empleados"} />
              <Tipodetarifa tarifa={"Estudiantes"} />
            </div>
          </div>
          <div className="botonabonos">Calcular</div>
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
        </div>
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
      <Listalocalidades
        menuDesplegado={menuDesplegado}
        puntoElegido={origenODestino}
        localidadObtenida={recepcionLocalidad}
      />
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
