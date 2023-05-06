"use client";

import Link from "next/link";
import { Antonio } from "next/font/google";
import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";

const antonio = Antonio({ subsets: ["latin"] });

const PlanetDescription = () => {
  const planet = usePlanetContext();
  const { activeTab } = useActiveTabContext();
  const { name, overview, structure, geology } = planet;

  return (
    <div className="flex flex-col gap-4 px-6 text-center md:col-start-1 md:row-start-2 md:gap-6 md:pl-10 md:text-left lg:col-start-3 lg:row-start-1 lg:mb-8 lg:justify-end lg:pl-0 lg:pr-14">
      <h1 className={`${antonio.className} text-4xl md:text-5xl`}>{name}</h1>
      <p className="font-light opacity-70">
        {activeTab === "Overview"
          ? overview.content
          : activeTab === "Internal"
          ? structure.content
          : geology.content}
      </p>
      <span className="font-light opacity-70">
        Source:{" "}
        <span className="inline-flex items-center gap-2">
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
          <Image
            src={"/images/icon-source.svg"}
            width={12}
            height={12}
            alt=""
          />
        </span>
      </span>
    </div>
  );
};

export default PlanetDescription;
