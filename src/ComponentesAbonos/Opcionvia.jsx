import React, { useState, useEffect } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";

export const Opcionvia = ({ nombre, enviarVia, viaElegida, localidadDestino }) => {
  const [botonPresionado, setBotonPresionado] = useState(false);

  const manejoDeBoton = () => {
    enviarVia(nombre);
    setBotonPresionado(true)
  };

  useEffect(() => {
    viaElegida === nombre
      ? setBotonPresionado(true)
      : setBotonPresionado(false);
  }, [viaElegida, nombre]);

  useEffect(() => {
    setBotonPresionado(false)
  },[localidadDestino])

  useEffect(() => {
  },[viaElegida])

  return (
    <p
      className={
        botonPresionado
          ? "texto-opcion-vias opcionSeleccionada"
          : "texto-opcion-vias"
      }
      onClick={manejoDeBoton}
    >
      {nombre}
      <FaCheckCircle className={botonPresionado ? 'icono-check-tarifa' : 'hidden'}/>
    </p>
  );
};
