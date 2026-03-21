import { NavItem } from "@/components/global/NavItem";
import Image from "next/image";

interface NavBarProps {
  navBarText: {
    portfolio: string;
    about: string;
    contact: string;
  };
}

export function NavBar({ navBarText }: NavBarProps) {
  const { portfolio, about, contact } = navBarText;

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 h-23">
        <NavItem
          href="/"
          content={
            <Image src="/images/logo.png" width={100} height={36} alt="Logo" />
          }
        />
        <div className="flex h-full">
          <NavItem href="/portfolio" content={portfolio} />
          <NavItem href="/about" content={about} />
          <NavItem href="/contact" content={contact} />
        </div>
      </div>
    </nav>
  );
}
