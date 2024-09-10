import React, { useEffect, useState } from 'react';
import '../Estilos/horarios.css';
import { IoIosArrowForward } from "react-icons/io";


export const ContainerHoraDia = ({hora, minutos, dia}) => {

  const [diaRango, setDiaRango] = useState(null)

  useEffect(() => {
    if(dia === '0'){setDiaRango('Domingos')}
    else if(dia >= '1' || dia <= '5'){setDiaRango('Lunes a viernes')}
    else if(dia === '6'){setDiaRango('Sábados')}
  },[dia])

  return (
    <div className="container-bloque_hora-dia">
      <h1>Día de la semana</h1>
        <div className="container-diaSemana">
            <div className="diaautomatico">{diaRango}</div>
            <div className="container-select">
              <div className="containter-select-mascara">Elegí un día <IoIosArrowForward className='arrow-select'/>
</div>
                 <select className="select-diasemana" name="" id="">
            <option value="">Lunes a viernes</option>
            <option value="">Sábados</option>
            <option value="">Domingos</option>
            </select>
            </div>
         
        </div>
    </div>
  )
}
