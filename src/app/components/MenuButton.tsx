"use client";

import React, { SetStateAction } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface Props {
  navOpen: boolean;
  setNavOpen: React.Dispatch<SetStateAction<boolean>>;
}

function MenuButton({ navOpen, setNavOpen }: Props) {
  return (
    <button
      className="z-50 block md:hidden"
      onClick={() => setNavOpen(!navOpen)}
    >
      {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
    </button>
  );
}

export default MenuButton;
