"use client";

import SecondaryNavItem from "./SecondaryNavItem";

const SecondaryNavigation = () => {
  const links = ["Overview", "Internal Structure", "Surface Geology"];

  return (
    <ul className="px-6 flex justify-between border-b-[1px] border-b-gray md:border-none md:col-start-2 md:flex-col md:gap-4 md:justify-center md:pr-10 md:items-end">
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
