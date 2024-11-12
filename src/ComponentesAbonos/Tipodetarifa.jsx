import React, { useEffect, useState } from "react";
import "../Estilos/abonos.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const Tipodetarifa = ({ tarifa, enviarTarifa, tarifaElegida }) => {
  const [tarifaClickeada, setTarifaClickeada] = useState(false);

  const clickTarifa = () => {
    enviarTarifa(tarifa);
  };

  useEffect(() => {
    tarifaElegida === tarifa
      ? setTarifaClickeada(true)
      : setTarifaClickeada(false);
  }, [tarifaElegida, tarifa]);

  return (
         <div
      className={`${tarifaClickeada ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'} uppercase h-12 w-36 text-xl rounded-md  grid place-items-center relative`}
      onClick={clickTarifa}
    >
      {tarifa} 
  <motion.div
      initial={{scale:0}}
      animate={{scale: tarifaClickeada ? 1 : 0}}
      transition={{duration: 1,  ease:'backOut'}}
      className={tarifaClickeada ? 'text-lg absolute -top-2 -right-1' : 'hidden'}>
  <FaCheckCircle />
  </motion.div>
      
    </div>
  );
};
