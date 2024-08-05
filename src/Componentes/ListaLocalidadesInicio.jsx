import React from 'react';
import localidades from '../localidades.json';
import Localidad from './Localidad';
import '../Estilos/main.css';

const ListaLocalidadesInicio = () => {

    
    return(
       <div className='contenedor-localidades'>
            {localidades.map( localidad => (
                <Localidad nombre = {localidad.nombre}/>
            ))}
       </div>
    )
}

export default ListaLocalidadesInicio;