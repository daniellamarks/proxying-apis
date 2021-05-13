export function formatLocations(data) {

  const array = data.map(location => {

    return {
      formatted_query: location.display_name,
      latitude: location.lat,
      longitude: location.lon,
    };
  });
  return array[0];
}

export function formatWeather(data) {

  return data.data.map(weather => {

    return {
      forecast: weather.weather.description,
      time: weather.valid_date,
    };
  });

}

export function formatReviews(data) {

  return data.businesses.map(business => {

    return {
      name: business.name,
      image_url: business.image_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };
  });

}