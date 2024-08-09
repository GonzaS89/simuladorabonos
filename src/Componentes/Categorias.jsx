import React , { useEffect, useState }from 'react';
// import { OpcionCategoria } from './OpcionCategoria';

export const Categorias = ( { categoriaSeleccionada } ) => {

    const [selectedValue ,  setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    useEffect(() => {
        categoriaSeleccionada(selectedValue)
    },[selectedValue , categoriaSeleccionada])

    return (
        <div className='container-categorias'>
           <label>
        <input
          type="radio"
          name="example" // El mismo nombre para el grupo de radio
          value="empleados"
          checked={selectedValue === 'empleados'}
          onChange={handleChange}
        />
        Empleados
      </label>

      <label>
        <input
          type="radio"
          name="example" // El mismo nombre para el grupo de radio
          value="estudiantes"
          checked={selectedValue === 'estudiantes'}
          onChange={handleChange}
        />
        Estudiantes
      </label>
        </div>
    )
}