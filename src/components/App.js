import React from 'react';
import PlacarContainer from "./PlacarContainer";

const dados = {
  partida: {
    estadio: "Mineirão/MG",
    data: "08/07/2014",
    horario: "17h",
  },
  casa: {
    nome: "Brasil",
  },
  visitante: {
    nome: "Alemanha",
  },
};

function App() {
  return <PlacarContainer {...dados} />;
}

export default App;
