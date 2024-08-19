import React from "react";
import "../Estilos/horarios.css";
import { FaArrowRight } from "react-icons/fa";

const IdaVuelta = ({ nombre, idEnviada }) => {
  const opcionPresionada = () => {
    idEnviada(nombre);
  };

  return (
    <div className="container-idavuelta" onClick={opcionPresionada}>
      <div className="texto-boton-idavuelta">
        <p>{nombre}</p>
      </div>
      <FaArrowRight className="icono-flecha" />
    </div>
  );
};

export default IdaVuelta;
