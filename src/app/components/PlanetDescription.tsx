"use client";

import Link from "next/link";
import { Antonio } from "next/font/google";
import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";

const antonio = Antonio({ subsets: ["latin"] });

const PlanetDescription = () => {
  const planet = usePlanetContext();
  const {activeTab} = useActiveTabContext();
  const { name, overview, structure, geology } = planet;

  return (
    <div className="text-center px-6 flex flex-col gap-4 md:text-left md:col-start-1 md:row-start-2 md:pl-10 md:gap-6 lg:row-start-1 lg:col-start-3 lg:pl-0 lg:justify-end lg:mb-8 lg:pr-14">
      <h1 className={`${antonio.className} text-4xl md:text-5xl`}>{name}</h1>
      <p className="opacity-70 font-light">
        {activeTab === "Overview"
          ? overview.content
          : activeTab === "Internal"
          ? structure.content
          : geology.content}
      </p>
      <span className="font-light opacity-70">
        Source:{" "}
        <span className="inline-flex gap-2 items-center">
          <Link
            href={
              activeTab === "Overview"
                ? overview.source
                : activeTab === "Internal"
                ? structure.source
                : geology.source
            }
            className="font-medium underline"
          >
            Wikipedia
          </Link>
          <Image src={"/images/icon-source.svg"} width={12} height={12} alt="" />
        </span>
      </span>
    </div>
  );
};

export default PlanetDescription;
