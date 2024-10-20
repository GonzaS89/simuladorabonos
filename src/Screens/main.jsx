// import "./App.css";
import React, { useState, useEffect } from "react";
import localidades from "../localidades.json";
import grillab from '../grillasb.json';
import {
  codigo06,
  codigo08,
  codigo10,
  codigo11,
  codigo12,
  codigo13,
  codigo14,
  codigo15,
  // codigo15,
  codigo16,
  // codigo18,
  codigo21,
  codigo22,
  codigo24,
  // codigo27,
  // codigo30,
  // codigo34,
  // codigo41,
  codigo44,
} from "../tarifas";
import "../Estilos/abonos.css";
import { OpcionLocalidad } from "../ComponentesAbonos/OpcionLocalidad";
import { OpcionLocalidadDestino } from "../ComponentesAbonos/OpcionLocalidadDestino";
import { Link } from 'react-router-dom';
import { Containerviajestarifas } from "../ComponentesAbonos/Containerviajestarifas";
import { ContainerHoraDia } from "../ComponentesHorarios/ContainerHoraDia";

const Main = ({ enviarParametrosAbonos, keyBoton , enviarCodigo }) => {

  // SECTOR HORARIOS

  const [minutos, setMinutos] = useState(new Date().getMinutes());
  const [hora, setHora] = useState(new Date().getHours());
  const [dia, setDia] = useState(new Date().getDay());

  useEffect(() => {
    const updateHoraMinutosDias = () => {
      setMinutos(new Date().getMinutes());
      setHora(new Date().getHours());
      setDia(new Date().getDay())
    };

    // Actualiza cada minuto
    const timerIdMinutes = setInterval(updateHoraMinutosDias, 1000);

    // También actualiza inmediatamente cuando el componente se monta
    updateHoraMinutosDias();

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timerIdMinutes);
  }, []);



  //
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [listaLocDestino, setListaLocDestino] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const [listaHorarios, setListaHorarios] = useState([]);
  const [horaManualMin, setHoraManualMin] = useState(null);
  const [horaAutoMin, setHoraAutoMin] = useState(null);



  useEffect(() => {
    switch (localidadOrigen) {
      case "la florida":
        setListaLocDestino([
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
        setListaLocDestino([
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
        setListaLocDestino([
          "la florida",
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "colonia 4 (luisiana)":
        setListaLocDestino([
          "la florida",
          "el paraíso",
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "los ralos":
        setListaLocDestino([
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "cruz alta":
        setListaLocDestino([
          "cruz alta",
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "el talar":
        setListaLocDestino([
          "la florida",
          "colonia 4 (luisiana)",
          "alderetes",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "fortín":
        setListaLocDestino([
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
        setListaLocDestino([
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
        setListaLocDestino([
          "w. posse",
          "el paraíso",
          "la florida",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "fila del medio":
        setListaLocDestino([
          "w. posse",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "las cejas":
        setListaLocDestino([
          "las cejas",
          "los ralos",
          "cevil pozo",
          "banda del río salí",
          "s. m. de tucumán",
        ]);
        break;

      case "7 de abril":
        setListaLocDestino(["banda del río salí", "s. m. de tucumán"]);
        break;

      case "s. m. de tucumán":
        setListaLocDestino([
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
        setListaLocDestino([
          "la florida",
          "el talar",
          "fortín",
          "colonia 4 (luisiana)",
          "la marta",
          "finca mayo",
        ]);
        break;

      case "banda del río salí":
        setListaLocDestino([
          "la florida",
          "el paraíso",
          "w. posse",
          "fortín",
          "alderetes",
          "colonia 4 (luisiana)",
        ]);
        break;

      case "alabama":
        setListaLocDestino([
          "los ralos",
          "cevil pozo",
          "finca mayo",
          "banda del río salí",
          "s. m. de tucumán"
        ]);
        break;

        case "colonia media agua":
        setListaLocDestino([
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
        setListaLocDestino([
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
    const esLocalidadDestinoValida = localidadDestino === 's. m. de tucumán' || localidadDestino === 'banda del río salí';
    const localidadConViasAlternas = localidadOrigen === 'la florida' || localidadOrigen === 'colonia 4 (luisiana)' || localidadOrigen === 'fortín';
    const camposCompletos = localidadOrigen !== null && localidadDestino !== null && viajesIngresados !== null && tarifaElegida !== null;

    if (esLocalidadDestinoValida && localidadConViasAlternas ? camposCompletos && via !== null : camposCompletos) {
      setBotonDisponible(true);
    } else {
      setBotonDisponible(false);
    }


  }, [localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via]);

  useEffect(() => {
    if(keyBoton === 'horarios'){
      const esLocalidadDestinoValida = localidadDestino === 's. m. de tucumán' || localidadDestino === 'banda del río salí';
      const esLocalidadOrigenValida = localidadOrigen === 's. m. de tucumán' || localidadOrigen === 'banda del río salí';
      const floridaFortinCol4Origen = localidadOrigen === 'la florida' || localidadOrigen === 'fortín' || localidadOrigen === 'colonia 4 (luisiana)';
      const floridaFortinCol4Destino = localidadDestino === 'la florida' || localidadDestino === 'fortín' || localidadDestino === 'colonia 4 (luisiana)';

      if((esLocalidadOrigenValida && floridaFortinCol4Destino) || (esLocalidadDestinoValida && floridaFortinCol4Origen)){
        if(localidadOrigen !== null && localidadDestino !== null && via !== null){
          setBotonDisponible(true)
        }
      }else{
        if(localidadOrigen !== null && localidadDestino !== null){
          setBotonDisponible(true)
        }
      }
    }
  },[localidadOrigen,localidadDestino, keyBoton,via])

  const recibirLocalidad = (localidad) => {
    setLocalidadOrigen(localidad);
  };

  const recibirLocalidadDestino = (localidad) => {
    setLocalidadDestino(localidad);
    setListaHorarios([])
  };


  const recibirVia = via => { setVia(via) }

  const [diaAuto, setDiaAuto] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [rangoDias, setRangoDias] = useState(null);
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

  const recibirDiaRango = diarango => {
    setDiaAuto(diarango);
  }

  const recibirDiaManual = dia => {
    setDiaManual(dia);
  }

  useEffect(()=> {
    if(diaManual !== null) {setRangoDias(diaManual)}
    else{setRangoDias(diaAuto)}
  },[diaAuto,diaManual])

  useEffect(() => {
    switch (rangoDias){
      case 'lunesAViernes': setDiaDeLaSemana(grillab.lunesAViernes);
      break;
  
      case 'sabados': setDiaDeLaSemana(grillab.sabados);
      break;
  
      case 'domingos': setDiaDeLaSemana(grillab.domingos);
      break;
  
      default:break;
    }
  },[rangoDias])


  

  useEffect(() => {
    setVia(null)
  }, [localidadDestino])

  const recibirTarifaElegida = tarifa => { setTarifaElegida(tarifa) }
  const recibirViajesIngresados = viajes => { setViajesIngresados(viajes) }

  useEffect(() => {
    if(diaDeLaSemana !== null){
    const horariosFiltrados = [];
      diaDeLaSemana.forEach(horario => {
        const recorrido = horario.recorrido;

        const incluyeOrigen = recorrido.includes(localidadOrigen);
        const incluyeDestino = recorrido.includes(localidadDestino);
        const indexOrigen = recorrido.indexOf(localidadOrigen);
        const indexDestino = recorrido.indexOf(localidadDestino);

        // Caso cuando 'via' es null
        if (via === null) {
          if (localidadOrigen === localidadDestino) {
            if (incluyeOrigen && recorrido.indexOf('s. m. de tucumán') !== 0) {
              horariosFiltrados.push(horario);
            }
          } else if (incluyeOrigen && incluyeDestino && indexOrigen < indexDestino) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' es 'w. posse'
        else if (via === 'w. posse') {
          if (incluyeOrigen && incluyeDestino && recorrido.includes(via) && indexOrigen < indexDestino) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' no es 'w. posse'
        else {
          if (incluyeOrigen && incluyeDestino && !recorrido.includes('w. posse') && indexOrigen < indexDestino) {
            horariosFiltrados.push(horario);
          }
        }
      });

      // Actualiza el estado solo una vez con los horarios filtrados
      setListaHorarios(horariosFiltrados.sort((a, b) => a.salida - b.salida));

    }

  }, [localidadOrigen, localidadDestino, via,diaDeLaSemana])


  const recibirHoraAutoMin = hora => {setHoraAutoMin(hora)}
  const recibirHoraManualMin = hora => {setHoraManualMin(hora);}

  useEffect(() => {
    const floridaFortinCol4L = ['la florida', 'fortín', 'colonia 4 (luisiana)'];
    const destinosCortosFlorida = ['la florida', 'fortín' , 'w. posse', 'el talar', 'el paraíso'];
    const destinoMedianosFlorida = ['alderetes', 'fila de orilla','esquina llona'];

    //POSSE


      if(floridaFortinCol4L.includes(localidadOrigen)){
        if(destinosCortosFlorida.includes(localidadDestino)){
          enviarCodigo(codigo06)
        }
        else if(destinoMedianosFlorida.includes(localidadDestino)){
          enviarCodigo(codigo08)
        }
        else if(localidadDestino === 'colonia media agua'){enviarCodigo(codigo11)}
        else if(localidadDestino === 'cevil pozo'){enviarCodigo(codigo13)}
        else if(localidadDestino === 'banda del río salí'){
          if(via === 'w. posse'){enviarCodigo(codigo14)}
          else{enviarCodigo(codigo11)}
        }
        else if(localidadDestino === 's. m. de tucumán'){
          if(via === 'w. posse'){enviarCodigo(codigo21)}
          else{enviarCodigo(codigo16)}
        }
      }

      const destinosCortosPosse = ['el paraíso', 'la florida','fila del medio', 'fila de la orilla', 'colonia media agua', 'fortín', 'colonia 4 (luisiana)','cevil pozo'];

      const posseYFilas = ['w. posse', 'fila del medio', 'fila de la oriila']
      
        if (posseYFilas.includes(localidadOrigen)) {
          if (destinosCortosPosse.includes(localidadDestino)) {
            enviarCodigo(codigo06)
          }
          else if (localidadDestino === "banda del río salí") { enviarCodigo(codigo08) }
          else if (localidadDestino === "s. m. de tucumán") { enviarCodigo(codigo15) }
        }

        if (localidadOrigen === "los ralos") {
          if (localidadDestino === "cruz alta") { enviarCodigo(codigo10) }
          else if (localidadDestino === "finca mayo") { enviarCodigo(codigo11) }
          else if (localidadDestino === "esquina llona") { enviarCodigo(codigo12) }
          else if (localidadDestino === "cevil pozo") { enviarCodigo(codigo16) }
          else if (localidadDestino === "banda del río salí") { enviarCodigo(codigo16) }
          else if (localidadDestino === "s. m. de tucumán") { enviarCodigo(codigo21) }
          else if (localidadDestino === "las cejas") { enviarCodigo(codigo24) }
          else if (localidadDestino === "7 de abril") { enviarCodigo(codigo44) }
        }

        if (localidadOrigen === "cevil pozo") {
          if (localidadDestino === "fila de la orilla" || localidadDestino === "fila del medio" || localidadDestino === "banda del río salí" || localidadDestino === "colonia media agua" || localidadDestino === "w. posse" || localidadDestino === "cruz alta"){ enviarCodigo(codigo06) }
          else if(localidadDestino === "s.m. de tucumán") { enviarCodigo(codigo08)}
          else if (localidadDestino === "el paraíso"){ enviarCodigo(codigo10) }
          else if (localidadDestino === "la florida") { enviarCodigo(codigo13) }
          else if (localidadDestino === "los ralos") { enviarCodigo(codigo16) }
          else if (localidadDestino === "finca mayo") { enviarCodigo(codigo21) }
          else if (localidadDestino === "la marta") { enviarCodigo(codigo22) }
        }

        

    },[localidadOrigen, localidadDestino, via, enviarCodigo]);

  return (
    <div className="container-screen">
      <div className="container-principal">
        <div className="logo-fondo"></div>
        <h1 className="titulo-principal">{keyBoton === 'abonos' ? 'Calculá el precio de tu abono' : 'Consulta de horarios'}</h1>
        <div className="container-general-parametros">
          <div className="container-origendestino">
            <div className="container-salida">
              <h1 className="titulo-container-salida">Origen</h1>
              <div className="container-opciones-salida">
                {localidades.map((localidad, index) => (
                  <OpcionLocalidad
                    key={index}
                    nombre={localidad.nombre}
                    enviarLocalidad={recibirLocalidad}
                    localidadOrigen={localidadOrigen}
                  />
                ))}
              </div>
            </div>
            <div className={localidadOrigen !== null ? 'container-destino' : 'hidden'}>
              <h1 className="titulo-container-salida">Destino</h1>
              <div className="container-opciones-salida">
                {listaLocDestino !== null &&
                  listaLocDestino.map((localidad, index) => (
                    <OpcionLocalidadDestino
                      key={index}
                      nombre={localidad}
                      enviarLocalidadDestino={recibirLocalidadDestino}
                      localidadDestino={localidadDestino}
                      localidadOrigen={localidadOrigen}
                      enviarVia={recibirVia}
                    />
                  ))}
              </div>
            </div>
          </div>
          {keyBoton === 'abonos' ?
            <Containerviajestarifas enviarTarifaElegida={recibirTarifaElegida} enviarViajesIngresados={recibirViajesIngresados} localidadOrigen={localidadOrigen} /> :
            <ContainerHoraDia hora={hora} minutos={minutos} dia={dia} enviarDiaRango={recibirDiaRango} enviarDiaManual = {recibirDiaManual} enviarHoraAutoMin={recibirHoraAutoMin} enviarHoraManualMin={recibirHoraManualMin}/>}
        </div>
      </div>

        <Link to={keyBoton === 'abonos' ? '/cotizacion' : '/horarios'}>
        <div className={botonDisponible ? 'botonabonos botonenabled' : 'botonabonos botondisabled'} onClick={() => enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via, listaHorarios, horaAutoMin, horaManualMin, diaAuto, diaManual)}>{keyBoton === 'abonos' ? 'calcular' : 'consultar'}</div>
      </Link>
    </div>

  );
};

export default Main;
