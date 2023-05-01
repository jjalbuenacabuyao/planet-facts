"use client";

import Link from "next/link";

interface Props {
  navOpen: boolean;
}

const Navigation = ({ navOpen }: Props) => {
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
      <ul className={`fixed inset-0 transition w-full ${
        navOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {navlinks.map((link) => (
          <li key={link}>
            <Link href={`/${link === "Mercury" ? "/" : link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
