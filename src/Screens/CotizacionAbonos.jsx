import React, { useEffect, useState } from "react";
import "../Estilos/cotizacion.css";
import CountUp from 'react-countup';
import { useGenerarCodigo } from "../Hooks/useGenerarCodigo";

export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  via,
}) => {

  const {codigo} = useGenerarCodigo(origen,destino,via);
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

  // const puntoDeMillar = numero => {
  //   const partes = numero.toString().split(".");  // Divide la parte entera y decimal
  //   partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");  // Aplica los puntos de millar
  //   return partes.join(".");
  // }

 
  return (
    <div className="container-screen flex flex-col justify-center gap-4">
      <div className="container-superior">
        <h1 className="text-3xl text-white mb-0">Cotización</h1>
        <div className="container-precios">
          <div className="subcontainer-detalle">
            <div className="container-detalle-precio">
              <p className="texto-detalle-viajes">
                {viajes} viajes desde <span>{origen} </span>hasta <span>{destino}</span> {via !== null ? `por ${via}` : ''} (tarifa normal)
              </p>
              <p className="texto-precio-viajes">$ <CountUp start={0} end={precioNormal} duration={1}/></p>
            </div>
            <div className="container-descuento-precio">
              <p className="texto-detalle-descuento">Descuento por tarifa {tarifa}</p>
              <p className="texto-precio-descuento">- $ <CountUp start={0} end={Math.round(precioDescuento)} duration={1}/></p>
            </div>
          </div>
          <div className="bg-red-700 absolute bottom-0 w-full flex justify-between items-center text-white uppercase h-14 px-4">
            <p className="text-2xl">Precio final</p>
            <p>$ <CountUp start={0} end={Math.round(precioNormal - precioDescuento)} duration={1}/></p>
          </div>
        </div>
      </div>
        <div className="container-info px-6  text-white flex flex-col gap-8">
          <p className="uppercase text-xl">Requisitos para tener tu abono</p>
          <ul className="flex flex-col gap-4">
            <li className="text-left text-lg">TARIFA SOCIAL: numero del DNI</li>
            <li className="text-left text-lg">TARIFA ESTUDIANTIL: constancia de alumno regular y numero del DNI</li>
          </ul>
        </div>
      </div>
  );
};
