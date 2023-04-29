"use client";

import { useState } from "react";
import Logo from "./Logo"
import Navigation from "./Navigation"
import MenuButton from "./MenuButton";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="py-4 px-6 relative flex items-center justify-between">
      <Logo />
      <Navigation />
      <MenuButton navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  )
}

export default Header