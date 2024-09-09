import React, { useState, useEffect } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";
import { Opcionvia } from "./Opcionvia";

export const OpcionLocalidadDestino = ({
  nombre,
  enviarLocalidadDestino,
  localidadDestino,
  localidadOrigen,
  enviarVia,
}) => {
  const [localidadClickeada, setLocalidadClickeada] = useState(false);
  const [nombreOpcionVia, setNombreOpcionVia] = useState(null);
  const [opcionesViasVisibles, setOpcionesViasVisibles] = useState(false);
  const [confirmacionSeleccion, setConfirmacionSeleccion] = useState(false);
  const [via, setVia] = useState(null);

  const clickearImg = () => {
    enviarLocalidadDestino(nombre);
    setVia(null)
  };
  useEffect(() => {
    if (localidadDestino === nombre) {
      setLocalidadClickeada(true);
      setConfirmacionSeleccion(true);
    } else {
      setLocalidadClickeada(false);
      setConfirmacionSeleccion(false);
    }

    nombre === "banda del río salí"
      ? setNombreOpcionVia("alderetes")
      : setNombreOpcionVia("ald./alter.");
    if (
      localidadOrigen === "la florida" ||
      localidadOrigen === "fortín" ||
      localidadOrigen === "colonia 4 (luisiana"
    ) {
      if (nombre === localidadDestino) {
        if (
          localidadDestino === "san miguel de tucumán" ||
          localidadDestino === "banda del río salí"
        ) {
          setOpcionesViasVisibles(true);
          setConfirmacionSeleccion(false);
        }
      }
    }

    if (localidadOrigen === "san miguel de tucumán") {
      if (nombre === localidadDestino) {
        if (
          localidadDestino === "la florida" ||
          localidadDestino === "fortín" ||
          localidadDestino === "colonia 4 (luisiana)"
        ) {
          setOpcionesViasVisibles(true);
          setConfirmacionSeleccion(false);
          setNombreOpcionVia("ald./alter.");
        }
      }
    }
    if (localidadOrigen === "banda del río salí") {
      if (nombre === localidadDestino) {
        if (
          localidadDestino === "la florida" ||
          localidadDestino === "fortín" ||
          localidadDestino === "colonia 4 (luisiana)"
        ) {
          setOpcionesViasVisibles(true);
          setConfirmacionSeleccion(false);
          setNombreOpcionVia("alderetes");
        }
      }
    }
    if (localidadOrigen === "colonia 4 (luisiana)") {
      if (nombre === localidadDestino) {
        if (localidadDestino === "san miguel de tucumán") {
          setOpcionesViasVisibles(true);
          setConfirmacionSeleccion(false);
          setNombreOpcionVia("ald./alter.");
        }
        if (localidadDestino === "banda del río salí") {
          setOpcionesViasVisibles(true);
          setConfirmacionSeleccion(false);
          setNombreOpcionVia("alderetes");
        }
      }
    }
  }, [localidadDestino, localidadOrigen, nombre]);

  useEffect(() => {
    setLocalidadClickeada(false);
  }, [localidadOrigen]);

  useEffect(() => {
    !localidadClickeada && setOpcionesViasVisibles(false);
  }, [localidadClickeada]);

  const recibirVia = (via) => {
    setVia(via);
    enviarVia(via);
  };

  return (
    <div className="container-salida-localidad" onClick={clickearImg}>
      <div className="imagen-localidad-opcion">
        <img
          src={require(`../IMG/${nombre}.avif`)}
          alt=""
          className={localidadClickeada ? "sombrearImg" : ""}
        />
        <FaCheckCircle
          className={
            confirmacionSeleccion
              ? "icono-checked mostrarIconoCheked"
              : "icono-checked hidden"
          }
        />
        <div
          className={
            opcionesViasVisibles
              ? "container-opciones-vias"
              : "container-opciones-vias hidden"
          }
        >
          <Opcionvia
            nombre={nombreOpcionVia}
            enviarVia={recibirVia}
            viaElegida={via}
            localidadDestino={localidadDestino}
          />
          <Opcionvia
            nombre={"w. posse"}
            enviarVia={recibirVia}
            viaElegida={via}
            localidadDestino={localidadDestino}
          />
        </div>
      </div>
      <p>{nombre}</p>
    </div>
  );
};
