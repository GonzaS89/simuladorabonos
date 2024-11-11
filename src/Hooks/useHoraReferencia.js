import { useState, useEffect} from "react";

export const useHoraReferencia = (manual, automatica) => {

    const [horaDeReferencia, setHoraDeReferencia] = useState()

    useEffect(() => {
        if(automatica === null){setHoraDeReferencia(manual)}
        else if(manual === null){setHoraDeReferencia(automatica)}
      },[automatica, manual]);

  return {horaDeReferencia}
}
