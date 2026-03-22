"use client";
import { NavItem } from "@/components/global/NavItem";
import Image from "next/image";
import { useState } from "react";

interface NavBarProps {
  navBarText: {
    portfolio: string;
    about: string;
    contact: string;
  };
}

export function NavBar({ navBarText }: NavBarProps) {
  const { portfolio, about, contact } = navBarText;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between h-23 pr-4 md:px-8">
        <NavItem
          href="/"
          content={
            <Image src="/images/logo.png" width={100} height={36} alt="Logo" />
          }
        />

        <div className="hidden md:flex h-full">
          <NavItem href="/portfolio" content={portfolio} />
          <NavItem href="/about" content={about} />
          <NavItem href="/contact" content={contact} />
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
          <div className="border-b border-slate-100">
            <NavItem href="/portfolio" content={portfolio} />
          </div>
          <div className="border-b border-slate-100">
            <NavItem href="/about" content={about} />
          </div>
          <div className="border-b border-slate-100">
            <NavItem href="/contact" content={contact} />
          </div>
        </div>
      )}
    </nav>
  );
}
