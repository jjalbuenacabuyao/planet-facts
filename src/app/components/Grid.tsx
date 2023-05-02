"use client";

import { useState } from "react";
import SecondaryNavigation from "./SecondaryNavigation";
import Planet from "../types/Planet";
import PlanetImage from "./PlanetImage"
import PlanetDescription from "./PlanetDescription";

const Grid = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <SecondaryNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <PlanetImage activeTab={activeTab} />
      <PlanetDescription activeTab={activeTab} />
    </div>
  )
}

export default Grid