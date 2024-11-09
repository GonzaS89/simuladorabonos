import React, { useEffect, useState } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const OpcionLocalidad = ({
  nombre,
  enviarLocalidad,
  localidadOrigen,
  index
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
    <motion.div 
    initial={{y: '20%', opacity:0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration:.5,  delay: index * .2, ease:'backOut'}}
    className= 'h-28' onClick={clickearImg}>
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
      <p className="uppercase text-sm">{nombre}</p>
    </motion.div>
  );
};
