// import "./App.css";
import React, { useState, useEffect } from 'react';
import '../Estilos/abonos.css';
import Puntos from '../ComponentesAbonos/Puntos';
import Cantidaddeviajes from '../ComponentesAbonos/Cantidaddeviajes';
import Categorias from '../ComponentesAbonos/Categorias';
import Cotizador from '../ComponentesAbonos/Resultadocotizacion';
import Listalocalidades from '../ComponentesAbonos/Listadelocalidades';

const Abonos = () => {
    const [origenODestino, setOrigenODestino] = useState(null);
    const [menuDesplegado, setMenuDesplegado] = useState(false);
    const [localidadOrigen, setLocalidadOrigen] = useState(null);
    const [localidadDestino, setLocalidadDestino] = useState(null);
    const [viajesIngresados, setViajesIngresados] = useState(null);
    const [categoriaRecibida, setCategoriaRecibida] = useState('');

    const recibirConfirmacionDeMenuDesplegado = (condicion) => {
        setMenuDesplegado(condicion);
    }

    const puntoElegido = (punto) => {
        setOrigenODestino(punto)
    }

    const OcultarMenuLocalidades = () => {
        setMenuDesplegado(false)
    }

    useEffect(() => {
        localidadOrigen !== null && setMenuDesplegado(false);
        localidadDestino !== null && setMenuDesplegado(false);
    }, [localidadOrigen, localidadDestino])

    const recepcionLocalidad = (localidad) => {
        origenODestino === 'origen' ?
            setLocalidadOrigen(localidad) :
            setLocalidadDestino(localidad)
    }

    const recibirViajesIngresados = viajes => {
        setViajesIngresados(viajes)
    }

    useEffect(() => {
        menuDesplegado && setViajesIngresados(0)
    }, [menuDesplegado]);

    const recibirCategoria = categoria => {
        setCategoriaRecibida(categoria)
    }

    return (
        <div className="container-abonos">
            <div className="container-principal">
                <h1 className="titulo-principal">Cotizador de abonos</h1>
                <div className="container-salida-llegada">
                    <Puntos
                        listaDeLocalidadesDesplegada={recibirConfirmacionDeMenuDesplegado}
                        nombre={'origen'}
                        puntoElegido={puntoElegido}
                        origenODestino={origenODestino}
                        localidadOrigen={localidadOrigen} />
                    <Puntos
                        listaDeLocalidadesDesplegada={recibirConfirmacionDeMenuDesplegado}
                        nombre={'destino'}
                        puntoElegido={puntoElegido}
                        origenODestino={origenODestino}
                        localidadDestino={localidadDestino} />
                </div>
                <Cantidaddeviajes
                    viajesIngresados={recibirViajesIngresados}
                    menuDesplegado={menuDesplegado} />
                <Categorias
                    categoriaSeleccionada={recibirCategoria} />
                <Cotizador
                    enviarViajesIngresados={viajesIngresados}
                    localidadOrigen={localidadOrigen}
                    localidadDestino={localidadDestino}
                    categoria={categoriaRecibida} />
            </div>
            <Listalocalidades 
                menuDesplegado={menuDesplegado}
                puntoElegido={origenODestino}
                localidadObtenida={recepcionLocalidad} />
            <div
                className={menuDesplegado ? "pantalla-difuminada mostrar" : "pantalla-difuminada"}
                onClick={OcultarMenuLocalidades}></div>
        </div>


    )
}

export default Abonos;

