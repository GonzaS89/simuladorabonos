import "./App.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Abonos from './Screens/Abonos';
import Horarios from "./Screens/Horarios";
import { CotizacionAbonos } from "./Screens/CotizacionAbonos";
import { useState } from "react";
import { Botonseccion } from "./Botonseccion";

// import { Categorias } from "./Componentes/Categorias";

function App() {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [via, setVia] = useState(null);
  const [keyBoton, setKeyBoton] = useState(null);

  const recibirParametrosAbonos = (origen, destino, viajes, tarifa, via) => {
    setLocalidadOrigen(origen);
    setLocalidadDestino(destino);
    setViajesIngresados(viajes);
    setTarifaElegida(tarifa);
    setVia(via)
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
            <Route path="/abonos" element={<Abonos enviarParametrosAbonos={recibirParametrosAbonos} keyBoton={keyBoton} />}></Route>
            <Route path="/horarios" element={<Horarios />}></Route>
            <Route path="/cotizacion" element={<CotizacionAbonos origen={localidadOrigen} destino={localidadDestino} viajes={viajesIngresados} tarifa={(tarifaElegida)} via={via} />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
