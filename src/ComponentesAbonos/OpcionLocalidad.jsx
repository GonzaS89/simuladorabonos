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

  const {hMd,hLg} = useHeight();

  const imgSize = () => {
    if(hMd){return 'w-[55px] h-[55px]'}
    else if(hLg){return 'w-[70px] h-[70px]' }
  }

  const textSize = () => {
    if(hMd){return 'text-[10px]'}
    else if(hLg){return 'text-xs'}
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
   onClick={clickearImg}>
      <div className={`"flex relative ${imgSize()} overflow-hidden rounded-3xl cursor-pointer`}>
        <img
          src={require(`../IMG/${nombre}.avif`)}
          alt=""
          className={`${localidadClickeada ? "sombrearImg" : '' } absolute`}
        />
        <motion.div 
        initial={{opacity: 0, scale:0}}
        animate={{opacity: localidadClickeada ? 1 : 0, scale: localidadClickeada ? 1:0}}
        transition={{duration: .5, ease:'backOut'}}
        className="w-full h-full flex items-center justify-center">
        <FaCheckCircle
          className='text-4xl z-50'
        />
        </motion.div>
      </div>
      <p className={`uppercase ${textSize()}`}>{nombre}</p>
    </motion.div>
  );
};
