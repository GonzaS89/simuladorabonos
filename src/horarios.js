// Grilla horaria

// Destinos (FLORIDA / ALDERETES / ALTERNATIVA)

const terminal = "Terminal";
const alderetes = "Alderetes";
const bandaRS = "Banda del Río Salí";
const autopista = "Autopista";
const alternativa = "Alternativa";
const talar = "El Talar";
const cochuchal = "El Cochuchal";
const florida = "La Florida";
const bCancha = "B° La Cancha";
const fortin = "Fortín";
const esqLastra = "Esquina Lastra";
const col3Luisiana = "Colonia 3 (Luisiana)";
const col4Luisiana = "Colonia 4 (Luisiana)";
const col10Luisiana = "Colonia 10 (Luisiana)";
const fonda = "Fonda (Florida)";
const col5Florida = "Colonia 5 (Florida)";
const col4Florida = "Colonia 4 (Florida)";
const col3Florida = "Colonia 3 (Florida)";
const col2Florida = "Colonia 2 (Florida)";
const coloniasFloridaIda = "Colonia 5/4/3/2 (Florida)";
const fincaMayo = "Finca Mayo";
const perez = "Los Perez";
const marta = "La Marta";

// Destinos (FLORIDA / POSSE)

const paraiso = "El Paraíso";
const dispensario = "Dispensario (Delfín Gallo)";
const llona = "Llona";
const cevilPozo = "Cevil Pozo";
const filaMedio = "Fila del Medio";
const bosque = "Bosque (Delfín Gallo)";
const filaOrilla = "Fila de la orilla";
const plaza = "Plaza (Delfín Gallo)";
const posse = "W. Posse";

// Destinos (TERMINAL / ALDERETES / ALTERNATIVA)

const catalinas = "Catalinas Park";
const comisaria11 = "Comisaria 11";
const todasColoniasVuelta = "Colonia 5/4/3/2 (Florida)";

// Destino (RALOS / CEJAS / 7 de Abril)

const ralos = "Los Ralos";
const villaTercera = "Villa Tercera";
const cerco2 = "Cerco 2";
const vias = "Las Vias";
const lolitaS = "Lolita Sur";
const lolitaN = "Lolita Norte";
const bTrigal = "B° Trigal";
const alabama = "Alabama";
const cejas = "Las Cejas";
const sieteAbril = "7 de Abril";
const infierno = "El Infierno";
const parada6 = "Parada 6 (Lujan)";
const piedrabuena = "Piedrabuena";
const cruce = "Cruce";
const cruzAlta = "Cruz Alta";
const colonia9 = "Colonia 9";

// Arreglos con recorridos (FLORIDA / ALDERETES / ALTERNATIVA)

const mayoColoniasTalarBanda = [
  fincaMayo,
  coloniasFloridaIda,
  fortin,
  esqLastra,
  florida,
  talar,
  alderetes,
  bandaRS,
  terminal,
];
const fortinTalarBanda = [
  fortin,
  esqLastra,
  florida,
  talar,
  alderetes,
  bandaRS,
  terminal,
];
const fortinAlter = [fortin, esqLastra, florida, talar, alternativa, terminal];
const colonia10CochAutop = [
  col10Luisiana,
  col4Luisiana,
  bCancha,
  florida,
  cochuchal,
  alderetes,
  autopista,
  terminal,
];
const col4CanchaAlter = [
  col4Luisiana,
  bCancha,
  florida,
  talar,
  alternativa,
  terminal,
];
const col4CanchaTalarAutop = [
  col4Luisiana,
  bCancha,
  florida,
  talar,
  alderetes,
  autopista,
  terminal,
];
const col4TalarBanda = [
  col4Luisiana,
  bCancha,
  florida,
  talar,
  alderetes,
  bandaRS,
  terminal,
];
const canchaTalarBanda = [
  bCancha,
  florida,
  talar,
  alderetes,
  bandaRS,
  terminal,
];

// Arreglos con recorridos (FLORIDA / POSSE)

const bCanchaFloridaPosse = [
  bCancha,
  florida,
  paraiso,
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const fortinFloridaPosse = [
  fortin,
  esqLastra,
  florida,
  paraiso,
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const col4FloridaPosse = [
  col4Luisiana,
  bCancha,
  florida,
  paraiso,
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const col4fondaPosse = [
  col4Luisiana,
  fonda,
  florida,
  paraiso,
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const lastraFloridaPosse = [
  esqLastra,
  florida,
  paraiso,
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];

// Arreglos con recorridos (TERMINAL / ALDERETES / ALTERNATIVA)

const cataAutopTalarCancha = [
  terminal,
  catalinas,
  autopista,
  alderetes,
  talar,
  florida,
  bCancha,
];
const bandaTalarMayo = [
  terminal,
  bandaRS,
  alderetes,
  talar,
  florida,
  esqLastra,
  fortin,
  fincaMayo,
];
const cataAlterTalarCanchaCol4 = [
  terminal,
  catalinas,
  alternativa,
  talar,
  florida,
  bCancha,
  col4Luisiana,
];
const bandaTalarFondaPerez = [
  terminal,
  bandaRS,
  alderetes,
  talar,
  florida,
  fonda,
  col4Luisiana,
  perez,
];
const cataAutopCoch = [
  terminal,
  catalinas,
  autopista,
  cochuchal,
  florida,
  col4Luisiana,
];
const bandaTalarFortin = [
  terminal,
  bandaRS,
  alderetes,
  talar,
  florida,
  esqLastra,
  fortin,
];
const cataAlterTalarFortin = [
  terminal,
  catalinas,
  alternativa,
  talar,
  florida,
  esqLastra,
  fortin,
];
const bandaTalarCancha = [
  terminal,
  bandaRS,
  alderetes,
  talar,
  florida,
  bCancha,
];
const com11AlterFortin = [
  terminal,
  comisaria11,
  alternativa,
  talar,
  florida,
  esqLastra,
  fortin,
];
const com11AlterCol4 = [
  terminal,
  comisaria11,
  alternativa,
  talar,
  florida,
  bCancha,
  col4Luisiana,
];
const com11AutopCancha = [
  terminal,
  comisaria11,
  autopista,
  alderetes,
  talar,
  florida,
  bCancha,
];
const bandaCochFortin = [
  terminal,
  bandaRS,
  alderetes,
  cochuchal,
  florida,
  esqLastra,
  fortin,
];
const bandaCochFortinColonias = [
  terminal,
  bandaRS,
  alderetes,
  cochuchal,
  florida,
  esqLastra,
  fortin,
  todasColoniasVuelta,
];

// Arreglos con recorridos (TERMINAL / POSSE / FLORIDA)

const posseCancha = [
  terminal,
  bandaRS,
  cevilPozo,
  llona,
  filaOrilla,
  posse,
  dispensario,
  paraiso,
  florida,
  bCancha,
];
const posseFortin = [
  terminal,
  bandaRS,
  cevilPozo,
  llona,
  filaOrilla,
  posse,
  dispensario,
  paraiso,
  florida,
  esqLastra,
  fortin,
];
const posseLastra = [
  terminal,
  bandaRS,
  cevilPozo,
  llona,
  filaOrilla,
  posse,
  dispensario,
  paraiso,
  florida,
  esqLastra,
];

// Arreglos con recorridos (POSSE / TERMINAL)

const dispenFilaM = [
  dispensario,
  posse,
  filaMedio,
  cevilPozo,
  bandaRS,
  terminal,
];
const dispenFilaO = [
  dispensario,
  posse,
  filaOrilla,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const bosqueFilaM = [bosque, filaMedio, cevilPozo, bandaRS, terminal];

// Arreglos con recorridos (TERMINAL / POSSE)

const filaMBosqueDispen = [
  terminal,
  bandaRS,
  cevilPozo,
  filaMedio,
  bosque,
  posse,
  dispensario,
];
const filaOrillaDispen = [
  terminal,
  bandaRS,
  cevilPozo,
  llona,
  filaOrilla,
  posse,
  dispensario,
];

// Arreglos con recorridos (RALOS / TERMINAL)

const ralosVillaT = [ralos, villaTercera, llona, cevilPozo, bandaRS, terminal];
const ralosTermi = [ralos, llona, cevilPozo, bandaRS, terminal];
const alabamaMayoRalos = [
  alabama,
  fincaMayo,
  ralos,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const cejasLolitaRalos = [
  cejas,
  lolitaS,
  ralos,
  llona,
  cevilPozo,
  bandaRS,
  terminal,
];
const ralosCruzA = [ralos, cruzAlta, llona, cevilPozo, bandaRS, terminal];

// Arreglos con recorridos (TERMINAL / RALOS)

const termiRalos = [terminal, bandaRS, cevilPozo, llona, ralos];
const termiRalosMayo = [terminal, bandaRS, cevilPozo, llona, ralos, fincaMayo];
const termiRalosVillaT = [
  terminal,
  bandaRS,
  cevilPozo,
  llona,
  ralos,
  villaTercera,
];
const termiRalosMayoAlabama = [termiRalosMayo, alabama];
const termiRalosCejas = [terminal, bandaRS, cevilPozo, llona, ralos, cejas];
const termiCruzARalos = [terminal, bandaRS, cevilPozo, llona, cruzAlta, ralos];
const cejasRalos = [cejas, ralos, llona, cevilPozo, bandaRS, terminal];
const sieteACejas = [sieteAbril, cejas, llona, cevilPozo, bandaRS, terminal];

// Lista con todos las localidades de la

const listaTodosDestino = [
  florida,
  alderetes,
  col4Luisiana,
  bandaRS,
  talar,
  fortin,
  fincaMayo,
  marta,
  cevilPozo,
  posse,
  paraiso,
  llona,
  filaMedio,
  filaOrilla,
  ralos,
  cejas,
  sieteAbril,
  terminal,
  cruzAlta,
];

const ordenarLista = (array) => {
  array.sort((elemento, elemento2) => {
    if (elemento < elemento2) {
      return -1;
    }
    if (elemento > elemento2) {
      return 1;
    } else {
      return 0;
    }
  });
};

ordenarLista(listaTodosDestino);

// Arreglos con toda la grilla

const horariosLvFloAl = [
  {
    nombre: "04:40",
    salida: 4.4,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "05:35",
    salida: 5.35,
    recorrido: fortinAlter,
  },
  {
    nombre: "06:05",
    salida: 6.05,
    recorrido: [fortin,fonda,bCancha,florida,talar,alternativa,terminal],
  },
  {
    nombre: "06:10",
    salida: 6.1,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "06:10",
    salida: 6.1,
    recorrido: colonia10CochAutop,
  },
  {
    nombre: "06:20",
    salida: 6.2,
    recorrido: [
      col5Florida,
      fincaMayo,
      fortin,
      esqLastra,
      fonda,
      bCancha,
      florida,
      talar,
      alternativa,
      terminal,
    ],
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: [bCancha, florida, talar, alternativa, terminal],
  },
  {
   nombre: "06:50",
   salida: 6.5,
   recorrido: [col4Luisiana, fonda, florida, talar, alderetes,autopista, terminal],
 },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: [col4Luisiana,fonda,florida,talar,alternativa,terminal],
  },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: [bCancha,florida,talar,alternativa,terminal],
  },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "07:40",
    salida: 7.4,
    recorrido: [
      fincaMayo,
      fortin,
      esqLastra,
      florida,
      cochuchal,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: [col4Luisiana, fonda, florida, talar, alternativa, terminal],
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "07:55",
    salida: 7.55,
    recorrido: [bCancha,florida,talar,alderetes,autopista,terminal],
  },
  {
    nombre: "08:45",
    salida: 8.45,
    recorrido: [
      marta,
      col4Luisiana,
      bCancha,
      florida,
      cochuchal,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "08:45",
    salida: 8.45,
    recorrido: col4CanchaAlter,
  },
//   {
//     nombre: "08:45",
//     salida: 8.45,
//     recorrido: col4CanchaAlter,
//   },
  {
    nombre: "09:20",
    salida: 9.2,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "09:50",
    salida: 9.5,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "10:40",
    salida: 10.4,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "11:40",
    salida: 11.4,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: [
      col4Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      autopista,
      terminal,
    ],
  },
  {
    nombre: "12:50",
    salida: 12.5,
    recorrido: [fincaMayo,fortin,esqLastra,florida,talar,alderetes,bandaRS,terminal]
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: col4TalarBanda,
  },
  {
    nombre: "13:50",
    salida: 13.5,
    recorrido: [bCancha, florida, cochuchal, alderetes, bandaRS, terminal],
  },
  {
    nombre: "14:45",
    salida: 14.45,
    recorrido: [fortin,esqLastra,florida,talar,alternativa,terminal],
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: col4TalarBanda,
  },
//   {
//     nombre: "14:45",
//     salida: 14.45,
//     recorrido: col4TalarBanda,
//   },
{
   nombre: "15:40",
   salida: 15.4,
   recorrido: col4CanchaAlter,
 },
  {
    nombre: "15:47",
    salida: 15.47,
    recorrido: [fortin, esqLastra, florida, talar, alternativa, terminal],
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "16:20",
    salida: 16.2,
    recorrido: [
      marta,
      `${col4Luisiana} (16:50)`,
      bCancha,
      florida,
      talar,
      alternativa,
      terminal,
    ],
  },
  {
    nombre: "16:40",
    salida: 16.4,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: [
      col4Florida,
      fortin,
      esqLastra,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
//   {
//     nombre: "16:50",
//     salida: 16.5,
//     recorrido: col4CanchaAlter,
//   },
  {
    nombre: "17:35",
    salida: 17.35,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "18:15",
    salida: 18.15,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [
      marta,
      col3Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "20:55",
    salida: 20.55,
    recorrido: [fincaMayo,col4Luisiana,bCancha,florida,talar,alderetes,autopista,terminal],
  },
];
const horariosSFloAl = [
  {
    nombre: "04:40",
    salida: 4.4,
    recorrido: [
      fortin,
      esqLastra,
      fonda,
      bCancha,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "05:45",
    salida: 5.45,
    recorrido: [
      fortin,
      esqLastra,
      fonda,
      bCancha,
      florida,
      talar,
      alderetes,
      autopista,
      terminal,
    ],
  },
  {
    nombre: "06:10",
    salida: 6.1,
    recorrido: colonia10CochAutop,
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: [col5Florida, `${fortin} (Trasbordo)`],
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "07:18",
    salida: 7.18,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "07:40",
    salida: 7.4,
    recorrido: mayoColoniasTalarBanda,
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "08:45",
    salida: 8.45,
    recorrido: col4TalarBanda,
  },
  {
    nombre: "09:20",
    salida: 9.2,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "11:40",
    salida: 11.4,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "12:40",
    salida: 12.4,
    recorrido: mayoColoniasTalarBanda,
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: canchaTalarBanda,
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: col4CanchaTalarAutop,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: col4CanchaAlter,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: [col3Florida, florida, talar, alderetes, bandaRS, terminal],
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: fortinTalarBanda,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [
      marta,
      col3Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "20:50",
    salida: 20.5,
    recorrido: [
      fincaMayo,
      col10Luisiana,
      col4Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      autopista,
      terminal,
    ],
  },
];
const horariosDFloAl = [
  {
    nombre: "07:40",
    salida: 7.4,
    recorrido: mayoColoniasTalarBanda,
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: [
      col2Florida,
      fortin,
      esqLastra,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "12:40",
    salida: 12.4,
    recorrido: mayoColoniasTalarBanda,
  },
  {
    nombre: "14:45",
    salida: 14.45,
    recorrido: col4TalarBanda,
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: col4TalarBanda,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: [
      col3Florida,
      fortin,
      esqLastra,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: canchaTalarBanda,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [
      fincaMayo,
      col3Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "20:55",
    salida: 19,
    recorrido: [
      fincaMayo,
      col10Luisiana,
      col4Luisiana,
      bCancha,
      florida,
      talar,
      alderetes,
      bandaRS,
      terminal,
    ],
  },
];
const horariosLvFloPo = [
  {
    nombre: "04:50",
    salida: 4.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "05:50",
    salida: 5.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "06:20",
    salida: 6.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "07:55",
    salida: 7.55,
    recorrido: fortinFloridaPosse,
  },

  {
    nombre: "08:20",
    salida: 8.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "09:10",
    salida: 9.1,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "09:50",
    salida: 9.5,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "10:50",
    salida: 10.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "11:20",
    salida: 11.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "11:50",
    salida: 11.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "12:40",
    salida: 12.4,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "13:20",
    salida: 13.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "13:25",
    salida: 13.25,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "13:50",
    salida: 13.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "15:55",
    salida: 15.55,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: bCanchaFloridaPosse,
  },
  //  {
  //  "nombre": "17:50",
  //  "salida": 17.5,
  //  "recorrido": col4fondaPosse
  //  },
  {
    nombre: "18:50",
    salida: 18.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "19:25",
    salida: 19.25,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "19:50",
    salida: 19.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "20:20",
    salida: 20.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "20:50",
    salida: 20.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "21:20",
    salida: 21.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "23:20",
    salida: 23.2,
    recorrido: bCanchaFloridaPosse,
  },
];
const horariosSFloPo = [
  {
    nombre: "04:50",
    salida: 4.5,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "05:50",
    salida: 5.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "06:20",
    salida: 6.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "07:55",
    salida: 7.55,
    recorrido: fortinFloridaPosse,
  },

  {
    nombre: "08:20",
    salida: 8.2,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "09:05",
    salida: 9.05,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "09:55",
    salida: 9.55,
    recorrido: bCanchaFloridaPosse,
  },

  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "10:50",
    salida: 10.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "11:20",
    salida: 11.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "11:50",
    salida: 11.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "12:40",
    salida: 12.4,
    recorrido: bCanchaFloridaPosse,
  },
  // {
  // "nombre":"12:25",
  // "salida":12.25,
  // "recorrido":"Fortín hasta Llona"
  // },
  {
    nombre: "13:25",
    salida: 13.25,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "13:50",
    salida: 13.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: lastraFloridaPosse,
  },
  {
    nombre: "15:55",
    salida: 15.55,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "18:50",
    salida: 18.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "19:25",
    salida: 19.25,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "20:20",
    salida: 20.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "20:50",
    salida: 20.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "21:20",
    salida: 21.2,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: bCanchaFloridaPosse,
  },
];
const horariosDFloPo = [
  {
    nombre: "04:50",
    salida: 4.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "05:50",
    salida: 5.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "08:50",
    salida: 8.5,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "09:50",
    salida: 9.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "10:50",
    salida: 10.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "11:50",
    salida: 11.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: lastraFloridaPosse,
  },
  {
    nombre: "13:50",
    salida: 13.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: lastraFloridaPosse,
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "18:50",
    salida: 18.5,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "19:25",
    salida: 19.25,
    recorrido: fortinFloridaPosse,
  },
  {
    nombre: "20:00",
    salida: 20.0,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: bCanchaFloridaPosse,
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: bCanchaFloridaPosse,
  },
];
const horariosLvSMAl = [
  {
    nombre: "05:20",
    salida: 5.2,
    recorrido: cataAutopTalarCancha,
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: [`${bandaTalarMayo} (por abajo)`],
  },
//   {
//     nombre: "07:00",
//     salida: 7,
//     recorrido: [
//       terminal,
//       catalinas,
//       alderetes,
//       talar,
//       florida,
//       bCancha,
//       col4Luisiana,
//       marta,
//     ],
//   },
  {
    nombre: "07:15",
    salida: 7.15,
    recorrido: [terminal,bandaRS,alderetes,fonda,col4Luisiana,col10Luisiana,fincaMayo,marta],
  },
  {
    nombre: "08:00",
    salida: 8,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      cochuchal,
      florida,
      col4Luisiana,
    ],
  },
  {
    nombre: "08:35",
    salida: 8.35,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "09:00",
    salida: 9,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "09:45",
    salida: 9.45,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "10:45",
    salida: 10.45,
    recorrido: cataAlterTalarFortin,
  },
  {
    nombre: "10:55",
    salida: 10.55,
    recorrido: [bandaRS,alderetes,talar,florida,bCancha,col4Luisiana],
  },
  {
    nombre: "11:15",
    salida: 11.15,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
      marta,
    ],
  },
  {
  nombre: "11:40",
  salida: 11.4,
  recorrido : bandaTalarMayo,
  },
  {
    nombre: "12:15",
    salida: 12.15,
    recorrido: cataAlterTalarCanchaCol4,
  },
  {
    nombre: "12:20",
    salida: 12.2,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "12:45",
    salida: 12.45,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col3Florida,
    ],
  },
  {
    nombre: "12:45",
    salida: 12.45,
    recorrido: cataAlterTalarCanchaCol4,
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      cochuchal,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
      fincaMayo,
      marta,
    ],
  },
  {
   nombre: "13:30",
   salida: 13.3,
   recorrido: cataAlterTalarCanchaCol4,
 },
  {
    nombre: "14:00",
    salida: 14,
    recorrido: bandaTalarCancha,
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: bandaTalarCancha,
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: com11AlterFortin,
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: bandaCochFortinColonias,
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: bandaCochFortin,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "17:40",
    salida: 17.4,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "17:45",
    salida: 17.45,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col3Luisiana,
      fincaMayo,
      marta,
    ],
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: com11AlterCol4,
  },
  {
   nombre: "18:55",
   salida: 18.55,
   recorrido: com11AlterCol4,
 },
//   {
//     nombre: "18:30",
//     salida: 18.3,
//     recorrido: [
//       terminal,
//       bandaRS,
//       alderetes,
//       talar,
//       florida,
//       bCancha,
//       col4Luisiana,
//     ],
//   },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "19:40",
    salida: 19.4,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "19:45",
    salida: 19.45,
    recorrido: [terminal,bandaRS,alderetes,talar,florida,esqLastra,fortin,fincaMayo],
  },
  {
    nombre: "20:20",
    salida: 20.2,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: [terminal,comisaria11,autopista,alderetes,talar,florida,bCancha,col4Luisiana],
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      fonda,bCancha,col4Luisiana
    ],
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: com11AlterCol4,
  },
//   {
//     nombre: "22:20",
//     salida: 22.2,
//     recorrido: [
//       terminal,
//       comisaria11,
//       autopista,
//       alderetes,
//       talar,
//       florida,
//       esqLastra,
//       fortin,
//       fonda,bCancha,col4Luisiana
//     ],
//   },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      fonda,bCancha,col4Luisiana
    ],
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      fonda,bCancha,col4Luisiana
    ],
  },
];
const horariosSSMAl = [
  {
    nombre: "05:20",
    salida: 5.2,
    recorrido: cataAutopTalarCancha,
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: bandaTalarMayo,
  },
  {
    nombre: "07:15",
    salida: 7.15,
    recorrido: bandaTalarCancha,
  },
  {
    nombre: "08:00",
    salida: 8,
    recorrido: cataAutopCoch,
  },
  {
    nombre: "08:35",
    salida: 8.35,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "09:45",
    salida: 9.45,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "10:45",
    salida: 10.45,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "11:40",
    salida: 11.4,
    recorrido: bandaCochFortinColonias,
  },
  {
    nombre: "12:20",
    salida: 12.2,
    recorrido: [
      terminal,
      catalinas,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: cataAlterTalarCanchaCol4,
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: [
      terminal,
      catalinas,
      autopista,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
      fincaMayo,
    ],
  },
  {
    nombre: "14:00",
    salida: 14,
    recorrido: bandaTalarCancha,
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "15:50",
    salida: 15.5,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col3Florida,
    ],
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: bandaCochFortin,
  },
  {
    nombre: "17:40",
    salida: 17.4,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "17:45",
    salida: 17.45,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col3Luisiana,
      fincaMayo,
      marta,
    ],
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "19:45",
    salida: 19.45,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "20:20",
    salida: 20.2,
    recorrido: com11AlterCol4,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: [com11AlterCol4],
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col4Florida,
    ],
  },
];
const horariosDSMAl = [
  {
    nombre: "06:40",
    salida: 6.4,
    recorrido: bandaTalarMayo,
  },
  {
    nombre: "09:45",
    salida: 9.45,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col2Florida,
    ],
  },
  {
    nombre: "11:40",
    salida: 11.4,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      cochuchal,
      florida,
      esqLastra,
      fortin,
      fincaMayo,
    ],
  },
  {
    nombre: "14:00",
    salida: 14,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "14:50",
    salida: 14.5,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col3Florida,
    ],
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "17:45",
    salida: 17.45,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      esqLastra,
      fortin,
      col3Florida,
      fincaMayo,
    ],
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: [
      terminal,
      bandaRS,
      alderetes,
      talar,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "19:45",
    salida: 19.45,
    recorrido: bandaTalarMayo,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: bandaTalarFortin,
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: [
      terminal,
      comisaria11,
      autopista,
      alderetes,
      talar,
      florida,
      fortin,
      bCancha,
      col4Luisiana,
    ],
  },
];
const horariosLvSMPo = [
  {
    nombre: "00:30",
    salida: 0.3,
    recorrido: posseCancha,
  },
  {
    nombre: "06:00",
    salida: 6,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "06:30",
    salida: 6.3,
    recorrido: posseCancha,
  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: posseFortin,
  },
  {
    nombre: "07:30",
    salida: 7.3,
    recorrido: posseCancha,
  },
  {
    nombre: "08:15",
    salida: 8.15,
    recorrido: posseCancha,
  },
  {
    nombre: "09:00",
    salida: 9,
    recorrido: posseCancha,
  },
  {
    nombre: "09:30",
    salida: 9.3,
    recorrido: posseCancha,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: posseCancha,
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: posseCancha,
  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: posseCancha,
  },
  {
    nombre: "11:20",
    salida: 11.2,
    recorrido: posseFortin,
  },
  {
    nombre: "11:35",
    salida: 11.35,
    recorrido: posseCancha,
  },
  {
    nombre: "11:45",
    salida: 11.45,
    recorrido: posseCancha,
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: posseFortin,
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: posseCancha,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: posseCancha,
  },
  //  {
  //    "nombre": "13:00",
  //    "salida": 13,
  //    "recorrido": posseCancha
  //    },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: posseLastra,
  },
  {
    nombre: "13:45",
    salida: 13.45,
    recorrido: posseFortin,
  },
  {
    nombre: "14:05",
    salida: 14.05,
    recorrido: posseCancha,
  },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: posseLastra,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: posseFortin,
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: posseCancha,
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: posseCancha,
  },
  //  {
  //  "nombre": "17:30",
  //  "salida": 17.3,
  //  "recorrido": posseFortin
  //  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: posseCancha,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: posseFortin,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: posseCancha,
  },
  {
    nombre: "19:15",
    salida: 19.15,
    recorrido: posseCancha,
  },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: posseCancha,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: posseCancha,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: posseCancha,
  },
  //  {
  //  "nombre": "20:45",
  //  "salida": 20.45,
  //  "recorrido": posseCancha
  //  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: posseCancha,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: posseCancha,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: posseCancha,
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: posseCancha,
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      esqLastra,
      fortin,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "00:30",
    salida: 24.3,
    recorrido: posseCancha,
  },
];
const horariosSSMPo = [
  {
    nombre: "00:30",
    salida: 0.3,
    recorrido: posseCancha,
  },
  {
    nombre: "06:00",
    salida: 6,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "06:40",
    salida: 6.1,
    recorrido: posseCancha,
  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: posseFortin,
  },
  {
    nombre: "07:30",
    salida: 7.3,
    recorrido: posseCancha,
  },
  {
    nombre: "08:15",
    salida: 8.15,
    recorrido: posseLastra,
  },
  {
    nombre: "09:00",
    salida: 9,
    recorrido: posseCancha,
  },
  {
    nombre: "09:30",
    salida: 9.3,
    recorrido: posseCancha,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: posseCancha,
  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: posseCancha,
  },
  {
    nombre: "11:45",
    salida: 11.45,
    recorrido: posseCancha,
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: posseCancha,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: posseCancha,
  },
  {
    nombre: "13:45",
    salida: 13.45,
    recorrido: posseFortin,
  },
  {
    nombre: "14:15",
    salida: 14.15,
    recorrido: posseLastra,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: posseFortin,
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: posseCancha,
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: posseCancha,
  },
  {
    nombre: "17:30",
    salida: 17.3,
    recorrido: posseFortin,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: posseCancha,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: posseFortin,
  },
  {
    nombre: "19:15",
    salida: 19.15,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: posseCancha,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: posseCancha,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: posseCancha,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      filaMedio,
      bosque,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: posseCancha,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      posse,
      dispensario,
      paraiso,
      florida,
      bCancha,
      col4Luisiana,
    ],
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: posseCancha,
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: posseCancha,
  },
];
const horariosDSMPo = [
  {
    nombre: "06:00",
    salida: 6,
    recorrido: posseFortin,
  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: posseFortin,
  },
  {
    nombre: "08:00",
    salida: 8,
    recorrido: posseFortin,
  },
  {
    nombre: "09:00",
    salida: 9,
    recorrido: posseCancha,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: posseCancha,
  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: posseCancha,
  },
  {
    nombre: "12:00",
    salida: 12,
    recorrido: posseLastra,
  },
  // {
  // "nombre": "12:30",
  // "salida": 12.3,
  // "recorrido": posseLastra
  // },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: posseCancha,
  },
  {
    nombre: "14:15",
    salida: 14.15,
    recorrido: posseLastra,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: posseFortin,
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: posseCancha,
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: posseCancha,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: posseCancha,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: posseFortin,
  },
  {
    nombre: "19:10",
    salida: 19.1,
    recorrido: posseCancha,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: posseCancha,
  },
  {
    nombre: "20:45",
    salida: 20.45,
    recorrido: posseCancha,
  },
  // {
  // "nombre": "21:00",
  // "salida": 21,
  // "recorrido": posseCancha
  // },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: posseCancha,
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: posseCancha,
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: posseCancha,
  },
];
const posseTerminalLaV = [
  // {
  // "nombre": "05:00",
  // "salida": 5,
  // "recorrido": dispenFilaO
  // },
  {
    nombre: "05:55",
    salida: 5.55,
    recorrido: dispenFilaO,
  },
  {
    nombre: "06:00",
    salida: 6,
    recorrido: dispenFilaM,
  },
  {
    nombre: "06:08",
    salida: 6.08,
    recorrido: dispenFilaO,
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: dispenFilaM,
  },
  {
    nombre: "06:35",
    salida: 6.35,
    recorrido: [bosque,filaOrilla,llona,cevilPozo,bandaRS,terminal],
  },
  {
    nombre: "06:35",
    salida: 6.35,
    recorrido: dispenFilaM,
  },
  {
    nombre: "07:08",
    salida: 7.08,
    recorrido: dispenFilaO
  },
  {
    nombre: "07:08",
    salida: 7.08,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "07:40",
    salida: 7.4,
    recorrido: dispenFilaO,
  },
  {
    nombre: "07:45",
    salida: 7.45,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "09:10",
    salida: 9.1,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "09:10",
    salida: 9.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "10:10",
    salida: 10.1,
    recorrido: dispenFilaM,
  },
  {
    nombre: "11:10",
    salida: 11.1,
    recorrido: dispenFilaO,
  },
//   {
//     nombre: "12:50",
//     salida: 12.5,
//     recorrido: dispenFilaO,
//   },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: dispenFilaM,
  },
  {
    nombre: "14:10",
    salida: 14.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "14:40",
    salida: 14.4,
    recorrido: [
      dispensario,
      posse,
      bosque,
      filaMedio,
      cevilPozo,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: [plaza,posse,filaOrilla, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: [plaza,posse,filaOrilla, llona, cevilPozo, bandaRS, terminal]
  },
  {
    nombre: "16:10",
    salida: 16.1,
    recorrido: [plaza,posse,filaMedio, cevilPozo, bandaRS, terminal]
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: [plaza,posse,filaOrilla, llona, cevilPozo, bandaRS, terminal]
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: [plaza,posse,filaMedio, cevilPozo, bandaRS, terminal]
  },
  {
    nombre: "17:45",
    salida: 17.45,
    recorrido: dispenFilaM,
  },
  {
   nombre: "18:10",
   salida: 18.1,
   recorrido: dispenFilaO,
 },
 {
   nombre: "19:10",
   salida: 19.1,
   recorrido: dispenFilaO,
 },
];
const posseTerminalS = [
  {
    nombre: "06:05",
    salida: 6.05,
    recorrido: dispenFilaM,
  },
  {
    nombre: "07:05",
    salida: 7.05,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: bosqueFilaM,
  },
  {
    nombre: "09:10",
    salida: 9.1,
    recorrido: dispenFilaM,
  },
  {
    nombre: "10:10",
    salida: 10.1,
    recorrido: dispenFilaM,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: dispenFilaM,
  },
  {
    nombre: "15:05",
    salida: 13,
    recorrido: dispenFilaO,
  },
  {
    nombre: "16:10",
    salida: 16.1,
    recorrido: dispenFilaM,
  },
  {
    nombre: "17:05",
    salida: 13,
    recorrido: dispenFilaO,
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: dispenFilaM,
  },
  {
    nombre: "18:05",
    salida: 18.05,
    recorrido: dispenFilaO,
  },
  {
    nombre: "19:05",
    salida: 19.05,
    recorrido: dispenFilaO,
  },
];
const posseTerminalD = [
  {
    nombre: "09:05",
    salida: 9.05,
    recorrido: dispenFilaO,
  },
  {
    nombre: "10:10",
    salida: 10.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "11:10",
    salida: 11.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "15:05",
    salida: 15.05,
    recorrido: dispenFilaO,
  },
  {
    nombre: "16:10",
    salida: 16.1,
    recorrido: [plaza, posse, filaOrilla, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: dispenFilaO,
  },
  {
    nombre: "18:05",
    salida: 18.05,
    recorrido: dispenFilaO,
  },
];
const terminalPosseLaV = [
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: [terminal,bandaRS,cevilPozo,llona,filaOrilla,posse,bosque,dispensario],
  },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: filaMBosqueDispen
  },
  {
   nombre: "12:15",
   salida: 12.15,
   recorrido: filaMBosqueDispen
 },
//   {
//     nombre: "13:00",
//     salida: 13,
//     recorrido: [terminal, bandaRS, cevilPozo, filaMedio, bosque],
//   },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "16:30",
    salida: 16.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "17:20",
    salida: 17.2,
    recorrido: [terminal,bandaRS,cevilPozo,llona,filaOrilla,posse,bosque,dispensario]
  },
  {
   nombre: "17:20",
   salida: 17.2,
   recorrido: [terminal,bandaRS,cevilPozo,llona,filaOrilla,posse,dispensario]
 },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: filaMBosqueDispen,
  },
  {
   nombre: "20:20",
   salida: 20.2,
   recorrido: filaMBosqueDispen,
 },
  {
    nombre: "21:20",
    salida: 21.2,
    recorrido: filaMBosqueDispen,
  },
  {
   nombre: "22:20",
   salida: 22.2,
   recorrido: [terminal,bandaRS,cevilPozo,filaMedio,posse,dispensario],
 },
];
const terminalPosseS = [
  {
    nombre: "05:25",
    salida: 5.25,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      filaOrilla,
      bosque,
      dispensario,
    ],
  },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "11:35",
    salida: 11.35,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "12:15",
    salida: 12.15,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "14:05",
    salida: 14.05,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "16:30",
    salida: 16.3,
    recorrido: filaMBosqueDispen,
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: filaMBosqueDispen,
  },
];
const terminalPosseD = [
  {
    nombre: "19:50",
    salida: 19.5,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "21:20",
    salida: 21.2,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: filaOrillaDispen,
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: filaOrillaDispen,
  },
];
const ralosTerminalLaV = [
  {
    nombre: "04:40",
    salida: 4.4,
    recorrido: ralosVillaT,
  },
  {
    nombre: "04:40",
    salida: 4.4,
    recorrido: ralosTermi,
  },
  {
    nombre: "05:25",
    salida: 5.25,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "05:25",
    salida: 5.25,
    recorrido: ralosVillaT,
  },
  //  {
  //  "nombre": "05:30",
  //  "salida": 5.3,
  //  "recorrido": [villaTercera,ralos,llona,cevilPozo,bandaRS,terminal]
  //  },
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: ralosTermi,
  },
  {
    nombre: "06:05",
    salida: 6.05,
    recorrido: ralosTermi,
  },
  {
    nombre: "06:10",
    salida: 6.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "06:10",
    salida: 6.1,
    recorrido: [villaTercera, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "06:15",
    salida: 6.15,
    recorrido: ralosTermi,
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "06:40",
    salida: 6.4,
    recorrido: [villaTercera, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "06:40",
    salida: 6.4,
    recorrido: [lolitaS, cerco2, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: [vias, bTrigal, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: ralosTermi
  },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: ralosTermi
  },
  {
    nombre: "07:30",
    salida: 7.3,
    recorrido: [lolitaS,ralos,llona, cevilPozo,bandaRS, terminal]
  },
  {
    nombre: "07:35",
    salida: 7.35,
    recorrido: ralosTermi
  },
  {
   nombre: "07:50",
   salida: 7.5,
   recorrido: [marta,fincaMayo,ralos,llona, cevilPozo,bandaRS, terminal]
 },
 {
   nombre: "08:10",
   salida: 8.1,
   recorrido: [ralos,bTrigal,llona,cevilPozo,bandaRS,terminal],
 },
  {
    nombre: "08:15",
    salida: 8.15,
    recorrido: [marta, fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
//   {
//     nombre: "08:20",
//     salida: 8.2,
//     recorrido: [ralos, bTrigal, llona, cevilPozo, bandaRS, terminal],
//   },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: ralosTermi,
  },
  {
   nombre: "09;10",
   salida: 9.1,
   recorrido: [fincaMayo,ralos,llona,cevilPozo,bandaRS, terminal],
 },
  {
    nombre: "09;25",
    salida: 9.25,
    recorrido: ralosTermi,
  },
//   {
//     nombre: "09;25",
//     salida: 9.25,
//     recorrido: ralosTermi,
//   },
  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: ralosTermi,
  },
  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: ralosVillaT,
  },
  {
   nombre: "11:05",
   salida: 11.05,
   recorrido: ralosTermi
 },
  {
    nombre: "11:10",
    salida: 11.1,
    recorrido: alabamaMayoRalos,
  },
  {
   nombre: "12:00",
   salida: 12,
   recorrido: [lolitaS,ralos,llona,cevilPozo,bandaRS,terminal],
 },
  {
    nombre: "12:15",
    salida: 12.15,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
//   {
//     nombre: "12:50",
//     salida: 12.5,
//     recorrido: [lolitaS, ralosVillaT],
//   },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: [lolitaS,villaTercera,ralos,llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "13:10",
    salida: 13.1,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "14:05",
    salida: 14.05,
    recorrido: ralosTermi,
  },
  {
    nombre: "14:10",
    salida: 14.1,
    recorrido: ralosVillaT,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: ralosTermi,
  },
  {
   nombre: "15:10",
   salida: 15.1,
   recorrido: [lolitaS, ralos, bTrigal, llona, cevilPozo, bandaRS, terminal],
 },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: ralosVillaT,
  },
  {
    nombre: "16:10",
    salida: 16.1,
    recorrido: [ralos, bTrigal, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "16:25",
    salida: 16.25,
    recorrido: ralosVillaT,
  },
  {
    nombre: "16:30",
    salida: 16.3,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "17:15",
    salida: 17.15,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "17:20",
    salida: 17.2,
    recorrido: ralosTermi,
  },
  {
    nombre: "18:10",
    salida: 18.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "18:20",
    salida: 18.2,
    recorrido: ralosVillaT,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "19:15",
    salida: 19.15,
    recorrido: ralosTermi,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: [lolitaS, ralos, llona, cevilPozo, bandaRS, terminal],
  },
//   {
//     nombre: "20:20",
//     salida: 20.2,
//     recorrido: ralosTermi,
//   },
  {
    nombre: "21:10",
    salida: 21.1,
    recorrido: ralosTermi,
  },
  {
   nombre: "21:30",
   salida: 21.3,
   recorrido: [fincaMayo,ralos, llona,cevilPozo,bandaRS,terminal],
 },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: ralosTermi,
  },
];
const ralosTerminalS = [
  {
    nombre: "04:40",
    salida: 4.4,
    recorrido: ralosVillaT,
  },
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: [
      villaTercera,
      infierno,
      ralos,
      llona,
      cevilPozo,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: [fincaMayo, `${ralos} (trasbordo)`],
  },
  {
    nombre: "05:55",
    salida: 5.55,
    recorrido: [
      villaTercera,
      infierno,
      ralos,
      llona,
      cevilPozo,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: ralosVillaT,
  },
  {
    nombre: "07:30",
    salida: 7.3,
    recorrido: [lolitaS, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "07:30",
    salida: 7.3,
    recorrido: ralosTermi,
  },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "08:25",
    salida: 8.25,
    recorrido: ralosTermi,
  },
  {
    nombre: "09;25",
    salida: 9.25,
    recorrido: ralosTermi,
  },
  {
    nombre: "09;25",
    salida: 9.25,
    recorrido: ralosTermi,
  },
  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: ralosTermi,
  },
  {
    nombre: "10:20",
    salida: 10.2,
    recorrido: ralosVillaT,
  },
  {
    nombre: "11:10",
    salida: 11.1,
    recorrido: [alabama, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "12:15",
    salida: 12.15,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "13:10",
    salida: 13.1,
    recorrido: [alabama, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "14:10",
    salida: 14.1,
    recorrido: ralosVillaT,
  },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: [lolitaS, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "15:25",
    salida: 15.25,
    recorrido: ralosVillaT,
  },
  {
    nombre: "16:25",
    salida: 16.25,
    recorrido: ralosVillaT,
  },
  {
    nombre: "16:30",
    salida: 16.3,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "17:15",
    salida: 17.15,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "17:20",
    salida: 17.2,
    recorrido: ralosTermi,
  },
  {
    nombre: "18:10",
    salida: 18.1,
    recorrido: ralosVillaT,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: alabamaMayoRalos,
  },
  // {
  // "nombre": "19:05",
  // "salida": 19.05,
  // "recorrido": ralosTermi
  // },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: [lolitaS, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "21:10",
    salida: 21.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: ralosTermi,
  },
];
const ralosTerminalD = [
  {
    nombre: "05:00",
    salida: 5,
    recorrido: ralosTermi,
  },
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: [villaTercera, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: ralosTermi,
  },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: alabamaMayoRalos,
  },
  // {
  // "nombre":"08:30",
  // "salida":8.3,
  // "recorrido":ralosTermi
  // },
  {
    nombre: "09;30",
    salida: 9.3,
    recorrido: ralosTermi,
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: ralosTermi,
  },
  {
    nombre: "11:10",
    salida: 11.1,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "13:10",
    salida: 13.1,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "13:20",
    salida: 13.2,
    recorrido: [ralos, llona, parada6],
  },
  {
    nombre: "14:10",
    salida: 14.1,
    recorrido: ralosVillaT,
  },
  {
    nombre: "14:10",
    salida: 14.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "15:10",
    salida: 15.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "15:25",
    salida: 15.25,
    recorrido: ralosVillaT,
  },
  {
    nombre: "16:20",
    salida: 16.2,
    recorrido: ralosVillaT,
  },
  {
    nombre: "17:15",
    salida: 17.15,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "17:15",
    salida: 17.15,
    recorrido: ralosTermi,
  },
  {
    nombre: "18:10",
    salida: 18.1,
    recorrido: ralosVillaT,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: alabamaMayoRalos,
  },
  {
    nombre: "19:15",
    salida: 19.15,
    recorrido: ralosTermi,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: [lolitaS, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "21:10",
    salida: 21.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: [fincaMayo, ralos, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "21:10",
    salida: 21.1,
    recorrido: ralosTermi,
  },
  {
    nombre: "22:20",
    salida: 22.2,
    recorrido: ralosTermi,
  },
];
const terminalRalosLaV = [
  {
    nombre: "06.00",
    salida: 6,
    recorrido: termiRalos,
  },
  {
    nombre: "06.30",
    salida: 6.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaN, lolitaS],
  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, fincaMayo, marta],
  },
  {
    nombre: "08:00",
    salida: 8,
    recorrido: termiRalosMayo,
  },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: termiRalos,
  },
  {
    nombre: "09:15",
    salida: 9.15,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "09:30",
    salida: 9.3,
    recorrido: termiRalos,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "10:40",
    salida: 10.4,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS],
  },
  //  {
  //  "nombre": "11:00",
  //  "salida": 11,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas]
  //  },
  {
    nombre: "11:15",
    salida: 11.15,
    recorrido: termiRalosMayo,
  },
  {
    nombre: "11:35",
    salida: 11.35,
    recorrido: [terminal,bandaRS,cevilPozo,llona,ralos,fincaMayo,marta],
  },
  {
    nombre: "11:45",
    salida: 11.45,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      ralos,
      villaTercera,
      lolitaS,
    ],
  },
  // {
  // "nombre":"11:50",
  // "salida":11.5,
  // "recorrido":termiRalosVillaT
  // },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: termiRalosMayoAlabama,
  },
//   {
//     nombre: "12:10",
//     salida: 12.1,
//     recorrido: termiRalosMayo,
//   },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, bTrigal],
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: termiRalos,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      ralos,
      villaTercera,
      lolitaS,
    ],
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: termiRalos,
  },
  {
   nombre: "13:50",
   salida: 13.5,
   recorrido: termiRalos,
 },
  {
    nombre: "14:00",
    salida: 14,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, bTrigal],
  },
  // {
  // "nombre":"14:00",
  // "salida":14,
  // "recorrido":[terminal, bandaRS, cevilPozo, llona, ralos,lolitaS]
  // },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: termiRalosVillaT,
  },
  //  {
  //     "nombre": "14:30",
  //     "salida": 14.3,
  //     "recorrido": termiRalosCejas
  //     },
  {
    nombre: "15:00",
    salida: 15,
    recorrido: termiRalos,
  },
  {
    nombre: "15:15",
    salida: 15.15,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, fincaMayo, cruce],
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: termiRalos,
  },
  {
    nombre: "16:15",
    salida: 16.15,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "16:30",
    salida: 16.3,
    recorrido: termiRalos,
  },
  {
    nombre: "16:50",
    salida: 16.5,
    recorrido: termiRalos,
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "17:30",
    salida: 17.3,
    recorrido: termiRalos,
  },
  {
    nombre: "17:50",
    salida: 17.5,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: termiRalosVillaT,
  },
  //  {
  //     "nombre": "18:30",
  //     "salida": 18.3,
  //     "recorrido": termiRalosCejas
  //     },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS],
  },
//   {
//     nombre: "19:00",
//     salida: 19,
//     recorrido: termiRalos,
//   },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, bTrigal],
  },
  //  {
  //  "nombre": "20:00",
  //  "salida": 20,
  //  "recorrido": termiRalosCejas
  //  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiRalos,
  },
  {
    nombre: "20:20",
    salida: 20.2,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, bTrigal],
  },
  {
    nombre: "21:15",
    salida: 21.15,
    recorrido: termiRalos,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: termiRalosVillaT,
  },
//   {
//     nombre: "22:00",
//     salida: 22,
//     recorrido: termiRalos,
//   },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      ralos,
      villaTercera,
      bTrigal,
    ],
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      ralos,
      villaTercera,
      bTrigal,
    ],
  },
];
const terminalRalosS = [
  {
    nombre: "06.00",
    salida: 6,
    recorrido: termiRalos,
  },

  //  "nombre": "06.30",
  //  "salida": 6.3,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,lolitaS,cejas]
  //  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "07:45",
    salida: 7.45,
    recorrido: termiRalos,
  },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: termiRalos,
  },
  {
    nombre: "09:30",
    salida: 9.3,
    recorrido: termiRalos,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: termiRalosMayoAlabama,
  },

  //  { "nombre": "10:40",
  //  "salida": 10.4,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,lolitaS,cejas]
  //  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, fincaMayo, cruce],
  },
  {
    nombre: "11:50",
    salida: 11.5,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "13:20",
    salida: 13.2,
    recorrido: termiRalos,
  },
  {
    nombre: "13:30",
    salida: 13.3,
    recorrido: [
      terminal,
      bandaRS,
      cevilPozo,
      llona,
      ralos,
      villaTercera,
      lolitaS,
    ],
  },
  {
    nombre: "14:00",
    salida: 14,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS],
  },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: termiRalosVillaT,
  },
  //  {
  //     "nombre": "14:30",
  //     "salida": 14.3,
  //     "recorrido": termiRalosCejas
  //     },
  {
    nombre: "15:15",
    salida: 15.15,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: termiRalosMayo,
  },
  {
    nombre: "16:00",
    salida: 16,
    recorrido: termiRalos,
  },
  {
    nombre: "16:15",
    salida: 16.15,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "17:00",
    salida: 17,
    recorrido: termiRalos,
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: termiRalos,
  },
  //  {
  //  "nombre": "18:30",
  //  "salida": 18.3,
  //  "recorrido": termiRalosCejas
  //  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS],
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: termiRalos,
  },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiRalos,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: termiRalos,
  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: termiRalos,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: termiRalos,
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: termiRalosVillaT,
  },
];
const terminalRalosD = [
  {
    nombre: "06.00",
    salida: 6,
    recorrido: termiRalos,
  },
  //  {
  //  "nombre": "06.30",
  //  "salida": 6.3,
  //  "recorrido": termiRalosCejas
  //  },
  {
    nombre: "07:00",
    salida: 7,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "08:30",
    salida: 8.3,
    recorrido: termiRalos,
  },
  {
    nombre: "09:30",
    salida: 9.3,
    recorrido: termiRalos,
  },
  {
    nombre: "10:00",
    salida: 10,
    recorrido: termiRalosMayoAlabama,
  },
  //  {
  //  "nombre": "10:30",
  //  "salida": 10.3,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,lolitaS,cejas]
  //  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: termiRalosMayo,
  },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "13:00",
    salida: 13,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "14:05",
    salida: 14.05,
    recorrido: termiRalos,
  },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: termiRalosVillaT,
  },
  //  {
  //  "nombre": "15:00",
  //  "salida": 15,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  //  },
  {
    nombre: "15:30",
    salida: 15.3,
    recorrido: termiRalos,
  },
  {
    nombre: "16:15",
    salida: 16.15,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "17:10",
    salida: 17.1,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: termiRalosMayoAlabama,
  },
  {
    nombre: "18:00",
    salida: 18,
    recorrido: termiRalos,
  },
  {
    nombre: "18:25",
    salida: 18.25,
    recorrido: termiRalos,
  },
  //  {
  //  "nombre": "18:30",
  //  "salida": 18.3,
  //  "recorrido": termiRalosCejas
  //  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: termiRalos,
  },
  {
    nombre: "19:00",
    salida: 19,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS],
  },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: termiRalos,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiRalos,
  },
  //  {
  //  "nombre": "20:30",
  //  "salida": 20.3,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,fincaMayo,cejas]
  //  },
  {
    nombre: "21:00",
    salida: 21,
    recorrido: termiRalos,
  },
  {
    nombre: "21:30",
    salida: 21.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: termiRalos,
  },
  {
    nombre: "22:30",
    salida: 22.3,
    recorrido: termiRalosVillaT,
  },
  {
    nombre: "23:30",
    salida: 23.3,
    recorrido: termiRalosVillaT,
  },
];
const ralosCruzAltaTerminalLaV = [
  {
    nombre: "05:25",
    salida: 5.25,
    recorrido: ralosCruzA,
  },
  {
   nombre: "06:05",
   salida: 6.05,
   recorrido: [ralos,cruzAlta,llona,cevilPozo,bandaRS,terminal],
 },
  {
    nombre: "07:20",
    salida: 7.2,
    recorrido: ralosCruzA,
  },
  // {
  // "nombre":"07:45",
  // "salida":7.45,
  // "recorrido":"Britos → Llona → Cevil Pozo → Banda Río Salí → Terminal"
  // },
  {
    nombre: "08:10",
    salida: 8.1,
    recorrido: ralosCruzA,
  },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: ralosCruzA,
  },
  {
    nombre: "14:15",
    salida: 14.15,
    recorrido: ralosCruzA,
  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: [colonia9, ralos, cruzAlta, llona, cevilPozo, bandaRS, terminal],
  },
];
const ralosCruzAltaTerminalS = [
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: ralosCruzA,
  },
  {
    nombre: "07:15",
    salida: 7.15,
    recorrido: ralosCruzA,
  },
  {
    nombre: "08:40",
    salida: 8.4,
    recorrido: [colonia9, ralos, cruzAlta, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "11:50",
    salida: 11.5,
    recorrido: ralosCruzA,
  },
  {
    nombre: "14:15",
    salida: 14.15,
    recorrido: ralosCruzA,
  },
];
const ralosCruzAltaTerminalD = [];

const terminalCruzAltaRalosLaV = [
  {
    nombre: "06:50",
    salida: 6.5,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "10:45",
    salida: 10.45,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "12:00",
    salida: 12,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "17:30",
    salida: 17.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, cruzAlta, ralos, colonia9],
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiCruzARalos,
  },
];
const terminalCruzAltaRalosS = [
  {
    nombre: "10:45",
    salida: 10.45,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "13:15",
    salida: 13.15,
    recorrido: termiCruzARalos,
  },
  {
    nombre: "19:30",
    salida: 19.3,
    recorrido: termiCruzARalos,
  },
];
const terminalCruzAltaRalosD = [
  {
    nombre: "19:30",
    valor: 19.3,
    recorrido: termiCruzARalos,
  },
];
const sieteDeAbrilTerminalLaV = [
  {
    nombre: "04:30",
    salida: 4.3,
    recorrido: sieteACejas,
  },
  {
    nombre: "11:30",
    salida: 11.3,
    recorrido: sieteACejas,
  },
  {
    nombre: "16:20",
    salida: 16.2,
    recorrido: [sieteAbril, cejas, ralos, llona, cevilPozo, bandaRS, terminal],
  },
];
const sieteDeAbrilTerminalS = [
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: sieteACejas,
  },
];
const sieteDeAbrilTerminalD = [
  {
    nombre: "18:00",
    salida: 18,
    recorrido: sieteACejas,
  },
];
const terminalSieteDeAbrilLaV = [
  {
    nombre: "06:15",
    salida: 6.15,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, sieteAbril],
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, sieteAbril],
  },
  {
    nombre: "15:45",
    salida: 15.45,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, sieteAbril],
  },
];
const terminalSieteDeAbrilS = [
  {
    nombre: "15:45",
    salida: 15.45,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, sieteAbril],
  },
];
const terminalSieteDeAbrilD = [
  {
    nombre: "15:00",
    salida: 15,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, sieteAbril],
  },
  // {
  // "nombre": "18:30",
  // "salida": 18.3,
  // "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  // },
  // {
  // "nombre": "20:30",
  // "salida": 20.3,
  // "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  // }
];
const lasCejasTerminalLaV = [
  {
    nombre: "05:30",
    salida: 5.3,
    recorrido: [
      cejas,
      lolitaS,
      cerco2,
      ralos,
      llona,
      cevilPozo,
      bandaRS,
      terminal,
    ],
  },
  {
    nombre: "06:20",
    salida: 6.2,
    recorrido: cejasRalos,
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: cejasRalos,
  },
  {
   nombre: "08:00",
   salida: 8,
   recorrido: ['Garmendia' , cejas,ralos,llona,cevilPozo,bandaRS,terminal],
 },
  {
    nombre: "12:10",
    salida: 12.1,
    recorrido: cejasRalos,
  },
//   {
//     nombre: "13:20",
//     salida: 13.2,
//     recorrido: [cejas, llona, cevilPozo, bandaRS, terminal],
//   },
  {
    nombre: "15:40",
    salida: 15.4,
    recorrido: cejasRalos,
  },
//   {
//     nombre: "18:15",
//     salida: 18.15,
//     recorrido: cejasRalos,
//   },
  {
    nombre: "19:50",
    salida: 19.5,
    recorrido: cejasRalos,
  },
];
const lasCejasTerminalS = [
  {
    nombre: "06:25",
    salida: 6.25,
    recorrido: [cejas, `${ralos} (trasbordo)`],
  },
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: [cejas, llona, cevilPozo, bandaRS, terminal],
  },
  {
    nombre: "12:00",
    salida: 12,
    recorrido: cejasLolitaRalos,
  },
  {
    nombre: "15:40",
    salida: 15.4,
    recorrido: cejasRalos,
  },
  {
    nombre: "19:50",
    salida: 19.5,
    recorrido: cejasRalos,
  },
];
const lasCejasTerminalD = [
  {
    nombre: "07:50",
    salida: 7.5,
    recorrido: cejasRalos,
  },
  {
    nombre: "12:00",
    salida: 12,
    recorrido: cejasRalos,
  },
  {
    nombre: "15:40",
    salida: 15.4,
    recorrido: cejasRalos,
  },
  {
    nombre: "19:50",
    salida: 19.5,
    recorrido: cejasRalos,
  },
];
const terminalLasCejasLaV = [
  //  {
  //  "nombre": "06:15",
  //  "salida": 6.15,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  //  },
  {
    nombre: "10:40",
    salida: 10.4,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "11:00",
    salida: 11,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, cejas, piedrabuena],
  },
  {
    nombre: "12:30",
    salida: 12.3,
    recorrido: termiRalosCejas,
  },
  //  {
  //     "nombre": "12:30",
  //     "salida": 12.3,
  //     "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  //     },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: termiRalosCejas,
  },

  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "22:00",
    salida: 22,
    recorrido: termiRalosCejas,
  },
];
const terminalLasCejasS = [
  {
    nombre: "10:40",
    salida: 10.4,
    recorrido: [terminal, bandaRS, cevilPozo, llona, ralos, lolitaS, cejas],
  },
  {
    nombre: "14:30",
    salida: 14.3,
    recorrido: termiRalosCejas,
  },
  //  {
  //  "nombre": "15:45",
  //  "salida": 15.45,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  //  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "20:00",
    salida: 20,
    recorrido: termiRalosCejas,
  },
];
const terminalLasCejasD = [
  {
    nombre: "06:30",
    salida: 6.3,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "10:30",
    salida: 10.3,
    recorrido: termiRalosCejas,
  },
  //  {
  //  "nombre": "15:00",
  //  "salida": 15,
  //  "recorrido": [terminal, bandaRS, cevilPozo, llona, ralos,cejas,sieteAbril]
  //  },
  {
    nombre: "18:30",
    salida: 18.3,
    recorrido: termiRalosCejas,
  },
  {
    nombre: "20:30",
    salida: 20.3,
    recorrido: termiRalosCejas,
  },
];
const floridaAldTucuman = [horariosDFloAl, horariosLvFloAl, horariosSFloAl];
const terminalAldFlorida = [horariosDSMAl, horariosLvSMAl, horariosSSMAl];
const floridaPosseTucuman = [horariosDFloPo, horariosLvFloPo, horariosSFloPo];
const terminalPosseFlorida = [horariosDSMPo, horariosLvSMPo, horariosSSMPo];
const posseLTerminal = [posseTerminalD, posseTerminalLaV, posseTerminalS];
const terminalPosseL = [terminalPosseD, terminalPosseLaV, terminalPosseS];
const ralosTerminal = [ralosTerminalD, ralosTerminalLaV, ralosTerminalS];
const terminalRalos = [terminalRalosD, terminalRalosLaV, terminalRalosS];
const ralosCruzAltaTerminal = [
  ralosCruzAltaTerminalD,
  ralosCruzAltaTerminalLaV,
  ralosCruzAltaTerminalS,
];
const terminalCruzAltaRalos = [
  terminalCruzAltaRalosD,
  terminalCruzAltaRalosLaV,
  terminalCruzAltaRalosS,
];
const sieteDeAbrilTerminal = [
  sieteDeAbrilTerminalD,
  sieteDeAbrilTerminalLaV,
  sieteDeAbrilTerminalS,
];
const terminalSieteDeAbril = [
  terminalSieteDeAbrilD,
  terminalSieteDeAbrilLaV,
  terminalSieteDeAbrilS,
];
const lasCejasTerminal = [
  lasCejasTerminalD,
  lasCejasTerminalLaV,
  lasCejasTerminalS,
];
const terminalLasCejas = [
  terminalLasCejasD,
  terminalLasCejasLaV,
  terminalLasCejasS,
];
const todosDestinoTucuman = [
  floridaAldTucuman,
  floridaPosseTucuman,
  posseLTerminal,
  ralosTerminal,
  ralosCruzAltaTerminal,
  sieteDeAbrilTerminal,
  lasCejasTerminal,
];
const todosTucumanDestino = [
  terminalAldFlorida,
  terminalPosseFlorida,
  terminalPosseL,
  terminalRalos,
  terminalCruzAltaRalos,
  terminalSieteDeAbril,
  terminalLasCejas,
];
const todosLosHorarios = [todosDestinoTucuman, todosTucumanDestino];