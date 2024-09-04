import React, { useEffect, useState } from 'react';
import '../Estilos/cotizacion.css';
import {codigo06} from '../tarifas';

export const CotizacionAbonos = ({ origen, destino, viajes, tarifa }) => {

  const [precioNormal, setPrecioNormal] = useState(null);
  const [precioDescuento, setPrecioDescuento] = useState(null);

  useEffect(() => {
    if(origen === 'la florida'){
      if(destino === 'la florida' || destino === 'w. posse'){setPrecioNormal(viajes * codigo06)}
    }
  },[origen, destino,viajes])

  useEffect(() => {
    tarifa === 'empleados' ? setPrecioDescuento(precioNormal * .3) : setPrecioDescuento(precioNormal * .4)
  },[tarifa, precioNormal])

  return (
    <div className="container-cotizacion">
      <div className='logo-fondo'></div>
      <div className='container-superior'>
        <div className="container-precios">
          <h1>Cotización</h1>
          <div className="subcontainer-detalle">
            <div className='container-detalle-precio'>
              <p className='texto-detalle-viajes'>{viajes} viajes desde {origen} hasta {destino} (tarifa normal)</p>
              <p className='texto-precio-viajes'>$ {precioNormal}</p>
            </div>
            <div className='container-descuento-precio'>
              <p className='texto-detalle-descuento'>Descuento para {tarifa}</p>
              <p className='texto-precio-descuento'>- ${precioDescuento}</p>
            </div>
          </div>
          <div className='container-preciofinal'>
            <p>Precio final</p>
            <p>$ {(precioNormal - precioDescuento)}</p>
          </div>
        </div>
      </div>
      <div className='container-inferior'>
        <div className='container-info'></div>
      </div>

    </div>


  )
}
