import React , { useState }from 'react';

export const OpcionCategoria = ( { nombre , categoriaElegida , categoriaRecibida}) => {

    const [opcionCategoriaActiva, setOpcionCategoriaActiva] = useState(null);

    const [categoriaSelec, setCategoriaSelec] = useState(null);

    const manejoDeCambio = e => {
        return (
            setCategoriaSelec(e.target.value),
            setOpcionCategoriaActiva(e.target.checked)
        )
    }

    const enviarCategoria = ( ) => {
        return (categoriaElegida(categoriaSelec))
    }

    const clickeaoDeOpcion = ( ) => {
        enviarCategoria();
    }

    return (
        <div className='container-categoria'>
                    <input 
                    type="radio" 
                    id={nombre} 
                    value={nombre}
                    checked={opcionCategoriaActiva}
                    onChange={manejoDeCambio}
                    onClick = {clickeaoDeOpcion}/>
                    <label>{nombre}</label>
                </div>
    )
}
