import React, { useEffect, useState } from "react";
import "../Estilos/abonos.css";
import { FaCheckCircle } from "react-icons/fa";
import { useHeight } from "../Hooks/useHeight";
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

  const {hLg} = useHeight()

  return (
         <div
      className={`${tarifaClickeada ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'} uppercase ${hLg ? 'h-12 w-36 text-xl' : 'h-8 w-28'} rounded-md  grid place-items-center relative`}
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
