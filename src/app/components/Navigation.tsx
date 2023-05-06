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
        className={`fixed inset-0 z-50 mt-[70px] w-full bg-background px-6 transition md:static md:mt-0 md:flex md:translate-x-0 md:gap-8 md:bg-transparent md:px-0 ${
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
                ? "border-bright-blue md:border-b-4 lg:border-t-4"
                : path === "/jupiter" && name == "Jupiter"
                ? "border-red md:border-b-4 lg:border-t-4"
                : path === "/mars" && name === "Mars"
                ? "border-dark-red md:border-b-4 lg:border-t-4"
                : path === "/" && name === "Mercury"
                ? "border-blue md:border-b-4 lg:border-t-4"
                : path === "/neptune" && name === "Neptune"
                ? "border-blue md:border-b-4 lg:border-t-4"
                : path === "/saturn" && name === "Saturn"
                ? "border-yellow md:border-b-4 lg:border-t-4"
                : path === "/uranus" && name === "Uranus"
                ? "border-light-green md:border-b-4 lg:border-t-4"
                : path === "/venus" && name === "Venus"
                ? "border-orange md:border-b-4 lg:border-t-4"
                : ""
            } lg:border-b-0`}
          >
            <li
              className={`flex items-center gap-6 border-b border-b-gray p-4 leading-none md:border-none md:px-0 lg:py-8`}
            >
              <Image
                src={icon}
                alt={name}
                width={16}
                height={16}
                className="md:hidden"
              />
              <span className="text-sm font-semibold uppercase leading-none tracking-widest">
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
