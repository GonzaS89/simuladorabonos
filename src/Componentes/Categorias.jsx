import React , { useState }from 'react';
import { OpcionCategoria } from './OpcionCategoria';

export const Categorias = ( ) => {

    const [categoriaRecibida, setCategoriaRecibida] = useState(null);

    const tiposDeCategorias = [
        { "nombre": "empleados" },
        { "nombre": "estudiantes" }
    ];

    const recibirCategoria = (categoria) => {
        setCategoriaRecibida(categoria)
    }

    return (
        <div className='container-categorias'>
            {tiposDeCategorias.map((categoria) => (
                <OpcionCategoria 
                nombre={categoria.nombre}
                categoriaElegida = {recibirCategoria}
                categoriaRecibida = {categoriaRecibida}/>
            ))}
        </div>
    )
}