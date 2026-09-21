# BoligMatch

En simpel "swipe-baseret" app, der matcher lejere med boliger - tænkt som starten
på en større platform, der senere også skal kunne matche udlejere med lejere.

Dette er første del af appen: hovedsiden (swipe-siden), hvor en lejer swiper
igennem boligopslag og markerer, om de er interesserede eller ej.

## Kom i gang

1. Opret et nyt Expo-projekt (blank template), hvis du ikke allerede har et:
   ```
   npx create-expo-app@latest boligmatch --template blank --no-agents-md
   cd boligmatch
   ```
2. Kopiér indholdet af denne mappe (App.js, /components, /screens, /styles, /data) ind i dit projekt.
3. Start appen:
   ```
   npx expo start
   ```

## Struktur

- `App.js` – app'ens indgangspunkt, viser SwipeScreen
- `screens/SwipeScreen.js` – hovedsiden med swipe-funktionen
- `components/SwipeCard.js` – det enkelte, swipebare boligkort
- `components/ButtonComponent.js` – genbrugelig knap ("Nej tak" / "Interesseret")
- `data/const.js` – midlertidig mock-data for boligerne
- `styles/GlobalStyle.js` – samlet styling for hele appen

## Demovideo

_Link tilføjes senere._
