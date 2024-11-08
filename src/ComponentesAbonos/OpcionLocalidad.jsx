import React, { useEffect, useState } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";

export const OpcionLocalidad = ({
  nombre,
  enviarLocalidad,
  localidadOrigen,
}) => {
  const [localidadClickeada, setLocalidadClickeada] = useState(false);

  const clickearImg = () => {
    enviarLocalidad(nombre);
  };

  useEffect(() => {
    localidadOrigen === nombre
      ? setLocalidadClickeada(true)
      : setLocalidadClickeada(false);
  }, [localidadOrigen, nombre]);

  return (
    <div className= 'h-28' onClick={clickearImg}>
      <div className="flex justify-center items-center relative w-[80px] h-[80px] overflow-hidden rounded-3xl cursor-pointer">
        <img
          src={require(`../IMG/${nombre}.avif`)}
          alt=""
          className={localidadClickeada ? "sombrearImg" : ""}
        />
        <FaCheckCircle
          className={
            localidadClickeada
              ? "icono-checked mostrarIconoCheked"
              : "icono-checked hidden"
          }
        />
      </div>
      <p className="uppercase">{nombre}</p>
    </div>
  );
};
