import { useEffect, useState } from "react";

export const useFiltradoHorarios = (origen,destino,listado,via) => {

  const [listaHorarios, setListaHorarios] = useState([]);

  useEffect(() => {
    if (listado !== null) {
      const horariosFiltrados = [];
      listado.forEach((horario) => {
        const recorrido = horario.recorrido;

        const incluyeOrigen = recorrido.includes(origen);
        const incluyeDestino = recorrido.includes(destino);
        const indexOrigen = recorrido.indexOf(origen);
        const indexDestino = recorrido.indexOf(destino);

        // Caso cuando 'via' es null
        if (via === null) {
          if (origen === destino) {
            if (incluyeOrigen && recorrido.indexOf("s. m. de tucumán") !== 0) {
              horariosFiltrados.push(horario);
            }
          } else if (
            incluyeOrigen &&
            incluyeDestino &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' es 'w. posse'
        else if (via === "w. posse") {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            recorrido.includes(via) &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
        // Caso cuando 'via' no es 'w. posse'
        else {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            !recorrido.includes("w. posse") &&
            indexOrigen < indexDestino
          ) {
            horariosFiltrados.push(horario);
          }
        }
      });

      // Actualiza el estado solo una vez con los horarios filtrados
      setListaHorarios(horariosFiltrados.sort((a, b) => a.salida - b.salida));
    }
  }, [origen, destino, via, listado]);
  return {listaHorarios}
}
