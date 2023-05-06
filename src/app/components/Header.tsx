"use client";

import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between border-b-[1px] border-b-gray px-6 py-4 md:flex-col md:justify-center md:gap-10 md:pb-0 md:pt-8 lg:flex-row lg:justify-between lg:py-0">
      <Logo />
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <MenuButton navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  );
};

export default Header;
