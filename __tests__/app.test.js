// import app from '../lib/app.js';
// import supertest from 'supertest';
// import client from '../lib/client.js';
// import { execSync } from 'child_process';
import { formatLocations, formatWeather, formatReviews } from '../lib/utils';
import location from '../data/location.js';
import weatherData from '../data/weather-data';
import reviewData from '../data/yelp-data';


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
      'forecast': 'Broken clouds',
      'time': '2021-05-12'
    },
    {
      'forecast': 'Few clouds',
      'time': '2021-05-13'
    },
    {
      'forecast': 'Moderate rain',
      'time': '2021-05-14'
    },
  ];

  const expectedReviews = [
    {
      'name': 'Luc Lac',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/azr6sD6VeJbdaiO2aKvSsw/o.jpg',
      'price': '$$',
      'rating': 4.0,
      'url': 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=ltRTZOOtHiyicOHrWpJZLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ltRTZOOtHiyicOHrWpJZLg'
    },
    {
      'name': 'Screen Door',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lqmMYlLRV-aoH73koWA6Ew/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/screen-door-portland?adjust_creative=ltRTZOOtHiyicOHrWpJZLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ltRTZOOtHiyicOHrWpJZLg'
    },
    {
      'name': 'Q Restaurant & Bar',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/jAH0XyZe5N8YTrOy71SuJg/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/q-restaurant-and-bar-portland?adjust_creative=ltRTZOOtHiyicOHrWpJZLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ltRTZOOtHiyicOHrWpJZLg'
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

  it('munges weather data', async () => {
    console.log(expectedWeather);

    const output = formatWeather(weatherData);
    console.log(output);
    expect(output).toEqual(expectedWeather);
  });
  
  it('munges review data', async () => {
    console.log(expectedReviews);

    const output = formatReviews(reviewData);
    console.log(output);
    expect(output).toEqual(expectedReviews);
  });

});

