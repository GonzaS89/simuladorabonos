import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Abonos from './Screens/Abonos';
import Horarios from "./Screens/Horarios";
import Resultadocotizador from "./ComponentesAbonos/Resultadocotizacion";
import { CotizacionAbonos } from "./ComponentesAbonos/CotizacionAbonos";

// import { Categorias } from "./Componentes/Categorias";

function App ( ) {

  return (
    <div className="App">
      <div className="portada">
      <img src={require('../src/IMG/Logo_sinfondo.png')} className="logo-portada"/>
      <Router>
        <div className="container-secciones">
        <h1>Elegí un tipo de consulta</h1>
          <Link to="/abonos">
            <div className="seccion-boton">
              <img src={require('../src/IMG/cupon-de-descuento.png')} alt=""/>
              <p>Abonos</p>
            </div>
          </Link>
          <Link to="/horarios">
            <div className="seccion-boton">
              <img src={require('../src/IMG/parada-de-autobus.png')} alt=""/>
              <p>Horarios</p>
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/abonos" element={<Abonos />}></Route>
          <Route path="/horarios" element={<Horarios />}></Route>
          <Route path="/cotizacion" element={<CotizacionAbonos />}></Route>
        </Routes>
      </Router> 
      </div>
    </div>
  );
}

export default App;
