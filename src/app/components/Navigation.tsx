"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react"

interface Props {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ navOpen, setNavOpen }: Props) => {
  const navlinks = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  return (
    <nav>
      <ul className={`fixed inset-0 transition w-full md:static md:translate-x-0 md:flex md:gap-8 ${
        navOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {navlinks.map((link) => (
          <li key={link}>
            <Link 
              href={`/${link === "Mercury" ? "/" : link.toLowerCase()}`}
              onClick={() => setNavOpen(!navOpen)}
              className="uppercase tracking-widest text-sm font-semibold"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
