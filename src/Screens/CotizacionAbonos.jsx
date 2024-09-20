import React, { useEffect, useState } from "react";
import "../Estilos/cotizacion.css";

export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  via,
  codigo
}) => {

  const [precioNormal, setPrecioNormal] = useState(0);
  const [precioDescuento, setPrecioDescuento] = useState(0);

  useEffect(() => {
    setPrecioNormal(viajes * codigo)
  },[codigo, viajes])

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
