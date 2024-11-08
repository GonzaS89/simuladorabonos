import { useState, useEffect } from "react"

export const useHora = () => {

    const [minutos, setMinutos] = useState(new Date().getMinutes());

    const [hora, setHora] = useState(new Date().getHours())

    const [dia, setDia] = useState(new Date().getDay());

    useEffect(() => {
        const updateHoraMinutosDias = () => {
          setMinutos(new Date().getMinutes());
          setHora(new Date().getHours());
          setDia(new Date().getDay());
        };
    
        // Actualiza cada minuto
        const timerIdMinutes = setInterval(updateHoraMinutosDias, 1000);
    
        // También actualiza inmediatamente cuando el componente se monta
        updateHoraMinutosDias();
    
        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(timerIdMinutes);
      }, []);

  return {minutos,hora,dia}
}
