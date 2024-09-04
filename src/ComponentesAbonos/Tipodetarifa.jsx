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
  }, [tarifaElegida]);

  return (
         <div
      className={
        tarifaClickeada
          ? "containertarifa opcionSeleccionada"
          : "containertarifa"
      }
      onClick={clickTarifa}
    >
      {tarifa} 
      <FaCheckCircle className={tarifaClickeada ? 'icono-check-tarifa' : 'hidden'}/>
    </div>
  );
};
