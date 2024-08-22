import React, { useEffect, useState } from 'react';
import '../Estilos/servicio.css';

export const Horario = ({ nombre, horaSalida, recorrido, horaActual, minutosActuales, enviarMinutosDif }) => {

  const [minutosDif, setMinutosDif] = useState(null);
  const [horaSalidaEnMinutos, setHoraSalidaEnMInutos] = useState(null);
  const [horaActualEnMinutos, setHoraActualEnMinutos] = useState(null);

  useEffect(() => {
    setHoraSalidaEnMInutos((Math.trunc(horaSalida) * 60) + ((horaSalida - Math.trunc(horaSalida)) * 100));
    setHoraActualEnMinutos((horaActual * 60) + minutosActuales);
    setMinutosDif(Math.round(horaSalidaEnMinutos - horaActualEnMinutos));
  }, [horaSalida, horaActual, minutosActuales, horaActualEnMinutos, horaSalidaEnMinutos]);

  const definirMensaje = () => {
    if (minutosDif < -60) { return 'Éste servicio inicio recorrido hace mas de una hora' }
    if (minutosDif < -30 && minutosDif > -60) { return 'Éste servicio inició recorrido hace media hora' }
    if (minutosDif >= -30 && minutosDif < 0) { return `Éste servicio inició recorrido hace ${Math.abs(minutosDif)} minutos` };
    if (minutosDif === 0) { return 'Éste servicio esá iniciando recorrido' };
    if (minutosDif > 0 && minutosDif <= 3) { return 'Pronto iniciará su recorrido' };
    if(minutosDif === 60) {return 'Éste servicio iniciará recorrido en una hora'}
    if (minutosDif > 60 && minutosDif <= 90) { return 'Éste servicio iniciará su recorrido en poco más de una hora' };
    if(minutosDif > 90 && minutosDif < 120){return 'Este servicio iniciará su recorrido en poco menos de dos horas'};
    if(minutosDif > 120){return 'Servicio inactivo (por ahora)'};
}

return (
  <div className="containerservicio">
    <p className="servicionombre">aaServicio de las {nombre} hrs.</p>
    <p className="serviciohora">{definirMensaje()}</p>
    <p className="serviciorecorrido"><strong>Recorrido</strong>: {recorrido}</p>
  </div>
)
  }
