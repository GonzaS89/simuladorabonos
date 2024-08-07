import React from 'react';

export const Categorias = ( ) => {

    const tiposDeCategorias = [ 
        {"nombre" : "empleados"}, 
        {"nombre" : "estudiantes"}
];

    return (
        <div className='container-categorias'>
            {tiposDeCategorias.map ( (categoria) => (
                <div className='container-categoria'>
                <input type="radio" id={categoria.nombre}/>
                <label>{categoria.nombre}</label>
                </div>
            ))}
        </div>
    )
}