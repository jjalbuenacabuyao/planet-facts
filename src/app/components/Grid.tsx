"use client";

import { useState } from "react";
import SecondaryNavigation from "./SecondaryNavigation";
import PlanetImage from "./PlanetImage";
import PlanetDescription from "./PlanetDescription";
import PlanetInformation from "./PlanetInformation";
import ActiveTabContext from "../hooks/ActiveTabContext";
import { motion } from "framer-motion";

const Grid = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <div className="md:m-auto md:grid md:max-w-4xl md:grid-cols-2 lg:max-w-screen-xl lg:grid-cols-3">
          <SecondaryNavigation />
          <PlanetImage />
          <PlanetDescription />
          <PlanetInformation />
        </div>
      </motion.div>
    </ActiveTabContext.Provider>
  );
};

export default Grid;
