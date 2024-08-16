import React from 'react';
import '../Estilos/screens.css'
import '../Estilos/horarios.css'
import Grilla from '../grillas.json';
import { useEffect, useState } from 'react';
import IdaVuelta from '../ComponentesHorarios/IdaVuelta';

const Horarios = () => {

  const todosLosOrigenes = [
    {"nombre" : 'la florida'},
    {"nombre" : 'colonia 4 (luisiana)'},
    {"nombre" : 'el talar'},
    {"nombre" : 'el fortín'},
    {"nombre" : 'finca mayo'},
    {"nombre" : 'la marta'},
    {"nombre" : 'cevil pozo'},
    {"nombre" : 'w. posse'},
    {"nombre" : 'el paraíso'},
    {"nombre" : 'llona'},
    {"nombre" : 'fila del medio'},
    {"nombre" : 'fila de la orilla'},
    {"nombre" : 'los ralos'},
    {"nombre" : 'las cejas'},
    {"nombre" : '7 de abril'},
    {"nombre" : 'cruz alta'}
  ]

  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [idaVuelta, setIdaVuelta] = useState(null);
  const [ciudadOrigen, setCiudadOrigen] = useState(null);

  useEffect(() => {
    // console.log(Grilla.lunesAViernes.idas['floridaxalderetes/alternativa'])
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

  const idRecibida = id => {setIdaVuelta(id)}
  const ciudadRecibida = ciudad => {setCiudadOrigen(ciudad)}


  return (
    <div className='container-screen'>
      <div className='container-main-horarios'>
        <div className='container-ida-vuelta'>
          <IdaVuelta nombre={'ida'} idEnviada = {idRecibida}/>
          <IdaVuelta nombre={'vuelta'} idEnviada = {idRecibida}/> 
        </div>
        {/* <div className='container-origenes'>
          {todosLosOrigenes.map (ciudad => (
            <IdaVuelta nombre = {ciudad.nombre} idEnviada = {ciudadRecibida}/>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Horarios;