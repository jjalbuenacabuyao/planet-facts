"use client";

import { usePlanetContext } from "../hooks/PlanetContext";
import { useActiveTabContext } from "../hooks/ActiveTabContext";

interface Props {
  title1: string;
  title2?: string;
  number: string;
}

const SecondaryNavItem = ({ title1, number, title2 }: Props) => {
  const { name } = usePlanetContext();
  const { activeTab, setActiveTab } = useActiveTabContext();
  return (
    <li className="md:w-full md:max-w-xs lg:max-w-none">
      <button
        className={`py-5 text-xs lg:text-sm uppercase tracking-[1.9px] ${
          activeTab === title1
            ? "border-b-4 font-semibold opacity-100"
            : "opacity-80"
        } 
          ${
            name === "Earth" && activeTab === title1
              ? "border-b-bright-blue md:bg-bright-blue"
              : name === "Jupiter" && activeTab === title1
              ? "border-b-red md:bg-red"
              : name === "Mars" && activeTab === title1
              ? "border-b-dark-red md:bg-dark-red"
              : name === "Mercury" && activeTab === title1
              ? "border-b-blue md:bg-blue"
              : name === "Neptune" && activeTab === title1
              ? "border-b-blue md:bg-blue"
              : name === "Saturn" && activeTab === title1
              ? "border-b-yellow md:bg-yellow"
              : name === "Uranus" && activeTab === title1
              ? "border-b-light-green md:bg-light-green"
              : name === "Venus" && activeTab === title1
              ? "border-b-orange md:bg-orange"
              : "bg-transparent"
          } md:w-full md:border md:border-gray md:py-3 md:pl-12 md:text-left`}
        onClick={() => setActiveTab(title1)}
      >
        <span className="hidden md:inline">0{number}</span> {title1}{" "}
        <span className="hidden md:inline">{title2}</span>
      </button>
    </li>
  );
};

export default SecondaryNavItem;
