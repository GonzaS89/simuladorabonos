import React from "react";

export const Paradas = ({ nombre, index, length, origen, destino }) => {


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
        <p>{nombre}</p>
      </div>
    </>
  );
};
