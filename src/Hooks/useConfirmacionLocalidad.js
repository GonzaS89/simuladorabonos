import { useState,useEffect } from "react";

export const useConfirmacionLocalidad = (origen,destino,nombre) => {

    const [localidadClickeada, setLocalidadClickeada] = useState(false);
    const [nombreOpcionVia, setNombreOpcionVia] = useState(null);
    const [opcionesViasVisibles, setOpcionesViasVisibles] = useState(false);
    const [confirmacionSeleccion, setConfirmacionSeleccion] = useState(false);

    useEffect(() => {
        if (destino === nombre) {
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
          origen === "la florida" ||
          origen === "fortín" ||
          origen === "colonia 4 (luisiana"
        ) {
          if (nombre === destino) {
            if (
              destino === "s. m. de tucumán" ||
              destino === "banda del río salí"
            ) {
              setOpcionesViasVisibles(true);
              setConfirmacionSeleccion(false);
            }
          }
        }
    
        if (origen === "s. m. de tucumán") {
          if (nombre === destino) {
            if (
              destino === "la florida" ||
              destino === "fortín" ||
              destino === "colonia 4 (luisiana)"
            ) {
              setOpcionesViasVisibles(true);
              setConfirmacionSeleccion(false);
              setNombreOpcionVia("ald./alter.");
            }
          }
        }
        if (origen === "banda del río salí") {
          if (nombre === destino) {
            if (
              destino === "la florida" ||
              destino === "fortín" ||
              destino === "colonia 4 (luisiana)"
            ) {
              setOpcionesViasVisibles(true);
              setConfirmacionSeleccion(false);
              setNombreOpcionVia("alderetes");
            }
          }
        }
        if (origen === "colonia 4 (luisiana)") {
          if (nombre === destino) {
            if (destino === "s. m. de tucumán") {
              setOpcionesViasVisibles(true);
              setConfirmacionSeleccion(false);
              setNombreOpcionVia("ald./alter.");
            }
            if (destino === "banda del río salí") {
              setOpcionesViasVisibles(true);
              setConfirmacionSeleccion(false);
              setNombreOpcionVia("alderetes");
            }
          }
        }
      }, [destino, origen, nombre]);
  return {localidadClickeada,
    nombreOpcionVia,
    opcionesViasVisibles,
    confirmacionSeleccion}
}
