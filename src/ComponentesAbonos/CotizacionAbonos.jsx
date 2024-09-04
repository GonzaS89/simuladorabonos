import React from 'react';
import '../Estilos/cotizacion.css';
import { codigo06, codigo08, codigo10, codigo11, codigo12, codigo13, codigo14,codigo15, codigo16, codigo18, codigo20, codigo21, codigo22,codigo23, codigo24, codigo26, codigo27, codigo30, codigo34,codigo37, codigo41, codigo44} from '../tarifas';

export const CotizacionAbonos = ({ localidadOrigen, localidadDestino, numViajes, tipoTarifa }) => {

    

  return (
      <div className="container-cotizacion">
        <div className='logo-fondo'></div>
        <div className='container-superior'>
       <div className="container-precios">
       <h1>Cotización</h1>
        <div className="subcontainer-detalle">
        <div className='container-detalle-precio'>
          <p className='texto-detalle-viajes'>44 viajes desde La Florida hasta San miguel de tucuman (tarifa normal)</p>
          <p className='texto-precio-viajes'>$ 55.000</p>
        </div>
        <div className='container-descuento-precio'>
          <p className='texto-detalle-descuento'>Descuento para empleados</p>
          <p className='texto-precio-descuento'>- $ 15.000</p>
        </div>
        </div>
        <div className='container-preciofinal'>
          <p>Precio final</p>
          <p>$ 40.000</p>
        </div>
       </div>
        </div>
       <div className='container-inferior'>
       <div className='container-info'></div>
       </div>
       
      </div>
      

  )
}
