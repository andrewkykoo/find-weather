import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Spinner,
  Heading,
  Text,
  Box,
  Center,
  HStack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

import WeatherCard from "./components/WeatherCard";
import SearchLocation from "./components/SearchLocation";

const APIkey = "ba9ffd6504670d9dba36185f9703fc5f";

function App() {
  const [location, setLocation] = useState("New York");
  const [lat, setLat] = useState(40.7128);
  const [lon, setLon] = useState(-74.0059);
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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

    axios
      .get(locationUrl)
      .then((res) => {
        setLat(res.data[0].lat);
        setLon(res.data[0].lon);
        setLocation(res.data[0].name);
        setErrorMsg("");
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  }, [location]);

  useEffect(() => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

    axios
      .get(currentWeatherUrl)
      .then((res) => {
        setCurrentData(res.data);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  }, [lat, lon]);

  if (!currentData) {
    return (
      <>
        <Text>Under maintenance.. Please come back later.</Text>
      </>
    );
  }

  return (
    <ChakraProvider>
      <>
        <Center>
          <VStack>
            <Heading m={5}>Find Weather</Heading>
            <SearchLocation
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              errorMsg={errorMsg}
            />
            {!errorMsg ? (
              <WeatherCard currentData={currentData} location={location} />
            ) : (
              <Box>
                <HStack>
                  <Spinner
                    thickness="2px"
                    speed="0.9s"
                    emptyColor="gray.200"
                    color="blue.500"
                  />
                  <Text>Please enter a valid city!</Text>
                </HStack>
              </Box>
            )}
          </VStack>
        </Center>
      </>
    </ChakraProvider>
  );
}

export default App;
