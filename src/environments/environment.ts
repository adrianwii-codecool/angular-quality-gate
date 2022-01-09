export const environment = {
  production: false,
  mapboxToken: 'pk.eyJ1IjoiYWRyaWFud2lpLWNvZGVjb29sIiwiYSI6ImNrcXNwbXNpOTAwaDUycHA4aWE5NTZwY2wifQ.wyJ3g8FgzOsTBnlqlEtJuQ',
  apiUrl: 'http://localhost:3000',
  cityRadius: 15000,
  cities: [{
    name: 'Kraków',
    coordinates: {
      longitude: 19.9449,
      latitude: 50.0646,
    }
  }, {
    name: 'Warszawa',
    coordinates: {
      longitude: 21.012229,
      latitude: 52.229676,
    }
  }, {
    name: 'Wrocław',
    coordinates: {
      longitude: 17.0385376,
      latitude: 51.1078852,
    }
  }],
};
