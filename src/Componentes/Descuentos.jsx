import React from 'react';

export const Descuentos = ( { viajesIngresados , precioAbono , abonoDescuento}) => {

    const colocarPuntoDeMillar = valor => {
        return (
        valor > 1000 ? 
        (valor / 1000).toFixed(3) : 
        valor
        )
    }

    return(
        <div  className={viajesIngresados !== 0 ? 'container-detalle-precio' : 
        'container-detalle-precio-oculto'}>
            <p className={precioAbono !== 0 ? 'detalle' : 'oculto'}>{viajesIngresados === null ? '' : 'Descuento por abonado'}</p>
            <p className={precioAbono !== 0 ? 'precio descuento' : 'precio descuento oculto'}>$ {colocarPuntoDeMillar(abonoDescuento)}</p>
        </div>
    )
}