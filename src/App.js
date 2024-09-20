import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Horarios from "./Screens/Horarios";
import { CotizacionAbonos } from "./Screens/CotizacionAbonos";
import { useState } from "react";
import { Botonseccion } from "./Botonseccion";
import Main from "./Screens/main";

// import { Categorias } from "./Componentes/Categorias";

function App() {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [via, setVia] = useState(null);
  const [listaHorarios, setListaHorarios] = useState(null);
  const [keyBoton, setKeyBoton] = useState(null);
  const [horaAutoEnMins, setHoraAutoEnMins] = useState(null);
  const [horaManualEnMins, setHoraManualEnMins] = useState(null);

  
  const recibirParametrosAbonos = (origen, destino, viajes, tarifa, via, listahorarios, horaAutoMin, horaManualMin) => {
    if(keyBoton === 'abonos'){
      setLocalidadOrigen(origen);
      setLocalidadDestino(destino);
      setViajesIngresados(viajes);
      setTarifaElegida(tarifa);
      setVia(via)
    }
    else{
      setLocalidadOrigen(origen);
      setLocalidadDestino(destino);
      setListaHorarios(listahorarios)
      setHoraManualEnMins(horaManualMin);
      setHoraAutoEnMins(horaAutoMin);
    }
  }

  const recibirKey = nombre => { setKeyBoton(nombre)}

  return (
    <div className="App">
      <div className="portada">
        <img src={require('../src/IMG/Logo_sinfondo.png')} className="logo-portada" alt="logofondo" />
        <Router>
          <div className="container-secciones">
            <h1>Elegí un tipo de consulta</h1>
            <Link to="/abonos">
              <Botonseccion nombre={'abonos'} enviarKey={recibirKey} />
            </Link>
            <Link to="/abonos">
              <Botonseccion nombre={'horarios'} enviarKey={recibirKey} />
            </Link>
          </div>
          <Routes>
            <Route path="/abonos" element={<Main enviarParametrosAbonos={recibirParametrosAbonos} keyBoton={keyBoton}/>}></Route>
            <Route path="/horarios" element={<Horarios grillaDefinitiva={listaHorarios} origen={localidadOrigen} destino={localidadDestino} horaAuto={horaAutoEnMins} horaManual={horaManualEnMins}/>}></Route>
            <Route path="/cotizacion" element={<CotizacionAbonos origen={localidadOrigen} destino={localidadDestino} viajes={viajesIngresados} tarifa={tarifaElegida} via={via} />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
