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
  codigo21,
  codigo24,
  codigo27,
  codigo30,
  codigo34,
  codigo41,
  codigo44,
} from "../tarifas";

export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  lista,
  via,
}) => {
  const [precioNormal, setPrecioNormal] = useState();
  const [precioDescuento, setPrecioDescuento] = useState();

  useEffect(() => {
    if (lista !== null) {
      if (
        (lista.includes("la florida") || lista.includes("fortín")) &&
        (lista.includes("la florida") ||
          lista.includes("w. posse") ||
          lista.includes("el talar") ||
          lista.includes("fortn") ||
          lista.includes("el paraíso") ||
          lista.includes("el talar"))
      ) {
        setPrecioNormal(viajes * codigo06);
      }
      if (
        (lista.includes("la florida") || lista.includes("fortín")) &&
        (lista.includes("alderetes") ||
          lista.includes("colonia 4 (luisiana") ||
          lista.includes("cevil pozo") ||
          lista.includes("fila de la orilla"))
      ) {
        setPrecioNormal(viajes * codigo08);
      }
      if (lista.includes("la florida") || lista.includes("fortín")) {
        if (lista.includes("banda del río salí")) {
          if (via === "alderetes") {
            setPrecioNormal(viajes * codigo11)
          } else {
            setPrecioNormal(viajes * codigo14);
          }
        }
      }

      if(lista.includes("la florida") || lista.includes("fortín")){
        if(lista.includes("san miguel de tucumán")){
          if (via === "ald./alter.") {
            setPrecioNormal(viajes * codigo16)
          } else {
            setPrecioNormal(viajes * codigo21);
          }
        }
      }

      if(lista.includes("w. posse")){
        if(lista.includes("el paraíso") || lista.includes("fila del medio") || lista.includes("fila de la orilla") || lista.includes("cevil pozo") || lista.includes("colonia 4 (luisiana)")){
          setPrecioNormal(viajes * codigo06)
        }
        if(lista.includes("banda del río salí")){setPrecioNormal(viajes * codigo08)}
        if(lista.includes("san miguel de tucumán")){setPrecioNormal(viajes * codigo18)}
      }

      if(lista.includes("los ralos")){
          if(lista.includes("cruz alta")){setPrecioNormal(viajes * codigo10)}
          if(lista.includes("finca mayo")){setPrecioNormal(viajes * codigo11)}
          if(lista.includes("fila de la orilla")){setPrecioNormal(viajes * codigo12)}
          if(lista.includes("cevil pozo")){setPrecioNormal(viajes * codigo16)}
          if(lista.includes("banda del río salí")){setPrecioNormal(viajes * codigo18)}
          if(lista.includes("san miguel de tucumán")){setPrecioNormal(viajes * codigo21)}
          if(lista.includes("las cejas")){setPrecioNormal(viajes * codigo24)}
          if(lista.includes("7 de abril")){setPrecioNormal(viajes * codigo44)}
      }

      if(lista.includes("las cejas")){
        if(lista.includes("fila de la orilla") || lista.includes("cevil pozo")){setPrecioNormal(viajes * codigo27)}
        if(lista.includes("banda del río salí")){setPrecioNormal(viajes * codigo30)}
        if(lista.includes("san miguel de tucumán")){setPrecioNormal(viajes * codigo34)}
        if(lista.includes("7 de abril")){setPrecioNormal(viajes * codigo41)}
      }

      if(lista.includes("cevil pozo")){
        if(lista.includes("fila de la orilla") || lista.includes("fila del medio") || lista.includes("cruz alta") || lista.includes("banda del río salí")){setPrecioNormal(viajes * codigo06)}
        if(lista.includes("el paraíso") || lista.includes("san miguel de tucumán")){setPrecioNormal(viajes * codigo08)}
        if(lista.includes("colonia 4 (luisiana)")){setPrecioNormal(viajes * codigo14)}
        if(lista.includes("finca mayo")){setPrecioNormal(viajes * codigo21)}
        if(lista.includes("7 de abril")){setPrecioNormal(viajes * codigo44)}
      }

      if(lista.includes("san miguel de tucumán")){
        if(lista.includes("banda del río salí")){setPrecioNormal(viajes * codigo06)}
        if(lista.includes("alderetes")){setPrecioNormal(viajes * codigo08)}
        if(lista.includes("fila de la orilla") || lista.includes("fila del medio")){setPrecioNormal(viajes * codigo12)}
        if(lista.includes("el talar")){setPrecioNormal(viajes * codigo13)}
        if(lista.includes("cruz alta")){setPrecioNormal(viajes * codigo15)}
        if(lista.includes("la florida") || lista.includes("fortín") || lista.includes("colonia 4 (luisiana")){
          if(via === 'w. posse'){setPrecioNormal(viajes * codigo21)}
          else{setPrecioNormal(viajes * codigo16)}
        }
        if(lista.includes("el paraíso")){setPrecioNormal(viajes * codigo18)}
        if(lista.includes("finca mayo")){setPrecioNormal(viajes * codigo24)}
      }
    }
  }, [origen, destino, viajes, lista, via]);

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
                {viajes} viajes desde <span>{origen} </span>hasta <span>{destino}</span> {via !== null ? `por ${via}` : ''} (tarifa normal)
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
