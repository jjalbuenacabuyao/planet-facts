"use client";

import { useState } from "react";
import SecondaryNavigation from "./SecondaryNavigation";
import Planet from "../types/Planet";
import PlanetImage from "./PlanetImage"
import PlanetDescription from "./PlanetDescription";

interface Props {
  planet: Planet;
}

const Grid = ({planet}: Props) => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div>
      <SecondaryNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <PlanetImage activeTab={activeTab} planet={planet} />
      <PlanetDescription planet={planet} activeTab={activeTab} />
    </div>
  )
}

export default Grid