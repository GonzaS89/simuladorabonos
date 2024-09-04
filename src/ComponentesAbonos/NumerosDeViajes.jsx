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
      className={
        opcionSelec
          ? "container-viajes opcionSeleccionada"
          : "container-viajes"
      }
      onClick={clickEnNumViaje}
    >
      {numero}
      <FaCheckCircle className={opcionSelec ? 'icono-check-tarifa' : 'hidden'}/>
    </div>
  );
};
