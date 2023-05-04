"use client";

import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";

const PlanetImage = () => {
  const planet = usePlanetContext();
  const {activeTab} = useActiveTabContext();

  const { images } = planet;
  return (
    <div className="grid place-items-center py-20 relative md:col-span-2 md:row-start-1 md:py-32">
      <Image
        src={
          activeTab === "Internal"
            ? images.internal
            : images.planet
        }
        alt=""
        width={150}
        height={150}
        className={`w-40 aspect-square md:w-64`}
      />
      {activeTab === "Surface" && (
        <Image src={images.geology} width={100} height={100} alt="" className="absolute top-1/2 right-auto left-auto md:w-40" />
      )}
    </div>
  );
};

export default PlanetImage;
