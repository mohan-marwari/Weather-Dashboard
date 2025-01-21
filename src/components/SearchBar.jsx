import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const SearchBar = ({ onCitySelect }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = async (event) => {
    const query = event.target.value.trim();
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find`,
          {
            params: {
              q: query,
              appid: apiKey,
            },
          }
        );
       
        const cities = response.data.list.map((city) => city.name);
        setOptions([...new Set(cities)]);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    } else {
      setOptions([]);
    }
  };
  

  return (
    <Autocomplete
      // freeSolo // freeSolo : For user custom value
      options={options}
      onChange={(event, value) => onCitySelect(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          onChange={handleSearch}
          required
          variant="filled"
        />
      )}
    />
  );
};

export default SearchBar;
