"use client";
import { NavItem } from "@/components/global/NavItem";
import { getNavLinks, NavBarText } from "@/data/navLinks";
import Image from "next/image";
import { useState } from "react";

interface NavBarProps {
  navBarText: NavBarText;
}

export function NavBar({ navBarText }: NavBarProps) {
  const navLinks = getNavLinks(navBarText);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-white shadow-small">
      <div className="flex items-center justify-between h-23 pr-4 md:px-8">
        <NavItem
          href="/"
          content={
            <Image src="/images/logo.png" width={100} height={36} alt="Logo" />
          }
        />

        <div className="hidden md:flex h-full">
          {navLinks.map((navLink) => (
            <NavItem
              key={navLink.href}
              href={navLink.href}
              content={navLink.label}
            />
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col border-t border-slate-100">
          {navLinks.map((navLink) => (
            <div key={navLink.href} className="border-b border-slate-100">
              <NavItem href={navLink.href} content={navLink.label} />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
