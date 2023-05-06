"use client";

import SecondaryNavItem from "./SecondaryNavItem";

const SecondaryNavigation = () => {
  const links = ["Overview", "Internal Structure", "Surface Geology"];

  return (
    <ul className="flex justify-between border-b-[1px] border-b-gray px-6 md:col-start-2 md:flex-col md:items-end md:justify-center md:gap-4 md:border-none md:pr-10 lg:col-start-3 lg:justify-start lg:pl-0 lg:pr-14">
      {links.map((item, index) => (
        <SecondaryNavItem
          key={item}
          title1={
            item === "Internal Structure"
              ? "Internal"
              : item === "Surface Geology"
              ? "Surface"
              : item
          }
          number={String(index + 1)}
          title2={
            item === "Internal Structure"
              ? "Structure"
              : item === "Surface Geology"
              ? "Geology"
              : ""
          }
        />
      ))}
    </ul>
  );
};

export default SecondaryNavigation;
