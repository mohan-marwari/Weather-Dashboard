// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';
// import CurrentWeather from '../components/CurrentWeather';
// import Forecast from '../components/Forecast';
// import TemperatureChart from '../components/TemperatureChart';
// import useWeatherData from '../hooks/useWeatherData';

// const HomePage = () => {
//   const [city, setCity] = useState('');
//   const forecastData = useWeatherData(city);
//   return (
//     <div>
//       <h3>Search for the weather</h3>
//       <SearchBar onCitySelect={setCity} />
//       {city && (
//         <>
//           <CurrentWeather city={city} />
//           <Forecast city={city} />
//           <TemperatureChart data={forecastData} />
//         </>
//       )}
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import TemperatureChart from '../components/TemperatureChart';
import useWeatherData from '../hooks/useWeatherData';

const HomePage = () => {
  const [city, setCity] = useState('');
  const forecastData = useWeatherData(city);

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      {/* Heading */}
      <Typography variant="h4" component="h1" gutterBottom>
        Search for the Weather
      </Typography>

      {/* Search Bar */}
      <Box sx={{ width: '100%', maxWidth: '600px' }}>
        <SearchBar onCitySelect={setCity} />
      </Box>

      {/* Weather Information */}
      {city && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
            maxWidth: '800px',
          }}
        >
          <CurrentWeather city={city} />
          <Forecast city={city} />
          <TemperatureChart data={forecastData} />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
