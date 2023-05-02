"use client";

import { Dispatch, SetStateAction } from "react";
import SecondaryNavItem from "./SecondaryNavItem";

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const SecondaryNavigation = ({ activeTab, setActiveTab }: Props) => {
  const links = ["Overview", "Internal Structure", "Surface Geology"];

  return (
    <ul className="px-6 flex justify-between border-b-[1px] border-b-gray md:border-none md:col-start-2 md:flex-col md:gap-4 md:justify-center">
      {links.map((item, index) => (
        <SecondaryNavItem
          key={item}
          title1={item === "Internal Structure" ? "Internal" : item === "Surface Geology" ? "Surface" : item}
          number={String(index + 1)}
          title2={item === "Internal Structure" ? "Structure" : item === "Surface Geology" ? "Geology" : ""}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </ul>
  );
};

export default SecondaryNavigation;
