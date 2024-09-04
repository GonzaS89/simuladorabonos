import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Abonos from './Screens/Abonos';
import Horarios from "./Screens/Horarios";
import { CotizacionAbonos } from "./Screens/CotizacionAbonos";
import { useState } from "react";

// import { Categorias } from "./Componentes/Categorias";

function App() {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);

  const recibirParametrosAbonos = (origen, destino, viajes, tarifa) => {
    setLocalidadOrigen(origen);
    setLocalidadDestino(destino);
    setViajesIngresados(viajes);
    setTarifaElegida(tarifa);
  }

  return (
    <div className="App">
      <div className="portada">
        <img src={require('../src/IMG/Logo_sinfondo.png')} className="logo-portada" alt="logofondo"/>
        <Router>
          <div className="container-secciones">
            <h1>Elegí un tipo de consulta</h1>
            <Link to="/abonos">
              <div className="seccion-boton">
                <img src={require('../src/IMG/cupon-de-descuento.png')} alt="" />
                <p>Abonos</p>
              </div>
            </Link>
            <Link to="/horarios">
              <div className="seccion-boton">
                <img src={require('../src/IMG/parada-de-autobus.png')} alt="" />
                <p>Horarios</p>
              </div>
            </Link>
          </div>
          <Routes>
            <Route path="/abonos" element={<Abonos enviarParametrosAbonos={recibirParametrosAbonos} />}></Route>
            <Route path="/horarios" element={<Horarios />}></Route>
            <Route path="/cotizacion" element={<CotizacionAbonos origen={localidadOrigen} destino={localidadDestino} viajes={viajesIngresados} tarifa={(tarifaElegida)} />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
