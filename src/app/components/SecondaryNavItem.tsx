import React, { Dispatch, SetStateAction } from "react";
import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";

interface Props {
  title1: string;
  title2?: string;
  number: string;
}

const SecondaryNavItem = ({
  title1,
  number,
  title2,
}: Props) => {
  const { name } = usePlanetContext();
  const { activeTab, setActiveTab } = useActiveTabContext();
  return (
    <li className="md:w-full md:max-w-xs">
      <button
        className={`py-5 uppercase text-xs tracking-[1.9px] ${
          activeTab === title1
            ? "opacity-100 font-semibold border-b-4"
            : "opacity-80"
        } 
          ${
            name === "Earth" && activeTab === title1
              ? "md:bg-bright-blue border-b-bright-blue"
              : name === "Jupiter" && activeTab === title1
              ? "md:bg-red border-b-red"
              : name === "Mars" && activeTab === title1
              ? "md:bg-dark-red border-b-dark-red"
              : name === "Mercury" && activeTab === title1
              ? "md:bg-blue border-b-blue"
              : name === "Neptune" && activeTab === title1
              ? "md:bg-blue border-b-blue"
              : name === "Saturn" && activeTab === title1
              ? "md:bg-yellow border-b-yellow"
              : name === "Uranus" && activeTab === title1
              ? "md:bg-light-green border-b-light-green"
              : name === "Venus" && activeTab === title1
              ? "md:bg-orange border-b-orange"
              : "bg-transparent"
          } md:border md:border-gray md:w-full md:text-left md:pl-12 md:py-3`}
        onClick={() => setActiveTab(title1)}
      >
        <span className="hidden md:inline">0{number}</span> {title1}{" "}
        <span className="hidden md:inline">{title2}</span>
      </button>
    </li>
  );
};

export default SecondaryNavItem;
