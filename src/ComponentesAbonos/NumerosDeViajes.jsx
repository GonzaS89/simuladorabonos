import React, { useEffect, useState } from "react";
import "../Estilos/abonos.css";
import { FaCheckCircle } from "react-icons/fa";

export const NumerosDeViajes = ({
  numero,
  enviarNumViaje,
  viajesIngresados,
  inputFocus,
}) => {
  const [opcionSelec, setOpcionSelec] = useState(false);

  const clickEnNumViaje = () => {
    enviarNumViaje(parseInt(numero));
  };

  useEffect(() => {
    numero === viajesIngresados && viajesIngresados !== null
      ? setOpcionSelec(true)
      : setOpcionSelec(false);
      inputFocus && setOpcionSelec(false)
  }, [viajesIngresados, inputFocus, numero]);

  return (
    <div
      className={`${opcionSelec ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'} w-[50px]  h-[50px] rounded-full text-2xl grid place-items-center relative`}
      onClick={clickEnNumViaje}
    >
      {numero}
      <FaCheckCircle className={opcionSelec ? 'text-lg absolute -top-1 right-0' : 'hidden'}/>
    </div>
  );
};
