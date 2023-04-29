"use client";

import { useState } from "react";

const SecondaryNavigation = () => {
  const [active, setActive] = useState("Overview");

  return (
    <ul className="px-6 flex justify-between">
      <li>
        <button className={`py-5 uppercase text-xs tracking-[1.9px] ${active === "Overview" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActive("Overview")}>
          Overview
        </button>
      </li>

      <li>
        <button className={`py-5 uppercase text-xs tracking-[1.9px] ${active === "Internal" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActive("Internal")}>
          Internal <span className="hidden md:block">Structure</span>
        </button>
      </li>

      <li>
        <button className={`py-5 uppercase text-xs  tracking-[1.9px] ${active === "Surface" ? "opacity-100 font-semibold" : "opacity-80"}`} onClick={() => setActive("Surface")}>
          Surface <span className="hidden md:block">Geology</span>
        </button>
      </li>
    </ul>
  )
}

export default SecondaryNavigation