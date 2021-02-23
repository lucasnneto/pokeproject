export const types: { [key: string]: any } = {
  'fighting': {
    namesimple: "lutador",
    name: "Lutador",
    vantagem: ['steel', 'dark', 'normal', 'rock'],
    desvantagem: [
      'fairy', 'flying', 'psychic'
    ],
    imunidade: []
  },
  'normal': {
    namesimple: "normal",
    name: "Normal",
    vantagem: [],
    desvantagem: [
      'fighting'
    ],
    imunidade: [
      'ghost'
    ]
  },
  'flying': {
    namesimple: "voador",
    name: "Voador",
    vantagem: ['fighting', 'bug', 'grass'],
    desvantagem: [
      'ice', 'eletric', 'rock'
    ],
    imunidade: [
      'ground'
    ]
  },
  'poison': {
    namesimple: "venenoso",
    name: "Venenoso",
    vantagem: ['grass', 'fairy'],
    desvantagem: [
      'psychic', 'ground', 'steel'
    ],
    imunidade: [
    ]
  },
  'ground': {
    namesimple: "terra",
    name: "Terra",
    vantagem: ['poison', 'eletric', 'fire'],
    desvantagem: [
      'ice', 'grass', 'water'
    ],
    imunidade: [
      'eletric'
    ]
  },
  'rock': {
    namesimple: "pedra",
    name: "Pedra",
    vantagem: ['flying', 'ice', 'bug', 'fire'],
    desvantagem: [
      'water', 'grass', 'steel', 'ground', 'fighting'
    ],
    imunidade: [
      'eletric'
    ]
  },
  'bug': {
    namesimple: "inseto",
    name: "Inseto",
    vantagem: ['psychic', 'dark', 'grass'],
    desvantagem: [
      'flying', 'rock', 'fire'
    ],
    imunidade: [
    ]
  },
  'ghost': {
    namesimple: "fantasma",
    name: "Fantasma",
    vantagem: ['psychic', 'ghost'],
    desvantagem: [
      'ghost', 'dark'
    ],
    imunidade: ['normal', 'fighting'
    ]
  },
  'steel': {
    namesimple: "metal",
    name: "Metal",
    vantagem: ['fairy', 'rock', 'ice'],
    desvantagem: [
      'fire', 'fighting', 'ground'
    ],
    imunidade: ['poison'
    ]
  },
  'fire': {
    namesimple: "fogo",
    name: "Fogo",
    vantagem: ['grass', 'steel', 'bug', 'ice'],
    desvantagem: [
      'water', 'rock', 'ground'
    ],
    imunidade: ['poison'
    ]
  },
  'water': {
    namesimple: "agua",
    name: "Água",
    vantagem: ['fire', 'ground', 'rock'],
    desvantagem: [
      'grass', 'eletric'
    ],
    imunidade: [
    ]
  },
  'ice': {
    namesimple: "gelo",
    name: "Gelo",
    vantagem: ['grass', 'ground', 'flying', 'dragon'],
    desvantagem: [
      'fire', 'steel', 'rock'
    ],
    imunidade: [
    ]
  },
  'dark': {
    namesimple: "escuridao",
    name: "Noturno",
    vantagem: ['ghost', 'psychic'],
    desvantagem: [
      'bug', 'fighting', 'fairy'
    ],
    imunidade: ['psychic'
    ]
  },
  'psychic': {
    namesimple: "psiquico",
    name: "Psíquico",
    vantagem: ['fighting', 'poison'],
    desvantagem: [
      'ghost', 'bug', 'dark'
    ],
    imunidade: ['psychic'
    ]
  },
  'eletric': {
    namesimple: "eletrico",
    name: "Elétrico",
    vantagem: ['water', 'flying'],
    desvantagem: [
      'ground',
    ],
    imunidade: [
    ]
  },
  'grass': {
    namesimple: "planta",
    name: "Planta",
    vantagem: ['ground', 'rock', 'water'],
    desvantagem: [
      'fire', 'ice', 'poison', 'flying'
    ],
    imunidade: [
    ]
  },
  'dragon': {
    namesimple: "dragao",
    name: "Dragão",
    vantagem: ['dragon'],
    desvantagem: [
      'fairy', 'ice', 'dragon'
    ],
    imunidade: [
    ]
  },
  'fairy': {
    namesimple: "fada",
    name: "Fada",
    vantagem: ['fighting', 'dragon'],
    desvantagem: [
      'poison', 'steel'
    ],
    imunidade: ['dragon'
    ]
  },
}
