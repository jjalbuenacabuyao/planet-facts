"use client";

import { Dispatch, SetStateAction } from "react";
import { usePlanetContext } from "../hooks/PlanetContext";

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const SecondaryNavigation = ({ activeTab, setActiveTab }: Props) => {
  const { colorTheme } = usePlanetContext();
  return (
    <ul className="px-6 flex justify-between border-b-[1px] border-b-gray">
      <li>
        <button
          className={`py-5 uppercase text-xs tracking-[1.9px] ${
            activeTab === "Overview"
              ? "opacity-100 font-semibold border-b-4"
              : "opacity-80"
          }`}
          onClick={() => setActiveTab("Overview")}
          style={{ borderBottomColor: `${colorTheme}` }}
        >
          Overview
        </button>
      </li>

      <li>
        <button
          className={`py-5 uppercase text-xs tracking-[1.9px] ${
            activeTab === "Internal"
              ? "opacity-100 font-semibold border-b-4"
              : "opacity-80"
          }`}
          onClick={() => setActiveTab("Internal")}
          style={{ borderBottomColor: `${colorTheme}` }}
        >
          Internal <span className="hidden md:block">Structure</span>
        </button>
      </li>

      <li>
        <button
          className={`py-5 uppercase text-xs  tracking-[1.9px] ${
            activeTab === "Surface" ? "opacity-100 font-semibold border-b-4" : "opacity-80"
          }`}
          onClick={() => setActiveTab("Surface")}
          style={{ borderBottomColor: `${colorTheme}` }}
        >
          Surface <span className="hidden md:block">Geology</span>
        </button>
      </li>
    </ul>
  );
};

export default SecondaryNavigation;
