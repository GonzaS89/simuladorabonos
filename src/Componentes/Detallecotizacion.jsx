import React from 'react';
import '../Estilos/resultadoscotizador.css';

export const Detallecotizacion = ( { viajesIngresados , localidadOrigen , localidadDestino , precioAbono } ) => {

    return (
            <div 
            className='container-detalle-precio'>
                <p className={viajesIngresados !== 0 ? 'detalle' : 'detalle oculto'}>{viajesIngresados === null ? '' : `${viajesIngresados} viajes de La Florida hasta La Florida`}</p>
                <p className={precioAbono !== 0 ? 'precio' : 'precio oculto'}>$ {precioAbono}</p>
        </div>
    )
}
