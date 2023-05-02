"use client";

import Link from "next/link";
import Planet from "../types/Planet";

import { Antonio } from "next/font/google";
import Image from "next/image";
import { usePlanetContext } from "../hooks/PlanetContext";

const antonio = Antonio({ subsets: ["latin"] });

interface Props {
  activeTab: string;
}

const PlanetDescription = ({ activeTab }: Props) => {
  const planet = usePlanetContext();
  const { name, overview, structure, geology, ...props } = planet;

  return (
    <div className="text-center px-6 flex flex-col gap-4 md:col-start-1 md:row-start-2">
      <h1 className={`${antonio.className} text-4xl`}>{name}</h1>
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
