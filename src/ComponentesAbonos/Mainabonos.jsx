import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { useReturnDestinos } from "../Hooks/useReturnDestinos";

export const Mainabonos = ({ enviarParametrosAbonos }) => {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const { arrayDestinos } = useReturnDestinos(localidadOrigen)

  useEffect(() => { tarifaElegida ? setBotonDisponible(true) : setBotonDisponible(false); }, [tarifaElegida]);

  const recibirLocalidad = (localidad) => { setLocalidadOrigen(localidad); };
  const recibirLocalidadDestino = (localidad) => { setLocalidadDestino(localidad); };
  const recibirVia = via => { setVia(via) }

  useEffect(() => {
    setVia(null)
  }, [localidadDestino])

  const recibirTarifaElegida = tarifa => { setTarifaElegida(tarifa) }
  const recibirViajesIngresados = viajes => { setViajesIngresados(viajes) }

  return (
    <div className="container-screen">
      <div className="text-white overflow-hidden relative">
        <h1 className="titulo-principal">Calculá el precio de tu abono</h1>
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
        <Containerviajestarifas enviarTarifaElegida={recibirTarifaElegida} enviarViajesIngresados={recibirViajesIngresados} localidadDestino={localidadDestino} />
        <Link to='/cotizacion'>
          <div className={botonDisponible ? 'py-4 uppercase text-2xl botonenabled' : 'py-4 uppercase text-2xl botondisabled'} onClick={() => enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via)}>calcular</div>
        </Link>
      </div>
    </div>
  )
}
