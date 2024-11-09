import React, { useEffect, useState } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useHeight } from "../Hooks/useHeight";

export const OpcionLocalidad = ({
  nombre,
  enviarLocalidad,
  localidadOrigen,
  index
}) => {

  const {height} = useHeight;

  const definirTamañoImg = () => {
    if(height > 800){return 'w-[80px] h-[80px]' }
    else{return 'w-[60px] h-[60px]'}
  }
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
   onClick={clickearImg}
   className="h-20">
      <div className={`"flex justify-center items-center relative ${definirTamañoImg()} overflow-hidden rounded-3xl cursor-pointer`}>
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
