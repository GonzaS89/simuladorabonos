import { useState, useEffect } from "react";

export const useReturnDestinos = (localidad) => {

    const [arrayDestinos, setArrayDestinos] = useState(localidad)

    useEffect(() => {
        switch (localidad) {
            case "la florida":
              setArrayDestinos([
                "la florida",
                "w. posse",
                "alderetes",
                "banda del río salí",
                "s. m. de tucumán",
                "el paraíso",
                "cevil pozo",
                "colonia 4 (luisiana)",
                "fortín",
                "el talar",
                "colonia media agua"
              ]);
              break;
      
            case "w. posse":
              setArrayDestinos([
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
                "la florida",
                "el paraíso",
                "colonia 4 (luisiana)",
                "fortín",
              ]);
              break;
      
            case "el paraíso":
              setArrayDestinos([
                "la florida",
                "w. posse",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "colonia 4 (luisiana)":
              setArrayDestinos([
                "la florida",
                "el paraíso",
                "w. posse",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "los ralos":
              setArrayDestinos([
                "los ralos",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "cruz alta":
              setArrayDestinos([
                "cruz alta",
                "los ralos",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "el talar":
              setArrayDestinos([
                "la florida",
                "colonia 4 (luisiana)",
                "alderetes",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "fortín":
              setArrayDestinos([
                "w. posse",
                "el paraíso",
                "alderetes",
                "el talar",
                "la florida",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "cevil pozo":
              setArrayDestinos([
                "los ralos",
                "las cejas",
                "w. posse",
                "el paraíso",
                "la florida",
                "colonia 4 (luisiana)",
                "fortín",
              ]);
              break;
      
            case "fila de la orilla":
              setArrayDestinos([
                "w. posse",
                "el paraíso",
                "la florida",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "fila del medio":
              setArrayDestinos([
                "w. posse",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "las cejas":
              setArrayDestinos([
                "las cejas",
                "los ralos",
                "cevil pozo",
                "banda del río salí",
                "s. m. de tucumán",
              ]);
              break;
      
            case "7 de abril":
              setArrayDestinos(["banda del río salí", "s. m. de tucumán"]);
              break;
      
            case "s. m. de tucumán":
              setArrayDestinos([
                "la florida",
                "w. posse",
                "los ralos",
                "cevil pozo",
                "el paraíso",
                "alderetes",
                "el talar",
                "banda del río salí",
                "fila del medio",
                "fila de la orilla",
                "fortín",
                "colonia 4 (luisiana)",
                "7 de abril",
                "las cejas",
                "la marta",
                "finca mayo",
              ]);
              break;
      
            case "alderetes":
              setArrayDestinos([
                "la florida",
                "el talar",
                "fortín",
                "colonia 4 (luisiana)",
                "la marta",
                "finca mayo",
              ]);
              break;
      
            case "banda del río salí":
              setArrayDestinos([
                "la florida",
                "el paraíso",
                "w. posse",
                "fortín",
                "alderetes",
                "colonia 4 (luisiana)",
              ]);
              break;
      
            case "alabama":
              setArrayDestinos([
                "los ralos",
                "cevil pozo",
                "finca mayo",
                "banda del río salí",
                "s. m. de tucumán"
              ]);
              break;
      
              case "colonia media agua":
              setArrayDestinos([
                "los ralos",
                "cevil pozo",
                "finca mayo",
                "banda del río salí",
                "s. m. de tucumán",
                "la florida",
                "fila del medio",
                "fila de la orilla",
                "w. posse",
                "el paraíso",
                "las cejas",
                "7 de abril"
              ]);
              break;
      
              case "esquina llona":
              setArrayDestinos([
                "los ralos",
                "cevil pozo",
                "finca mayo",
                "banda del río salí",
                "s. m. de tucumán",
                "la florida",
                "fortín",
                "colonia 4 (luisiana)",
                "fila de la orilla",
                "w. posse",
                "el paraíso",
                "las cejas",
                "7 de abril"
              ]);
              break;
            default:
              break;
            }    
    },[localidad])

  return {arrayDestinos}
}
