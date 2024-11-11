import { useEffect, useState } from "react";

export const useEstadoservicio = (minutos) => {

    const [estado, setEstado] = useState();

    useEffect(() => {
      if(minutos < -90){
        setEstado( 'Inactivo')
      }
      else if (minutos < -60) {
        setEstado( "Inició recorrido hace mas de una hora")
      }
      else if (minutos < -30 && minutos > -60) {
        setEstado( "Inició recorrido hace media hora")
      }
      else if (minutos >= -30 && minutos < 0) {
        setEstado( `Inició recorrido hace ${Math.abs(minutos)} minutos`)
      }
      else if (minutos === 0) {
        setEstado( "Está iniciando recorrido")
      }
      else if (minutos > 0 && minutos <= 3) {
        setEstado( "Pronto iniciará su recorrido")
      }
      else if(minutos > 3 && minutos < 60){
        setEstado( `Iniciará su recorrido en ${minutos} minutos`)
      }
      else if (minutos === 60) {
        setEstado( "Iniciará recorrido en una hora")
      }
      else if (minutos > 60 && minutos <= 90) {
        setEstado( "Iniciará su recorrido en poco más de una hora")
      }
      else if (minutos > 90 && minutos < 120) {
        setEstado( "Iniciará su recorrido en poco menos de dos horas")
      }
      else if (minutos > 120) {
        setEstado( "inactivo")
      }
    },[minutos]) 
    
  return {estado}
}
