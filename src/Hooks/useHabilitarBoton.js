import { useEffect, useState } from "react";
export const useHabilitarBoton = (origen,destino,via) => {

    const [esValido, setEsValido] = useState();

    useEffect(() => {
        const esdestinoValida =
          destino === "s. m. de tucumán" ||
          destino === "banda del río salí";
        const esorigenValida =
          origen === "s. m. de tucumán" ||
          origen === "banda del río salí";
        const floridaFortinCol4Origen =
          origen === "la florida" ||
          origen === "fortín" ||
          origen === "colonia 4 (luisiana)";
        const floridaFortinCol4Destino =
          destino === "la florida" ||
          destino === "fortín" ||
          destino === "colonia 4 (luisiana)";
  
        if (
          (esorigenValida && floridaFortinCol4Destino) ||
          (esdestinoValida && floridaFortinCol4Origen)
        ) {
          if (
            origen !== null &&
            destino !== null &&
            via !== null
          ) {
            setEsValido(true);
          }
        } else {
          if (origen !== null && destino !== null) {
            setEsValido(true);
          }
        }
      
    }, [origen, destino, via]);

  return {esValido}
}
