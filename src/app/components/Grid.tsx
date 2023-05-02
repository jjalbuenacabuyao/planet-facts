"use client";

import { useState } from "react";
import SecondaryNavigation from "./SecondaryNavigation";
import PlanetImage from "./PlanetImage"
import PlanetDescription from "./PlanetDescription";
import PlanetInformation from "./PlanetInformation";

const Grid = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="md:grid md:grid-cols-2">
      <SecondaryNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <PlanetImage activeTab={activeTab} />
      <PlanetDescription activeTab={activeTab} />
      <PlanetInformation />
    </div>
  )
}

export default Grid