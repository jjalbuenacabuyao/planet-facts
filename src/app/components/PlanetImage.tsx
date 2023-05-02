"use client";

import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";

interface Props {
  activeTab: string;
}

const PlanetImage = ({ activeTab }: Props) => {
  const planet = usePlanetContext();
  const { images, ...props } = planet;
  return (
    <div className="grid place-items-center py-20 relative md:col-span-2 md:row-start-1">
      <Image
        src={
          activeTab === "Internal"
            ? images.internal
            : images.planet
        }
        alt=""
        width={150}
        height={150}
        className={`w-40 aspect-square`}
      />
      {activeTab === "Surface" && (
        <Image src={images.geology} width={100} height={100} alt="" className="absolute top-1/2 right-auto left-auto" />
      )}
    </div>
  );
};

export default PlanetImage;
