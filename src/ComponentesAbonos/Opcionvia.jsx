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
      className={`${botonPresionado ? 'bg-red-700 text-white' : 'bg-gray-200 text-black'} w-[65px] h-[25px] rounded-md relative grid place-items-center`}
      onClick={manejoDeBoton}
    >
      {nombre}
      <FaCheckCircle className={botonPresionado ? 'text-xs absolute -top-1 right-0' : 'hidden'}/>
    </p>
  );
};
