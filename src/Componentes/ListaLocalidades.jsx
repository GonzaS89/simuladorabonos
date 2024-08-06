import React from 'react';
import localidades from '../localidades.json';
import Localidad from './Localidad';
import '../Estilos/main.css';

const ListaLocalidades = () => {
    return(
        
       <div className='contenedor-localidades'>
            {localidades.map( localidad => (
                <Localidad 
                nombre = {localidad.nombre}/>
            ))}
       </div>
    )
}

export default ListaLocalidades;