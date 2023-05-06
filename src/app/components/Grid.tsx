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
      <div className="md:m-auto md:grid md:max-w-4xl md:grid-cols-2 lg:max-w-screen-xl lg:grid-cols-3">
        <SecondaryNavigation />
        <PlanetImage />
        <PlanetDescription />
        <PlanetInformation />
      </div>
    </ActiveTabContext.Provider>
  );
};

export default Grid;
