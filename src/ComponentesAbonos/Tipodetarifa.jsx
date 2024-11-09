import React, { useEffect, useState } from "react";
import "../Estilos/abonos.css";
import { FaCheckCircle } from "react-icons/fa";

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
      className={`${tarifaClickeada ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'} uppercase w-36 h-12 rounded-md text-xl grid place-items-center relative`}
      onClick={clickTarifa}
    >
      {tarifa} 
      <FaCheckCircle className={tarifaClickeada ? 'text-lg absolute -top-1 -right-1' : 'hidden'}/>
    </div>
  );
};
