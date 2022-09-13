import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BsSun,
  BsClouds,
  BsCloudRainHeavy,
  BsCloudDrizzle,
  BsCloudLightningRain,
  BsCloudHaze1,
  BsCloudSnow,
  BsCloudRain,
  BsSearch,
  BsThermometer,
  BsWind,
  BsWater,
} from "react-icons/bs";

import { WiCelsius } from "react-icons/wi";
import { ImSpinner } from "react-icons/im";

const APIkey = "ba9ffd6504670d9dba36185f9703fc5f";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("New York");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  if (!data) {
    return <div>no data</div>;
  }

  let icon;

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <BsClouds />;
      break;
    case "Haze":
      icon = <BsCloudHaze1 />;
      break;
    case "Rain":
      icon = <BsCloudRainHeavy />;
      break;
    case "Clear":
      icon = <BsSun />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzle />;
      break;
    case "Snow":
      icon = <BsCloudSnow />;
      break;
    case "Thunderstorm":
      icon = <BsCloudLightningRain />;
      break;
    case "Mist":
      icon = <BsCloudRain />;
      break;
  }

  return (
    <>
      <h1>weather app</h1>
      <div>{icon}</div>
      {/* form */}
      {/* card */}
    </>
  );
}

export default App;
