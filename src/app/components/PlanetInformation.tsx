"use client";

import { usePlanetContext } from "../hooks/PlanetContext";
import PlanetInfoContainer from "./PlanetInfoContainer";

const PlanetInformation = () => {
  const {rotation, revolution, radius, temperature} = usePlanetContext();
  const infoValues = [rotation, revolution, radius, temperature];
  const planetInfo = ["Rotation Time", "Revolution Time", "Radius", "Average Temp."];

  return (
    <ul className="px-6 flex flex-col gap-2 mt-7 mb-12">
      {planetInfo.map((item, index) => (
        <PlanetInfoContainer key={item} title={item} value={infoValues[index]} />
      ))}
    </ul>
  )
}

export default PlanetInformation