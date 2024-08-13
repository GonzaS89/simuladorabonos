import React from 'react';

export const Preciofinal = ( { precioAbono , abonoDescuento }) => {

    const colocarPuntoDeMillar = valor => {
        return (
        valor > 1000 ? 
        (valor / 1000).toFixed(3) : 
        valor
        )
    }

    return (
        
        <div  className={precioAbono !== 0 ? 'container-detalle-precio precio-resaltado' : 
        'container-detalle-precio-oculto'}>
            <p className='detalle preciofinal'>{precioAbono === 0 ? '' : 'Precio final'}</p>
            <p className={precioAbono !== 0 ? 'precio preciofinal' : 'precio oculto'}>$ {colocarPuntoDeMillar(precioAbono - abonoDescuento)}</p>
        </div>
    )
}