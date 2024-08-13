import React , { useEffect, useState }from 'react';
import '../Estilos/salidallegada.css';

    const Categorias = ( { categoriaSeleccionada } ) => {

    const [selectedValue ,  setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    useEffect(() => {
        categoriaSeleccionada(selectedValue)
    },[selectedValue , categoriaSeleccionada])

    return (
        <div className='container-categorias'>
          <div className='container-categoria'>
          <label>
        Empleados
      </label>
      <input
          type="radio"
          name="example" // El mismo nombre para el grupo de radio
          value="empleados"
          checked={selectedValue === 'empleados'}
          onChange={handleChange}
        />
          </div>
         
      <div className='container-categoria'>
      <label>
        Estudiantes
      </label>
      <input
          type="radio"
          name="example" // El mismo nombre para el grupo de radio
          value="estudiantes"
          checked={selectedValue === 'estudiantes'}
          onChange={handleChange}
        />
      </div>
      
        </div>
    )
}

export default Categorias