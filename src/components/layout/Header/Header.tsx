"use client";

import { useState } from "react";

import { BurgerIcon, Container, Logo, NavLinks } from "@/components/ui";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full before:absolute before:left-0 before:top-0  before:z-50 before:h-full before:w-full before:bg-white before:shadow-headerShadow before:content-[''] ">
      <Container className="flex min-h-[60px] items-center justify-between gap-5">
        <Logo />
        <NavLinks isOpen={isOpen} variant="desktop" />
        <NavLinks isOpen={isOpen} variant="mobile" />
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </header>
  );
};
