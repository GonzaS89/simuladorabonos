import React from 'react';
import '../Estilos/salidallegada.css';
import { useHeight } from '../Hooks/useHeight';

const Cantidaddeviajes = ( { viajesIngresados }) => {

    const enviarViajesIngresados = e => {
        return (
            e.target.value !== '' ? 
            viajesIngresados(parseInt(e.target.value)) :
            viajesIngresados(0)
        )
    }

    const {hLg} = useHeight()

    return (
        <div className="">
            <p className={hLg ? 'text-xl' : 'text-xs'}>Cantidad de viajes</p>
            <input 
            type="number" min={8} max={50}
            className='inputViajes'
            onChange={enviarViajesIngresados}/>
        </div>
    )
}

export default Cantidaddeviajes