"use client";

import { Dispatch, SetStateAction } from "react";

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const SecondaryNavigation = ({ activeTab, setActiveTab}: Props) => {
  return (
    <ul className="px-6 flex justify-between">
      <li>
        <button className={`py-5 uppercase text-xs tracking-[1.9px] ${activeTab === "Overview" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActiveTab("Overview")}>
          Overview
        </button>
      </li>

      <li>
        <button className={`py-5 uppercase text-xs tracking-[1.9px] ${activeTab === "Internal" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActiveTab("Internal")}>
          Internal <span className="hidden md:block">Structure</span>
        </button>
      </li>

      <li>
        <button className={`py-5 uppercase text-xs  tracking-[1.9px] ${activeTab === "Surface" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActiveTab("Surface")}>
          Surface <span className="hidden md:block">Geology</span>
        </button>
      </li>
    </ul>
  )
}

export default SecondaryNavigation