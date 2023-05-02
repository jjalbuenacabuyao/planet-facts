"use client";

import { Antonio } from "next/font/google";

const antonio = Antonio({subsets: ["latin"]});

interface Props {
  title: string;
  value: string;
}

const PlanetInfoContainer = ({title, value}: Props) => {
  return (
    <li className="flex items-center px-6 py-3 justify-between border border-gray uppercase">
      <h2 className="opacity-70 text-xs leading-none">{title}</h2>
      <span className={`${antonio.className} text-xl leading-none`}>{value}</span>
    </li>
  )
}

export default PlanetInfoContainer