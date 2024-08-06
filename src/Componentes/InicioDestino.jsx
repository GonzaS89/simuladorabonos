import { React , useState , useEffect} from 'react';
import '../Estilos/iniciodestino.css'

const InicioDestino = ( {inicio , destino}) => {

    const [opcionVisible , setOpcionVisible] = useState(false);

    useEffect(() => {
    inicio !== null && setOpcionVisible(true)
    },[inicio])

    return (
        <div className='contenedor-inicio-destino'>
            <div className={opcionVisible ? 'contenedor-opciones opciones-inicio visible' : 'contenedor-opciones opciones-inicio'}>{inicio}</div>
            <div className='contenedor-opciones opciones-destino'></div>
        </div>
    )
}

export default InicioDestino;