import "./App.css";
import ListaLocalidades from "./Componentes/ListaLocalidades";

function App() {
  return (
    <div className="App">
      <div className="contenedor-general">
        <div className="contenedor-slide-localidades">
          <ListaLocalidades />
          <ListaLocalidades />
        </div>
      </div>
    </div>
  );
}

export default App;
