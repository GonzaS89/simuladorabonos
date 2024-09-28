import React from "react";
import "../Estilos/screens.css";
import "../Estilos/horarios.css";
import { useEffect, useState, useRef } from "react";
import { Horario } from "../ComponentesHorarios/Horario";

const Horarios = ({ grillaDefinitiva, origen, destino, horaAuto, horaManual, codigo, diaAuto, grilla }) => {

  const [indiceDeBusqueda, setIndiceDeBusqueda] = useState(null);
  const [claseNormalizadora, setClaseNormalizadora] = useState(null);
  const [horaDeReferencia, setHoraDeReferencia] = useState(null);

  const refs = useRef([]);
  ;
  useEffect(() => {
    if(horaAuto === null){setHoraDeReferencia(horaManual)}
    else if(horaManual === null){setHoraDeReferencia(horaAuto)}
  },[horaAuto, horaManual]);


  const truncarNumero = num => { return Math.trunc(num) }

  useEffect(() => {
    const salidas = grillaDefinitiva.map(objeto =>
      (truncarNumero((truncarNumero(objeto.salida) * 60) + ((objeto.salida - truncarNumero(objeto.salida)) * 100)) - horaDeReferencia));
    if (salidas.length > 0) {
      const masCercano = salidas.reduce((a, b) => {
        return Math.abs(a) < Math.abs(b) ? a : b;
      })
      setIndiceDeBusqueda(salidas.indexOf(masCercano))
    };

  }, [grillaDefinitiva, horaDeReferencia]);

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
            {grillaDefinitiva.map((servicio, index) => (
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
