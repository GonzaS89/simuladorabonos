import React from 'react';
import '../Estilos/screens.css'
import '../Estilos/horarios.css'
import Grilla from '../grillas.json';
import { useEffect, useState } from 'react';
import IdaVuelta from '../ComponentesHorarios/IdaVuelta';

const Horarios = () => {


  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    console.log(Grilla.lunesAViernes.idas['floridaxalderetes/alternativa'])
    const updateMinutes = () => {
      setMinutes(new Date().getMinutes());
    };

    // Actualiza cada minuto
    const timerIdMinutes = setInterval(updateMinutes, 1000);

    // También actualiza inmediatamente cuando el componente se monta
    updateMinutes();

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timerIdMinutes);
  }, []);


  return (
    <div className='container-screen'>
      <div className='container-main-horarios'>
        <div className='container-ida-vuelta'>
          <IdaVuelta nombre = {'ida'}/>
          <IdaVuelta nombre = {'vuelta'}/>
        </div>
      </div>
    </div>
  )
}

export default Horarios;