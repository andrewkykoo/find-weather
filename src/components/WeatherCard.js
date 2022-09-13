import {
  Box,
  HStack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import { TbTemperatureFahrenheit } from "react-icons/tb";

import {
  BsCloudDrizzle,
  BsCloudHaze1,
  BsCloudLightningRain,
  BsCloudRain,
  BsCloudRainHeavy,
  BsClouds,
  BsCloudSnow,
  BsSun,
} from "react-icons/bs";

//   import { WiCelsius } from "react-icons/wi";
//   import { ImSpinner } from "react-icons/im";

function WeatherCard({ currentData, location }) {
  let icon;
  switch (currentData.weather[0].main) {
    case "Clouds":
    case "Smoke":
      icon = <BsClouds size={30} />;
      break;
    case "Haze":
      icon = <BsCloudHaze1 size={30} />;
      break;
    case "Rain":
      icon = <BsCloudRainHeavy size={30} />;
      break;
    case "Clear":
      icon = <BsSun size={30} />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzle size={30} />;
      break;
    case "Snow":
      icon = <BsCloudSnow size={30} />;
      break;
    case "Thunderstorm":
      icon = <BsCloudLightningRain size={30} />;
      break;
    case "Mist":
      icon = <BsCloudRain size={30} />;
      break;
    default:
      icon = null;
  }
  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel>{location}</StatLabel>
          <StatNumber>
            <HStack>
              <Box>{Math.round(1.8 * (currentData.main.temp - 273) + 32)}</Box>
              <TbTemperatureFahrenheit />
            </HStack>
          </StatNumber>
          <StatHelpText>{icon}</StatHelpText>
        </Stat>
      </StatGroup>
    </>
  );
}

export default WeatherCard;
