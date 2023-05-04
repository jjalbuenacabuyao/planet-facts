"use client";

import { useState } from "react";
import SecondaryNavigation from "./SecondaryNavigation";
import PlanetImage from "./PlanetImage";
import PlanetDescription from "./PlanetDescription";
import PlanetInformation from "./PlanetInformation";
import ActiveTabContext from "../hooks/ActiveTabContext";

const Grid = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="md:grid md:grid-cols-2 md:max-w-4xl md:m-auto">
        <SecondaryNavigation />
        <PlanetImage />
        <PlanetDescription />
        <PlanetInformation />
      </div>
    </ActiveTabContext.Provider>
  );
};

export default Grid;
