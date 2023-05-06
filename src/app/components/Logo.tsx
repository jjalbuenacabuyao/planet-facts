"use client";

import Link from "next/link";
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

const Logo = () => {
  return (
    <Link href={"/"} className="z-50">
      <span className={`${antonio.className} text-2xl uppercase text-white`}>
        The Planets
      </span>
    </Link>
  );
};

export default Logo;
