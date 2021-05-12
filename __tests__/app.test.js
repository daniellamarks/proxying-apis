// import app from '../lib/app.js';
// import supertest from 'supertest';
// import client from '../lib/client.js';
// import { execSync } from 'child_process';
import { formatLocations } from '../lib/utils';
import location from '../data/location.js';


describe('Data Munging', () => {

  const expectedLocations = [
    {

      'formatted_query': 'Avenida Calle 30, Barranquillita, Barranquilla, Atlántico, Caribe, 080004, Colombia',
      'latitude': '10.9809716',
      'longitude': '-74.7752992'
    },
    {
      'formatted_query': 'Avenida Calle 30, Barranquilla, Atlántico, Caribe, 083001, Colombia',
      'latitude': '10.9355691',
      'longitude': '-74.7812725'
    },
    {
      'formatted_query': 'Avenida Calle 30, Barranquillita, Barranquilla, Atlántico, Caribe, 080002, Colombia',
      'latitude': '10.9860026',
      'longitude': '-74.7763217'
    }
  ];

  const expectedWeather = [
    {
        "forecast": "Partly cloudy until afternoon.",
        "time": "Mon Jan 01 2001"
      },
      {
        "forecast": "Mostly cloudy in the morning.",
        "time": "Tue Jan 02 2001"
      },
      {
        "forecast": "Mostly cloudy in the morning.",
        "time": "Tue Jan 02 2001"
      },
  ];

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('munges location data', async () => {
    console.log(expectedLocations);

    const output = formatLocations(location);
    console.log(output);
    expect(output).toEqual(expectedLocations);
  });
});

