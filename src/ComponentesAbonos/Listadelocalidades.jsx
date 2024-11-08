import React  from 'react';
import localidades from '../localidades.json';
import '../Estilos/listadelocalidades.css';
import { Localidad } from './Localidad';

const Listadelocalidades = ( { localidadObtenida , listaLocalidadesDesplaegada , menuDesplegado , puntoElegido}) => {

    return (
        <div className={menuDesplegado ? 'container-localidades-principal desplegarListadoLocalidades' : 'container-localidades-principal'}>
            <div className='container-localidades'>
                {localidades.map( (localidad) => (
                    puntoElegido === 'origen' ?
                    localidad.nombre !== 'san miguel de tucumán' &&
                    <Localidad 
                    nombreLocalidad={localidad.nombre}
                    localidadObtenida={localidadObtenida}
                    listaLocalidadesDesplaegada = {listaLocalidadesDesplaegada}/> :

                    <Localidad 
                    nombreLocalidad={localidad.nombre}
                    localidadObtenida={localidadObtenida}
                    listaLocalidadesDesplaegada = {listaLocalidadesDesplaegada}/>
                ))}
            </div>
        </div>
    )
}

export default Listadelocalidades;