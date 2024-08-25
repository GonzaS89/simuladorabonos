import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";

export const Paradas = ({ nombre, index, length }) => {

    const definirClaseLineaRecorrido = () => {
        if(index !== length - 1){
            if(index % 2 === 0){
                return 'linearecorrido lineaInclinadaIzq'
            }
            else{
                return 'linearecorrido lineaInclinadaDer'
            }
        }
        else{return 'hidden'}
    }

    const definirClaseParadas = () => {
        if(index === 0 || index === length - 1){return 'container-parada'}
        else{
            if(index % 2 === 0){return 'container-parada paradaALaIzquierda'}
            else{return 'container-parada paradaALaDerecha'}
        }
    }

  return (

    <>
      <div
        className={definirClaseParadas()}
      >
        <TiLocation className="icono-location"/>
        <p>{nombre}</p>
      </div>
      <IoRemoveOutline
        className={definirClaseLineaRecorrido()}
      />
    </>
  );
};
