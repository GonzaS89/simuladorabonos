import React from "react";
import "../Estilos/screens.css";
import "../Estilos/horarios.css";
import { useEffect, useState, useRef } from "react";
import IdaVuelta from "../ComponentesHorarios/IdaVuelta";
import { OrigenDestino } from "../ComponentesHorarios/OrigenDestino";
import { Horario } from "../ComponentesHorarios/Horario";

const Horarios = ({grillaDefinitiva}) => {
  


  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hora, setHora] = useState(new Date().getHours());
  const [dia, setDia] = useState(new Date().getDay());
  const [diaEnLetras, setDiaEnLetras] = useState(null);
  const [idaVuelta, setIdaVuelta] = useState(null);
  const [ciudadOrigen, setCiudadOrigen] = useState(null);
  const [menuCiudadVisible, setMenuCiudadVisible] = useState(false);
  const [grillaDefinitiva, setGrillaDefinitiva] = useState([]);
  const [horaActualEnMinutos, setHoraActualEnMinutos] = useState(null);
  const [indiceDeBusqueda, setIndiceDeBusqueda] = useState(null);
  const [claseNormalizadora, setClaseNormalizadora] = useState(null);

  const refs = useRef([]); 

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
      setHoraActualEnMinutos(hora * 60 + minutes)
  }, [idaVuelta, ciudadOrigen,dia, hora, minutes]);

  const truncarNumero = num => {return Math.trunc(num)}

  useEffect(() => {
    const salidas = grillaDefinitiva.map( objeto => 
      (truncarNumero((truncarNumero(objeto.salida) * 60) + ((objeto.salida - truncarNumero(objeto.salida)) * 100)) - horaActualEnMinutos));
      if(salidas.length > 0) {
      const masCercano = salidas.reduce((a, b) => {
        return Math.abs(a) < Math.abs(b) ? a : b;
    })
    setIndiceDeBusqueda(salidas.indexOf(masCercano))};
    
  },[grillaDefinitiva, horaActualEnMinutos]);

  useEffect(() => {
        if (refs.current[indiceDeBusqueda]) {
          setTimeout(() => {
            refs.current[indiceDeBusqueda].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 750);
          
        }
  },[indiceDeBusqueda])

const normalizarResultados = () => {
    setClaseNormalizadora('containerservicio serviciovisibleynormal')
  }
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
            <div className="container-horarios" onTouchMove={normalizarResultados}>
              {grillaDefinitiva.map ( (servicio , index) => (
                <Horario 
                key={index}
                nombre={servicio.nombre}
                horaSalida={servicio.salida}
                recorrido={servicio.recorrido}
                horaActual={hora}
                minutosActuales={minutes}
                indiceDeBusqueda={indiceDeBusqueda}
                index={index}
                claseNormalizadora = {claseNormalizadora}
                ref={el => refs.current[index] = el} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
