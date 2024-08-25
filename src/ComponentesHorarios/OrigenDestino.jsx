import React, { useEffect, useState } from "react";
import "../Estilos/horarios.css";
import { FcApproval } from "react-icons/fc";
import grilla from "../grillas.json";

export const OrigenDestino = ({
  nombre,
  idCiudadSeleccionada,
  ciudadOrigen,
  diaRango,
  idaVuelta,
  grillaEnviada,
  grillaDefinitiva
}) => {

  const switchearGrillaLunesAViernesIda = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.lunesAViernes.idas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.lunesAViernes.idas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.lunesAViernes.idas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.lunesAViernes.idas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.lunesAViernes.idas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.lunesAViernes.idas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.lunesAViernes.idas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const switchearGrillaSabadosIda = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.sabados.idas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.sabados.idas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.sabados.idas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.sabados.idas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.sabados.idas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.sabados.idas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.sabados.idas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const switchearGrillaDomingosIda = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.domingos.idas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.domingos.idas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.domingos.idas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.domingos.idas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.domingos.idas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.domingos.idas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.domingos.idas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const switchearGrillaLunesAViernesVuelta = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.lunesAViernes.vueltas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.lunesAViernes.vueltas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.lunesAViernes.vueltas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.lunesAViernes.vueltas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.lunesAViernes.vueltas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.lunesAViernes.vueltas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.lunesAViernes.vueltas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const switchearGrillaSabadosVuelta = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.sabados.vueltas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.sabados.vueltas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.sabados.vueltas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.sabados.vueltas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.sabados.vueltas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.sabados.vueltas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.sabados.vueltas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const switchearGrillaDomingosVuelta = () => {
    switch (nombre) {
      case "la florida x alderetes/alternativa":
        grillaEnviada(grilla.domingos.vueltas.floridaxalderetesalter);
        break;
      case "la florida x w. posse":
        grillaEnviada(grilla.domingos.vueltas.floridaxposse);
        break;
      case "w. posse"  :
        grillaEnviada(grilla.domingos.vueltas.posse);
      break;
      case "los ralos"  :
        grillaEnviada(grilla.domingos.vueltas.ralos);
      break;
      case "las cejas"  :
        grillaEnviada(grilla.domingos.vueltas.cejas);
      break;
      case "7 de abril"  :
        grillaEnviada(grilla.domingos.vueltas.sieteDeAbril);
      break;
      case "cruz alta"  :
        grillaEnviada(grilla.domingos.vueltas.ralosCruzAlta);
      break;
      default:
      break
    }
  };

  const [ciudadClickeada, setCiudadClickeada] = useState(false);           
  const actualizarCiudad = () => {
    idCiudadSeleccionada(nombre);
    if(idaVuelta === 'idas'){
      if(diaRango === 'lunesAViernes'){switchearGrillaLunesAViernesIda();}
      if(diaRango === 'sabados'){switchearGrillaSabadosIda();}
      else{switchearGrillaDomingosIda()}

    }
    else{
      if(diaRango === 'lunesAViernes'){switchearGrillaLunesAViernesVuelta()}
      if(diaRango === 'sabados'){switchearGrillaSabadosVuelta()}
      else{switchearGrillaDomingosVuelta()}
    }
  };

  useEffect(() => {
    ciudadOrigen === nombre && setCiudadClickeada(true);
  }, [ciudadOrigen, nombre,grillaDefinitiva]);


  return (
    <div className="container-origenes_ciudad" onClick={actualizarCiudad}>
      <p className="container-origenes_texto">{nombre}</p>
      <FcApproval
        className={
          ciudadClickeada
            ? "container-origenes_img img-enabled"
            : "container-origenes_img img-disabled"
        }
      />
    </div>
  );
};
