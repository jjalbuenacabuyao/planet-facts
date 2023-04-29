"use client";

import Link from "next/link"

interface Props {
  navOpen: boolean;
}

const Navigation = ({navOpen} : Props) => {
  const navlinks = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
  return (
    <nav className={`absolute inset-0 translate-x-full transition ${navOpen && "translate-x-0"}`}>
      <ul>
        {navlinks.map(link => (
          <li key={link}>
            <Link href={`/${link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation