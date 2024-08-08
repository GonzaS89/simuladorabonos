import React , { useState , useEffect }from 'react';
import '../Estilos/resultadoscotizador.css'
import { Detallecotizacion } from './Detallecotizacion';
import { Descuentos } from './Descuentos';
import { Preciofinal } from './Preciofinal';

export const Resultadocotizador = ( { enviarViajesIngresados , localidadOrigen , localidadDestino }) => {

    const [precioDeReferencia, setPrecioDeReferencia] = useState(null);
    const [precioAbono, setPrecioAbono] = useState(null)

    const [abonoDescuento, setAbonoDescuento] = useState(null);

    const calcularDescuento = ( ) => {
        setAbonoDescuento( Math.round(precioAbono * 0.3))
    }

    useEffect(() => {
        calcularDescuento();
    },[precioAbono])

    const definirPrecio = ( origen , destino) => {
        if(origen === 'la florida') {
            if(destino === 'la florida'){setPrecioDeReferencia(580)}
            if(destino === 'alderetes'){setPrecioDeReferencia(enviarViajesIngresados * 670)}
            if(destino === 'banda del río salí'){setPrecioDeReferencia(enviarViajesIngresados * 750)}
            if(destino === 'san miguel de tucumán'){setPrecioDeReferencia(enviarViajesIngresados * 1100)}
        }
    }

    useEffect(() => {
        definirPrecio(localidadOrigen , localidadDestino)
        setPrecioAbono(precioDeReferencia * enviarViajesIngresados)
    },[enviarViajesIngresados])

    return (
        <div className='container-cotizacionfinal'>
            <h3>Cotización</h3>
            <Detallecotizacion 
            viajesIngresados = {enviarViajesIngresados}
            localidadOrigen = {localidadOrigen}
            localidadDestino = {localidadDestino}
            precioAbono = {precioAbono}
            />
            <Descuentos 
            viajesIngresados={enviarViajesIngresados}
            precioAbono = {precioAbono}
            abonoDescuento = {abonoDescuento}/>
            <Preciofinal precioAbono = {precioAbono}
            abonoDescuento = {abonoDescuento}/>
        </div>
    )
}