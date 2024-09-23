import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
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
        <BsFillCheckCircleFill className={nombreOrigenDestino ? 'parada-checked-icono' : 'hidden'}/>
        <img src={require('../Iconos/autobus.png')} alt="bus" className={nombreOrigenDestino ? 'parada-bus-icono' : 'hidden'}/>
      </div>
    </>
  );
};
