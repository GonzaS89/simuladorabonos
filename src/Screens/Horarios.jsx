import React from "react";
import "../Estilos/screens.css";
import "../Estilos/horarios.css";
import Grilla from "../grillas.json";
import { useEffect, useState } from "react";
import IdaVuelta from "../ComponentesHorarios/IdaVuelta";
import { OrigenDestino } from "../ComponentesHorarios/OrigenDestino";

const Horarios = () => {
  const todosLosOrigenes = [
    { nombre: "la florida" },
    { nombre: "colonia 4 (luisiana)" },
    { nombre: "talar" },
    { nombre: "fortín" },
    { nombre: "finca mayo" },
    { nombre: "la marta" },
    { nombre: "cevil pozo" },
    { nombre: "w. posse" },
    { nombre: "el paraíso" },
    { nombre: "llona" },
    { nombre: "fila del medio" },
    { nombre: "fila de la orilla" },
    { nombre: "los ralos" },
    { nombre: "las cejas" },
    { nombre: "7 de abril" },
    { nombre: "cruz alta" },
  ];


  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hora, setHora] = useState(new Date().getHours());
  const [dia, setDia] = useState(new Date().getDay());
  const [diaEnLetras, setDiaEnLetras] = useState(null);
  const [idaVuelta, setIdaVuelta] = useState(null);
  const [ciudadOrigen, setCiudadOrigen] = useState(null);
  const [menuCiudadVisible, setMenuCiudadVisible] = useState(false);

  const diasDeLaSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  const definirDiaEnNumero = () => {
    switch (dia) {
      case 0:
        setDiaEnLetras('domingos');
        break;
      case 2:
        setDiaEnLetras('sabados');
      default:
        setDiaEnLetras('lunesAViernes')
        break;
    }
  };

  useEffect(() => {
    const updateHoraMinutosDias = () => {
      setMinutes(new Date().getMinutes());
      setHora(new Date().getHours());
      definirDiaEnNumero()
    };

    // Actualiza cada minuto
    const timerIdMinutes = setInterval(updateHoraMinutosDias, 1000);

    // También actualiza inmediatamente cuando el componente se monta
    updateHoraMinutosDias();

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timerIdMinutes);
  }, []);

  const idRecibida = (id) => {
    setIdaVuelta(id);
  };

  const recibirIdCiudadSeleccionada = (id) => {
    setCiudadOrigen(id);
  };

  const tocarCapa = () => {
    setMenuCiudadVisible(false);
    setIdaVuelta(null);
  };

  useEffect(() => {
    idaVuelta !== null && setMenuCiudadVisible(true);
    ciudadOrigen !== null &&
      setTimeout(() => {
        setMenuCiudadVisible(false);
      }, 750);
  }, [idaVuelta, ciudadOrigen]);

  console.log(Grilla[diaEnLetras]);

  return (
    <div className="container-screen">
      <div className="container-main-horarios">
        <div className="container-ida-vuelta">
          <div
            className={menuCiudadVisible ? "capablureada show-capa" : "capa"}
            onClick={tocarCapa}
          ></div>
          <IdaVuelta nombre={"idas"} idEnviada={idRecibida} />
          <IdaVuelta nombre={"vueltas"} idEnviada={idRecibida} />
        </div>
        <div
          className={
            menuCiudadVisible
              ? "container-origenes desplegado"
              : "container-origenes"
          }
        >
          {todosLosOrigenes.map((ciudad) => (
            <OrigenDestino
              nombre={ciudad.nombre}
              idCiudadSeleccionada={recibirIdCiudadSeleccionada}
              ciudadOrigen={ciudadOrigen}
            />
          ))}
        </div>
        {/* <p>{diaEnLetras}</p> */}
        <div className="container-resultadoshorarios"></div>
      </div>
    </div>
  );
};

export default Horarios;
