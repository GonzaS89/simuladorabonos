import React, { useEffect, useState } from "react";
import "../Estilos/cotizacion.css";
import {
  codigo06,
  codigo08,
  codigo10,
  codigo11,
  codigo12,
  codigo13,
  codigo14,
  codigo15,
  codigo16,
  codigo18,
  codigo19,
  codigo20,
  codigo21,
  codigo22,
  codigo23,
  codigo24,
  codigo26,
  codigo27,
  codigo30,
  codigo34,
  codigo37,
  codigo41,
  codigo44,
} from "../tarifas";

export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  lista,
}) => {
  const [precioNormal, setPrecioNormal] = useState();
  const [precioDescuento, setPrecioDescuento] = useState();

  useEffect(() => {
    if (lista !== null) {
      if (
        (lista.includes("la florida") || lista.includes("fortin")) &&
        (lista.includes("la florida") ||
          lista.includes("w. posse") ||
          lista.includes("el talar") ||
          lista.includes("fortin") ||
          lista.includes("el paraiso") ||
          lista.includes("el talar"))
      ) {
        setPrecioNormal(viajes * codigo06);
      }
      if (
        (lista.includes("la florida") || lista.includes("fortin")) &&
        (lista.includes("alderetes") ||
          lista.includes("colonia 4 (luisiana") ||
          lista.includes("llona") ||
          lista.includes("cevil pozo") ||
          lista.includes("fila de la orilla"))
      ) {
        setPrecioNormal(viajes * codigo08);
      }
      if(
        (lista.includes("la florida") || lista.includes("fortin")) &&
        (lista.includes('banda del rio sali'))
      ){setPrecioNormal(viajes * codigo11)}
    }
  }, [origen, destino, viajes, lista]);

  useEffect(() => {
    tarifa === "empleados"
      ? setPrecioDescuento(precioNormal * 0.3)
      : setPrecioDescuento(precioNormal * 0.4);
  }, [tarifa, precioNormal]);

  return (
    <div className="container-cotizacion">
      <div className="logo-fondo"></div>
      <div className="container-superior">
        <h1>Cotización</h1>
        <div className="container-precios">
          <div className="subcontainer-detalle">
            <div className="container-detalle-precio">
              <p className="texto-detalle-viajes">
                {viajes} viajes desde <span>{origen} </span>hasta{" "}
                <span>{destino}</span> (tarifa normal)
              </p>
              <p className="texto-precio-viajes">$ {precioNormal}</p>
            </div>
            <div className="container-descuento-precio">
              <p className="texto-detalle-descuento">Descuento para {tarifa}</p>
              <p className="texto-precio-descuento">- $ {precioDescuento}</p>
            </div>
          </div>
          <div className="container-preciofinal">
            <p>Precio final</p>
            <p className="preciofinal">$ {precioNormal - precioDescuento}</p>
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
