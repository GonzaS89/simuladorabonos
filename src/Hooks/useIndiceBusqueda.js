import { useState, useEffect } from "react";

export const useIndiceBusqueda = (grilla, hora) => {

    const [indiceDeBusqueda, setIndiceDeBusqueda] = useState()

    const truncarNumero = num => { return Math.trunc(num) }

    useEffect(() => {
        const salidas = grilla.map(objeto =>
          (truncarNumero((truncarNumero(objeto.salida) * 60) + ((objeto.salida - truncarNumero(objeto.salida)) * 100)) - hora));
        if (salidas.length > 0) {
          const masCercano = salidas.reduce((a, b) => {
            return Math.abs(a) < Math.abs(b) ? a : b;
          })
          setIndiceDeBusqueda(salidas.indexOf(masCercano))
        };
    
      }, [grilla, hora]);
  return (
    {indiceDeBusqueda}
  )
}
