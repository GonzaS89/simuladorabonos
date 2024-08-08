import React from 'react';

export const Preciofinal = ( { precioAbono , abonoDescuento }) => {
    return (
        <div  className={precioAbono !== 0 ? 'container-detalle-precio precio-resaltado' : 
        'container-detalle-precio-oculto'}>
            <p className='detalle preciofinal'>{precioAbono === 0 ? '' : 'Precio final'}</p>
            <p className={precioAbono !== 0 ? 'precio preciofinal' : 'precio oculto'}>$ {precioAbono - abonoDescuento}</p>
        </div>
    )
}