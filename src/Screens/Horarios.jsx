import React from "react";
import "../Estilos/screens.css";
import "../Estilos/horarios.css";
import { useEffect, useState } from "react";
import IdaVuelta from "../ComponentesHorarios/IdaVuelta";
import { OrigenDestino } from "../ComponentesHorarios/OrigenDestino";
import { Horario } from "../ComponentesHorarios/Horario";

const Horarios = () => {
  const todosLosOrigenes = [
    { nombre: "la florida x alderetes/alternativa" },
    { nombre: "la florida x w. posse" },
    { nombre: "w. posse" },
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
  const [grillaDefinitiva, setGrillaDefinitiva] = useState([]);
  const [horaActualEnMinutos, setHoraActualEnMinutos] = useState(null)
  const [menorDif, setMenorDif] = useState(5000);
  // const [difMinutos, setDifMinutos] = useState([]);

  // const diasDeLaSemana = [
  //   "domingo",
  //   "lunes",
  //   "martes",
  //   "miercoles",
  //   "jueves",
  //   "viernes",
  //   "sábado",
  // ];

  useEffect(() => {
    const updateHoraMinutosDias = () => {
      setMinutes(new Date().getMinutes());
      setHora(new Date().getHours());
      setDia(new Date().getDay())
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

  const grillaRecibida = data => {
    setGrillaDefinitiva(data)
  }

  // const definirLaMenorDiferencia = salida => {
  //     const horaSalidaEnMinutos = (Math.trunc(salida) * 60);
  //     const minutosSalida = (((salida) - horaSalidaEnMinutos) * 100);
  //     const horaDeSalidaEnMinutos = horaDeSalidaEnMinutos + minutosSalida;
     
  //     if(Math.abs(horaDeSalidaEnMinutos))
  // }

  useEffect(() => {
    idaVuelta !== null && setMenuCiudadVisible(true);
    ciudadOrigen !== null &&
      setTimeout(() => {
        setMenuCiudadVisible(false);
      }, 750);
      switch (dia) {
        case 0:
          setDiaEnLetras('domingos');
          break;
        case 6:
          setDiaEnLetras('sabados');
          break;
        default:
          setDiaEnLetras('lunesAViernes')
          break;
      }
      setHoraActualEnMinutos((hora * 60) + minutes);
  }, [idaVuelta, ciudadOrigen,dia, minutes]);

  // const recibirMinutosDif = min => {
  //   setDifMinutos(prevDifMinutos => [])
  // }

  useEffect(() => {
    const salidas = grillaDefinitiva.map( objeto => objeto.salida);
  },[grillaDefinitiva, hora, minutes])

  return (
    <div className="container-screen">
      <div className="container-main-horarios">
        <div className="container-ida-vuelta">
          <div
            className={menuCiudadVisible ? "capablureada show-capa" : "capa"}
            onClick={tocarCapa}
          ></div>
          <IdaVuelta nombre={"idas"} idEnviada={idRecibida} diaRango = {diaEnLetras} />
          <IdaVuelta nombre={"vueltas"} idEnviada={idRecibida} diaRango = {diaEnLetras}/>
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
              diaRango={diaEnLetras}
              idaVuelta={idaVuelta}
              grillaEnviada={grillaRecibida}
              grillaDefinitiva={grillaDefinitiva}
            />
          ))}
        </div>
        {/* <p>{diaEnLetras}{idaVuelta}</p> */}
        <div className={ciudadOrigen !== null ? 'container-resultadoshorarios animacionresultadoshorarios' : 'container-resultadoshorarios'}>
            <div className="container-horarios">
              {grillaDefinitiva.map ( servicio => (
                <Horario 
                index = {grillaDefinitiva.indexOf(servicio)}
                nombre={servicio.nombre}
                horaSalida={servicio.salida}
                recorrido={servicio.recorrido}
                horaActual={hora}
                minutosActuales={minutes}/>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
