"use client";

import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";
import { motion,animate } from "framer-motion";

const PlanetImage = () => {
  const planet = usePlanetContext();
  const { activeTab } = useActiveTabContext();

  const { images } = planet;
  return (
    <motion.div
      initial={{ x: -500, scale: 0.5 }}
      animate={{ x: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative grid place-items-center py-20 md:col-span-2 md:row-start-1 md:py-32 lg:row-span-2 lg:row-start-1"
    >
      <Image
        src={activeTab === "Internal" ? images.internal : images.planet}
        alt=""
        width={150}
        height={150}
        className={`aspect-square w-40 md:w-64 lg:w-80`}
      />
      {activeTab === "Surface" && (
        <Image
          src={images.geology}
          width={100}
          height={100}
          alt=""
          className="absolute left-auto right-auto top-1/2 md:w-40"
        />
      )}
    </motion.div>
  );
};

export default PlanetImage;
