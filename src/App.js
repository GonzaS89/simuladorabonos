import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Abonos from './Screens/Abonos';

// import { Categorias } from "./Componentes/Categorias";

function App ( ) {

  

  return (
    <div className="App">
      <Router>
        <div className="container-secciones">
          <Link to="/abonos">
            <div className="seccion-boton">
              <p>Abonos</p>
              <img src={require('./Iconos/abonos.png')} alt=""/>
            </div>
          </Link>
          <Link to="/horarios">
            <div className="seccion-boton">
              <p>Horarios</p>
              <img src={require('./Iconos/horarios.png')} alt=""/>
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/abonos" element={<Abonos />}></Route>
          <Route path="/horarios"></Route>
        </Routes>
      </Router> 
      {/* <Abonos /> */}
    </div>
  );
}

export default App;
