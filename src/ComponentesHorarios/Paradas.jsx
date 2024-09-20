import React from "react";
import { FaCheck } from "react-icons/fa";
export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const definirClaseParadas = () => {
        if(nombre === origen || nombre === destino){
          return 'container-parada paradaSeleccionada'
        }else{return 'container-parada'}
      }

  return (

    <>
      <div
        className={definirClaseParadas()}
      >
        <p className={nombreOrigenDestino && 'texto-nombre-parada'}>{nombre}</p>
        {nombre === origen || destino === nombre}
        <FaCheck className={nombreOrigenDestino ? 'parada-checked-icono' : 'hidden'}/>
      </div>
    </>
  );
};
