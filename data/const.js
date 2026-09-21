// Midlertidig mock-data til boligerne, som lejeren skal swipe igennem.
// Senere kan dette udskiftes med rigtige data fra udlejere (fx via en database eller et API).
export const BOLIGER = [
  {
    id: '1',
    address: 'Nørrebrogade 55',
    city: 'København N',
    price: 8500,
    size: 45,
    rooms: 2,
    imageUrl: 'https://picsum.photos/seed/bolig1/600/800',
    description: 'Lys og hyggelig lejlighed tæt på metro og cafeer.',
  },
  {
    id: '2',
    address: 'Vesterbrogade 12',
    city: 'København V',
    price: 12500,
    size: 68,
    rooms: 3,
    imageUrl: 'https://picsum.photos/seed/bolig2/600/800',
    description: 'Nyrenoveret lejlighed med altan og masser af lys.',
  },
  {
    id: '3',
    address: 'Østerbrogade 101',
    city: 'København Ø',
    price: 9800,
    size: 52,
    rooms: 2,
    imageUrl: 'https://picsum.photos/seed/bolig3/600/800',
    description: 'Roligt kvarter tæt på Fælledparken, perfekt til studerende.',
  },
  {
    id: '4',
    address: 'Amagerbrogade 88',
    city: 'København S',
    price: 7200,
    size: 38,
    rooms: 1,
    imageUrl: 'https://picsum.photos/seed/bolig4/600/800',
    description: 'Mindre etværelses – ideel som første lejlighed.',
  },
  {
    id: '5',
    address: 'Frederiksberg Allé 20',
    city: 'Frederiksberg',
    price: 14200,
    size: 75,
    rooms: 3,
    imageUrl: 'https://picsum.photos/seed/bolig5/600/800',
    description: 'Klassisk lejlighed med højt til loftet og stuk.',
  },
  {
    id: '6',
    address: 'Valby Langgade 44',
    city: 'Valby',
    price: 6900,
    size: 33,
    rooms: 1,
    imageUrl: 'https://picsum.photos/seed/bolig6/600/800',
    description: 'Prisvenlig lejlighed med god forbindelse til centrum.',
  },
];

// Mock-data til "Interesseret"-listen (MatchesScreen).
// Dette er IKKE koblet til selve swipe-funktionen (den skal ikke være live endnu) -
// det er blot 3 boliger, som lejeren "allerede" har swipet interesseret på, inden appen åbnes.
export const MATCHES = [
  {
    id: 'm1',
    address: 'Blågårdsgade 10',
    city: 'København N',
    price: 9200,
    size: 48,
    rooms: 2,
    imageUrl: 'https://picsum.photos/seed/match1/300/300',
  },
  {
    id: 'm2',
    address: 'Istedgade 77',
    city: 'København V',
    price: 10500,
    size: 55,
    rooms: 2,
    imageUrl: 'https://picsum.photos/seed/match2/300/300',
  },
  {
    id: 'm3',
    address: 'Strandboulevarden 15',
    city: 'København Ø',
    price: 13800,
    size: 70,
    rooms: 3,
    imageUrl: 'https://picsum.photos/seed/match3/300/300',
  },
];

// Beskeder pr. match (demo) - bruges af ChatScreen, når man trykker på en bolig
// i "Interesseret"-listen. Kun Blågårdsgade 10 (m1) har en rigtig samtale indtil videre.
export const CHAT_MESSAGES = {
  m1: [
    {
      id: '1',
      sender: 'me',
      text: 'Hej, det ligner en rigtig spændende bolig. Hvornår har du mulighed for at jeg kan komme og se den?',
    },
    {
      id: '2',
      sender: 'them',
      text: 'Hej, det lyder godt. Kan du komme forbi på onsdag kl 12:00?',
    },
  ],
  m2: [],
  m3: [],
};
