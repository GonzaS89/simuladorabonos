import React from "react";
import "../Estilos/screens.css";
import "../Estilos/horarios.css";
import { useEffect, useState, useRef } from "react";
import { Horario } from "../ComponentesHorarios/Horario";
import { useGenerarCodigo } from "../Hooks/useGenerarCodigo";
import { useHoraReferencia } from "../Hooks/useHoraReferencia";
import { useIndiceBusqueda } from "../Hooks/useIndiceBusqueda";


const Horarios = ({ grillaDefinitiva, origen, destino, horaAuto, horaManual, via, diaAuto, grilla }) => {

  useEffect(() => {
    if (grillaDefinitiva === null) {
        // Redirige a otra URL si miVariable es null
        window.location.href = '/';
    }
}, [grillaDefinitiva]);

  const [claseNormalizadora, setClaseNormalizadora] = useState(null);
  const {codigo} = useGenerarCodigo(origen,destino,via)
  const {horaDeReferencia} = useHoraReferencia(horaManual,horaAuto)
  const refs = useRef([]);
  const {indiceDeBusqueda} = useIndiceBusqueda(grillaDefinitiva,horaDeReferencia);
   
  useEffect(() => {
    if (refs.current[indiceDeBusqueda]) {
      setTimeout(() => {
        refs.current[indiceDeBusqueda].scrollIntoView({ behavior: 'auto', block: 'center' });
      }, 0);
    }
  }, [indiceDeBusqueda])

  const normalizarResultados = () => {
    setClaseNormalizadora('containerservicio serviciovisibleynormal')
  }
  return (
    <div className="container-screen">
      <div className="container-main-horarios">
        <div className="logo-fondo"></div>
        <div className='container-resultadoshorarios'>
          <div className="container-horarios" onTouchMove={normalizarResultados}>
          {grillaDefinitiva?.length > 0 &&
            grillaDefinitiva.map((servicio, index) => (
              <Horario
                key={index}
                nombre={servicio.nombre}
                horaSalida={servicio.salida}
                recorrido={servicio.recorrido}
                indiceDeBusqueda={indiceDeBusqueda}
                origen={origen}
                destino={destino}
                index={index}
                codigo={codigo}
                horaDeReferencia={horaDeReferencia}
                claseNormalizadora={claseNormalizadora}
                ref={el => refs.current[index] = el} 
                diaAuto = {diaAuto}
                grilla = {grilla}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
