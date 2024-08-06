import { React } from 'react';
import localidades from '../localidades.json';
import Localidad from './Localidad';
import '../Estilos/main.css';

const ListaLocalidadesDestino = ( { localidadClickeada } ) => {

    return(
       <div className='contenedor-localidades'>
            {localidades.map( localidad => (
                <Localidad 
                nombre = {localidad.nombre}
                enviarLocalidad = {localidadClickeada}/>
            ))}
       </div>
    )
}

export default ListaLocalidadesDestino;