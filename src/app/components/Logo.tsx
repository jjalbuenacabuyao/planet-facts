"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="z-50">
      <span className={`font-antonio font-medium text-2xl uppercase text-white`}>
        The Planets
      </span>
    </Link>
  );
};

export default Logo;
