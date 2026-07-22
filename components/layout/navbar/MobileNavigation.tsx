"use client";

import { useState } from "react";
import NavbarMenuButton from "./mobile-button";
import MobileMenu from "./MobileMenu";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <NavbarMenuButton
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && <MobileMenu />}
    </div>
  );
}
