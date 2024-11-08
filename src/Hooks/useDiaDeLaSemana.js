import { useEffect, useState } from "react";
import grillab from "../grillasb.json";

export const useDiaDeLaSemana = ( val ) => {

    const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

    useEffect(() => {
        switch (val) {
          case "lunesAViernes":
            setDiaDeLaSemana(grillab.lunesAViernes);
            break;
    
          case "sabados":
            setDiaDeLaSemana(grillab.sabados);
            break;
    
          case "domingos":
            setDiaDeLaSemana(grillab.domingos);
            break;
    
          default:
            break;
        }
      }, [val]);

  return {diaDeLaSemana}
}
