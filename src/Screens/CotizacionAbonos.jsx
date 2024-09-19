import React, { useEffect, useState } from "react";
import "../Estilos/cotizacion.css";
import {
  codigo06,
  codigo08,
  // codigo10,
  codigo11,
  // codigo12,
  // codigo13,
  codigo14,
  // codigo15,
  codigo16,
  // codigo18,
  codigo21,
  // codigo24,
  // codigo27,
  // codigo30,
  // codigo34,
  // codigo41,
  // codigo44,
} from "../tarifas";

export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  via,
}) => {

  const [precioNormal, setPrecioNormal] = useState(0);
  const [precioDescuento, setPrecioDescuento] = useState(0);
  const [codigoDeterminado, setCodigoDeterminado] = useState(null);


  //FLORIDA - FORTIN - COLONIA 4 (LUISIANA)

  

  useEffect(() => {
    const floridaFortinCol4L = ['la florida', 'fortín', 'colonia 4 (luisiana)'];
  const destinosCortosFlorida = ['la florida', 'fortín' , 'w. posse', 'el talar', 'el paraíso'];
  const destinoMedianosFlorida = ['alderetes', 'cevil pozo', 'fila de orilla']

  //POSSE

  const destinosCortosPosse = ['el paraíso', 'la florida','fila del medio', 'fila de la orilla', 'colonia media agua', 'fortín', 'colonia 4 (luisiana)'];

    if(floridaFortinCol4L.includes(origen)){
      if(destinosCortosFlorida.includes(destino)){
        // setCodigoDeterminado(codigo06)
        setPrecioNormal(viajes * codigo06)
      }
      else if(destinoMedianosFlorida.includes(destino)){
        // setCodigoDeterminado(codigo08)
        setPrecioNormal(viajes * codigo08)
      }
      else if(destino === 'banda del río salí'){
        via === 'w. posse' ? setPrecioNormal(viajes * codigo14) : setPrecioNormal(viajes * codigo11)
      }
      else if(destino === 'san miguel de tucumán'){
        via === 'w. posse' ? setPrecioNormal(viajes * codigo21) : setPrecioNormal(viajes * codigo16)
      }
    }

    if(origen === 'w. posse'){
      if(destinosCortosPosse.includes(destino)){
        // setCodigoDeterminado(codigo06);
        setPrecioNormal(viajes * codigo06)
      }
    }

      
      // if (lista.includes("w. posse")) {
      //   if (lista.includes("el paraíso") || lista.includes("fila del medio") || lista.includes("fila de la orilla") || lista.includes("cevil pozo") || lista.includes("colonia 4 (luisiana)")) {
      //     setPrecioNormal(viajes * codigo06)
      //   }
      //   else if (lista.includes("banda del río salí")) { setPrecioNormal(viajes * codigo08) }
      //   else if (lista.includes("san miguel de tucumán")) { setPrecioNormal(viajes * codigo18) }
      // }

      // if (lista.includes("los ralos")) {
      //   if (lista.includes("cruz alta")) { setPrecioNormal(viajes * codigo10) }
      //   else if (lista.includes("finca mayo")) { setPrecioNormal(viajes * codigo11) }
      //   else if (lista.includes("fila de la orilla")) { setPrecioNormal(viajes * codigo12) }
      //   else if (lista.includes("cevil pozo")) { setPrecioNormal(viajes * codigo16) }
      //   else if (lista.includes("banda del río salí")) { setPrecioNormal(viajes * codigo16) }
      //   else if (lista.includes("san miguel de tucumán")) { setPrecioNormal(viajes * codigo21) }
      //   else if (lista.includes("las cejas")) { setPrecioNormal(viajes * codigo24) }
      //   else if (lista.includes("7 de abril")) { setPrecioNormal(viajes * codigo44) }
      // }

      // if (lista.includes("las cejas")) {
      //   if (lista.includes("fila de la orilla") || lista.includes("cevil pozo")) { setPrecioNormal(viajes * codigo27) }
      //   else if (lista.includes("banda del río salí")) { setPrecioNormal(viajes * codigo30) }
      //   else if (lista.includes("san miguel de tucumán")) { setPrecioNormal(viajes * codigo34) }
      //   else if (lista.includes("7 de abril")) { setPrecioNormal(viajes * codigo41) }
      // }

      // if (lista.includes("cevil pozo")) {
      //   if (lista.includes("fila de la orilla") || lista.includes("fila del medio") || lista.includes("cruz alta") || lista.includes("banda del río salí")) { setPrecioNormal(viajes * codigo06) }
      //   else if (lista.includes("el paraíso") || lista.includes("san miguel de tucumán")) { setPrecioNormal(viajes * codigo08) }
      //   else if (lista.includes("colonia 4 (luisiana)")) { setPrecioNormal(viajes * codigo14) }
      //   else if (lista.includes("finca mayo")) { setPrecioNormal(viajes * codigo21) }
      //   else if (lista.includes("7 de abril")) { setPrecioNormal(viajes * codigo44) }
      // }

      // if (lista.includes("san miguel de tucumán")) {
      //   if (lista.includes("banda del río salí")) { setPrecioNormal(viajes * codigo06) }
      //   else if (lista.includes("alderetes")) { setPrecioNormal(viajes * codigo08) }
      //   else if (lista.includes("fila de la orilla") || lista.includes("fila del medio")) { setPrecioNormal(viajes * codigo12) }
      //   else if (lista.includes("el talar")) { setPrecioNormal(viajes * codigo13) }
      //   else if (lista.includes("cruz alta")) { setPrecioNormal(viajes * codigo15) }
      //   else if (lista.includes("la florida") || lista.includes("fortín") || lista.includes("colonia 4 (luisiana")) {
      //     if (via === 'w. posse') { setPrecioNormal(viajes * codigo21) }
      //     else { setPrecioNormal(viajes * codigo16) }
      //   }
      //   else if (lista.includes("el paraíso")) { setPrecioNormal(viajes * codigo18) }
      //   else if (lista.includes("finca mayo")) { setPrecioNormal(viajes * codigo24) }
      // }
    
  },[origen, destino, viajes, via]);

  useEffect(() => {
    if (origen === 'los ralos') {
      if (tarifa === 'empleados') {
        setPrecioDescuento(precioNormal * 0.33996)
      } else {
        setPrecioDescuento(precioNormal * 0.43999)
      }
    } else {
      tarifa === 'empleados' ?
        setPrecioDescuento(precioNormal * 0.3)
        : setPrecioDescuento(precioNormal * 0.4);
    }
  }, [tarifa, precioNormal, origen]);

  const puntoDeMillar = numero => {
    const partes = numero.toString().split(".");  // Divide la parte entera y decimal
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");  // Aplica los puntos de millar
    return partes.join(".");
  }

  return (
    <div className="container-cotizacion">
      <div className="logo-fondo"></div>
      <div className="container-superior">
        <h1>Cotización</h1>
        <div className="container-precios">
          <div className="subcontainer-detalle">
            <div className="container-detalle-precio">
              <p className="texto-detalle-viajes">
                {viajes} viajes desde <span>{origen} </span>hasta <span>{destino}</span> {via !== null ? `por ${via}` : ''} (tarifa normal)
              </p>
              <p className="texto-precio-viajes">$ {puntoDeMillar(precioNormal)}</p>
            </div>
            <div className="container-descuento-precio">
              <p className="texto-detalle-descuento">Descuento para {tarifa}</p>
              <p className="texto-precio-descuento">- $ {puntoDeMillar(Math.round(precioDescuento))}</p>
            </div>
          </div>
          <div className="container-preciofinal">
            <p>Precio final</p>
            <p className="preciofinal">$ {puntoDeMillar(Math.round(precioNormal - precioDescuento))}</p>
          </div>
        </div>
      </div>
      <div className="container-inferior">
        <div className="container-info">
          <p className="titulo-infoabonos">Requisitos para tener tu abono</p>
          <ul>
            <li>EMPLEADOS: Copia de recibo de sueldo y copia del DNI</li>
            <li>ESTUDIANTES: Constancia de alumno regular y copia del DNI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
