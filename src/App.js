import React, { useState, useEffect } from "react";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import axios from "axios";

import WeatherCard from "./components/WeatherCard";
import SearchLocation from "./components/SearchLocation";

const APIkey = "ba9ffd6504670d9dba36185f9703fc5f";

function App() {
  const [location, setLocation] = useState("New York");
  const [lat, setLat] = useState(40.7128);
  const [lon, setLon] = useState(-74.0059);
  const [inputValue, setInputValue] = useState("");
  const [currentData, setCurrentData] = useState(null);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue !== "") {
      setLocation(inputValue);
    }
    e.preventDefault();
  };

  useEffect(() => {
    const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`;

    axios.get(locationUrl).then((res) => {
      setLat(res.data[0].lat);
      setLon(res.data[0].lon);
      setLocation(res.data[0].name);
    });
  }, [location]);

  useEffect(() => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

    axios.get(currentWeatherUrl).then((res) => {
      setCurrentData(res.data);
    });
  }, [lat, lon]);

  if (!currentData) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <ChakraProvider>
      <>
        <h1>weather app</h1>
        <SearchLocation handleInput={handleInput} handleSubmit={handleSubmit} />
        <WeatherCard currentData={currentData} location={location} />
      </>
    </ChakraProvider>
  );
}

export default App;
