import React, { useEffect, useState } from 'react';
import '../Estilos/cotizacion.css';
import {codigo06} from '../tarifas';

export const CotizacionAbonos = ({ origen, destino, viajes, tarifa }) => {

  const [precioNormal, setPrecioNormal] = useState();
  const [precioDescuento, setPrecioDescuento] = useState();

  useEffect(() => {
    if(origen === 'la florida' || origen === 'fortin'){
      if(destino === 'la florida' || destino === 'w. posse' || destino === 'el paraiso'){setPrecioNormal(viajes * codigo06)}
    }
  },[origen, destino,viajes])

  useEffect(() => {
    tarifa === 'empleados' ? setPrecioDescuento(precioNormal * .3) : setPrecioDescuento(precioNormal * .4)
  },[tarifa, precioNormal])

  return (
    <div className="container-cotizacion">
      <div className='logo-fondo'></div>
      <div className='container-superior'>
      <h1>Cotización</h1>
        <div className="container-precios">
          <div className="subcontainer-detalle">
            <div className='container-detalle-precio'>
              <p className='texto-detalle-viajes'>{viajes} viajes desde <span>{origen} </span>hasta <span>{destino}</span> (tarifa normal)</p>
              <p className='texto-precio-viajes'>$ {precioNormal}</p>
            </div>
            <div className='container-descuento-precio'>
              <p className='texto-detalle-descuento'>Descuento para {tarifa}</p>
              <p className='texto-precio-descuento'>- $ {precioDescuento}</p>
            </div>
          </div>
          <div className='container-preciofinal'>
            <p>Precio final</p>
            <p className='preciofinal'>$ {(precioNormal - precioDescuento)}</p>
          </div>
        </div>
      </div>
      <div className='container-inferior'>
        <div className='container-info'>
          <p className='titulo-infoabonos'>Requisitos para tener tu abono</p>
          <ul>
            <li>EMPLEADOS: Copia de recibo de sueldo y copia del DNI</li>
            <li>ESTUDIANTES: Constancia de alumno regular y copia del DNI</li>
          </ul>
        </div>
      </div>

    </div>


  )
}
