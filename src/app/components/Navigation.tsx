"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  earth,
  jupiter,
  mars,
  mercury,
  neptune,
  saturn,
  uranus,
  venus,
} from "../constants";
import Image from "next/image";

interface Props {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ navOpen, setNavOpen }: Props) => {
  useEffect(() => {
    const bodyOverflowStyles = document.body.style;

    if (window.innerWidth < 768) {
      navOpen
        ? (bodyOverflowStyles.overflowY = "hidden")
        : (bodyOverflowStyles.overflowY = "auto");
    }
  }, [navOpen]);

  const path = usePathname();
  console.log(path);

  const navlinks = [
    {
      name: "Mercury",
      icon: mercury.images.planet,
    },
    {
      name: "Venus",
      icon: venus.images.planet,
    },
    {
      name: "Earth",
      icon: earth.images.planet,
    },
    {
      name: "Mars",
      icon: mars.images.planet,
    },
    {
      name: "Jupiter",
      icon: jupiter.images.planet,
    },
    {
      name: "Saturn",
      icon: saturn.images.planet,
    },
    {
      name: "Uranus",
      icon: uranus.images.planet,
    },
    {
      name: "Neptune",
      icon: neptune.images.planet,
    },
  ];
  return (
    <nav>
      <ul
        className={`fixed bg-background z-50 px-6 inset-0 transition w-full mt-[70px] md:static md:translate-x-0 md:flex md:gap-8 md:bg-transparent md:mt-0 md:px-0 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navlinks.map(({ name, icon }) => (
          <Link
            key={name}
            href={`/${name === "Mercury" ? "/" : name.toLowerCase()}`}
            onClick={() => setNavOpen(!navOpen)}
            className={`${
              path === "/earth" && name === "Earth"
                ? "md:border-b-4 border-b-bright-blue"
                : path === "/jupiter" && name == "Jupiter"
                ? "md:border-b-4 border-b-red"
                : path === "/mars" && name === "Mars"
                ? "md:border-b-4 border-b-dark-red"
                : path === "/" && name === "Mercury"
                ? "md:border-b-4 border-b-blue"
                : path === "/neptune" && name === "Neptune"
                ? "md:border-b-4 border-b-blue"
                : path === "/saturn" && name === "Saturn"
                ? "md:border-b-4 border-b-yellow"
                : path === "/uranus" && name === "Uranus"
                ? "md:border-b-4 border-b-light-green"
                : path === "/venus" && name === "Venus"
                ? "md:border-b-4 border-b-orange"
                : ""
            }`}
          >
            <li
              className={`flex items-center gap-6 leading-none p-4 border-b border-b-gray md:border-none md:px-0`}
            >
              <Image
                src={icon}
                alt={name}
                width={16}
                height={16}
                className="md:hidden"
              />
              <span className="leading-none uppercase tracking-widest text-sm font-semibold">
                {name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
