import axios from 'axios';

const apiKey =  import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Current weather ko fetch karne ka function
export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

// 5-day forecast data ko fetch karne ka function
export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric', 
        appid: apiKey,
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};
