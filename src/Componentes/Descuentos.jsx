import React from 'react';

export const Descuentos = ( { viajesIngresados , precioAbono , abonoDescuento}) => {

    return(
        <div  className={viajesIngresados !== 0 ? 'container-detalle-precio' : 
        'container-detalle-precio-oculto'}>
            <p className={precioAbono !== 0 ? 'detalle' : 'oculto'}>{viajesIngresados === null ? '' : 'Descuento por abonado'}</p>
            <p className={precioAbono !== 0 ? 'precio descuento' : 'precio descuento oculto'}>$ {abonoDescuento}</p>
        </div>
    )
}