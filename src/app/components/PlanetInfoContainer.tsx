"use client";

import { Antonio } from "next/font/google";

const antonio = Antonio({subsets: ["latin"]});

interface Props {
  title: string;
  value: string;
}

const PlanetInfoContainer = ({title, value}: Props) => {
  return (
    <li className="flex items-center px-6 py-3 justify-between border border-gray uppercase md:flex-col md:flex-1 md:items-start md:gap-2 md:p-4">
      <h2 className="opacity-70 text-xs leading-none">{title}</h2>
      <span className={`${antonio.className} text-xl leading-none md:text-2xl`}>{value}</span>
    </li>
  )
}

export default PlanetInfoContainer