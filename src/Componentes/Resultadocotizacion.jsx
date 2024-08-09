import React , { useState , useEffect }from 'react';
import '../Estilos/resultadoscotizador.css'
import { Detallecotizacion } from './Detallecotizacion';
import { Descuentos } from './Descuentos';
import { Preciofinal } from './Preciofinal';

export const Resultadocotizador = ( { enviarViajesIngresados , localidadOrigen , localidadDestino , categoria }) => {

    const [precioDeReferencia, setPrecioDeReferencia] = useState(0);
    const [precioAbono, setPrecioAbono] = useState(0)

    const [abonoDescuento, setAbonoDescuento] = useState(0);

    useEffect(() => {
        categoria === 'empleados' ?
        setAbonoDescuento(Math.round(precioAbono * 0.3)) :
        setAbonoDescuento(Math.round(precioAbono * 0.3998))
    },[precioAbono , categoria])

    const definirPrecio = ( origen , destino) => {
        if(origen === 'la florida') {
            if(destino === 'la florida'){setPrecioDeReferencia(580)}
            if(destino === 'alderetes'){setPrecioDeReferencia(670)}
            if(destino === 'banda del río salí'){setPrecioDeReferencia(750)}
            if(destino === 'san miguel de tucumán'){setPrecioDeReferencia(1100)}
        }
        if(origen === 'alderetes'){
            if(destino === 'alderetes' || destino === 'banda del río salí'){setPrecioDeReferencia(580)}
            if(destino === 'la florida'){setPrecioDeReferencia(670)}
        }
        if(origen === 'banda del río salí'){
            if(destino === 'alderetes' || destino === 'banda del río salí'){setPrecioDeReferencia(580)}
            if(destino === 'la florida'){setPrecioDeReferencia(750)}
        }
    }

    useEffect(() => {
        definirPrecio(localidadOrigen , localidadDestino)
        setPrecioAbono(precioDeReferencia * enviarViajesIngresados)
    },[enviarViajesIngresados , localidadOrigen , localidadDestino , precioDeReferencia])

    

    return (
        <div className={categoria !== '' ? 'container-cotizacionfinal' : 'oculto'}>
            <h3>Cotización</h3>
            <Detallecotizacion 
            viajesIngresados = {enviarViajesIngresados}
            localidadOrigen = {localidadOrigen}
            localidadDestino = {localidadDestino}
            precioAbono = {precioAbono}/>
            <Descuentos 
            viajesIngresados={enviarViajesIngresados}
            precioAbono = {precioAbono}
            abonoDescuento = {abonoDescuento}/>
            <Preciofinal precioAbono = {precioAbono}
            abonoDescuento = {abonoDescuento}/>
        </div>
    )
}