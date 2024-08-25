import React, { useEffect, useState } from 'react';
import '../Estilos/servicio.css';
import { Paradas } from './Paradas';

export const Horario = ({horaSalida, recorrido, horaActual, minutosActuales }) => {

  const [minutosDif, setMinutosDif] = useState(null);
  const [horaSalidaEnMinutos, setHoraSalidaEnMInutos] = useState(null);
  const [horaActualEnMinutos, setHoraActualEnMinutos] = useState(null);
  const [lengthRecorrido, setLengthRecorrido] = useState(null);

  useEffect(() => {
    setHoraSalidaEnMInutos((Math.trunc(horaSalida) * 60) + ((horaSalida - Math.trunc(horaSalida)) * 100));
    setHoraActualEnMinutos((horaActual * 60) + minutosActuales);
    setMinutosDif(Math.round(horaSalidaEnMinutos - horaActualEnMinutos));
    setLengthRecorrido(recorrido.length);
  }, [horaSalida, horaActual, minutosActuales, horaActualEnMinutos, horaSalidaEnMinutos, recorrido]);

  const definirMensaje = () => {
    if (minutosDif < -60) { return 'Inició recorrido hace mas de una hora' }
    if (minutosDif < -30 && minutosDif > -60) { return 'Inició recorrido hace media hora' }
    if (minutosDif >= -30 && minutosDif < 0) { return `Inició recorrido hace ${Math.abs(minutosDif)} minutos` };
    if (minutosDif === 0) { return 'Está iniciando recorrido' };
    if (minutosDif > 0 && minutosDif <= 3) { return 'Pronto iniciará su recorrido' };
    if(minutosDif === 60) {return 'Iniciará recorrido en una hora'}
    if (minutosDif > 60 && minutosDif <= 90) { return 'Iniciará su recorrido en poco más de una hora' };
    if(minutosDif > 90 && minutosDif < 120){return 'Iniciará su recorrido en poco menos de dos horas'};
    if(minutosDif > 120){return 'inactivo'};
}

return (
  <div className="containerservicio">
    <div className="container-panelIzquierdo">
    <p className="servicionombre">{Math.trunc(horaSalida) < 10 ? `0${Math.trunc(horaSalida)}` : Math.trunc(horaSalida)}</p>
    <p className="servicionombre">{Math.trunc((horaSalida.toFixed(2) - Math.trunc(horaSalida)) * 100) < 10 ? `0${Math.trunc((horaSalida.toFixed(2) - Math.trunc(horaSalida)) * 100)}` : Math.trunc((horaSalida.toFixed(2) - Math.trunc(horaSalida)) * 100)}</p>
    <h3 className="servicionombre">HRS</h3>
    </div>
      <div className="container-panelDerecho">
        <div className="estadodelservicio">
          <p className="estado-titulo">ESTADO DEL SERVICIO</p>
          <p>{definirMensaje()}</p>
        </div>
      <div className="container-recorrido">
        <div className="container-paradas">
        {recorrido.map( parada => (
          <Paradas nombre={parada} index={recorrido.indexOf(parada)} length={lengthRecorrido}/>
        ))}
        </div>
      </div>
      </div>
    
  </div>
)
  }
