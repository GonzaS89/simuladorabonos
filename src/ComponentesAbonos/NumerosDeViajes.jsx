import React, { useEffect, useState } from "react";
import "../Estilos/abonos.css";

export const NumerosDeViajes = ({
  numero,
  enviarNumViaje,
  viajesIngresados,
  inputFocus,
}) => {
  const [opcionSelec, setOpcionSelec] = useState(false);

  const clickEnNumViaje = () => {
    enviarNumViaje(numero);
  };

  useEffect(() => {
    numero === viajesIngresados ? setOpcionSelec(true) : setOpcionSelec(false);
  }, [viajesIngresados]);

  useEffect(() => {
    inputFocus ? setOpcionSelec(false) : setOpcionSelec(true);
  }, [inputFocus]);

  return (
    <div
      className={
        opcionSelec
          ? "container-viajes viajesSeleccionados"
          : "container-viajes"
      }
      onClick={clickEnNumViaje}
    >
      {numero}
    </div>
  );
};
