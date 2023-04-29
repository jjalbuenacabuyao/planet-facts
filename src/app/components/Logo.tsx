"use client";

import Link from "next/link"
import { Antonio } from "next/font/google";

const antonio = Antonio({subsets: ["latin"]});

const Logo = () => {
  return (
    <Link href={"/"}>
      <span className={`${antonio.className} uppercase text-white text-xl`}>
        The Planets
      </span>
    </Link>
  )
}

export default Logo