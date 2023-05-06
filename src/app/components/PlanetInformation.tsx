"use client";

import { usePlanetContext } from "../hooks/PlanetContext";
import PlanetInfoContainer from "./PlanetInfoContainer";

const PlanetInformation = () => {
  const { rotation, revolution, radius, temperature } = usePlanetContext();
  const infoValues = [rotation, revolution, radius, temperature];
  const planetInfo = [
    "Rotation Time",
    "Revolution Time",
    "Radius",
    "Average Temp.",
  ];

  return (
    <ul className="mb-12 mt-7 flex flex-col gap-2 px-6 md:col-span-2 md:flex-row md:px-10 lg:col-span-3 lg:px-14 lg:gap-6">
      {planetInfo.map((item, index) => (
        <PlanetInfoContainer
          key={item}
          title={item}
          value={infoValues[index]}
        />
      ))}
    </ul>
  );
};

export default PlanetInformation;
