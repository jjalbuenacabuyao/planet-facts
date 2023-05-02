"use client";

import { usePlanetContext } from "../hooks/PlanetContext";
import PlanetInfoContainer from "./PlanetInfoContainer";

const PlanetInformation = () => {
  const {rotation, revolution, radius, temperature} = usePlanetContext();
  const infoValues = [rotation, revolution, radius, temperature];
  const planetInfo = ["Rotation Time", "Revolution Time", "Radius", "Average Temp."];

  return (
    <div>
      {planetInfo.map((item, index) => (
        <PlanetInfoContainer key={item} title={item} value={infoValues[index]} />
      ))}
    </div>
  )
}

export default PlanetInformation