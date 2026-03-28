import Link from "next/link";
import { getNavLinks, NavBarText } from "@/data/navLinks";
import { Socials } from "@/components/global/Socials";

interface FooterProps {
  footerText: {
    copyright: string;
  };
  navBarText: NavBarText;
}

export function Footer({ footerText, navBarText }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const navLinks = getNavLinks(navBarText);
  const navItemClassName =
    "text-white transition-colors duration-300 hover:text-teal-100";

  const dynamicCopyright = footerText.copyright.replace(
    "{year}",
    currentYear.toString(),
  );

  return (
    <footer className="h-23 flex items-center justify-center md:justify-between bg-slate-800 px-8 xs:px-11">
      <p className="text-slate-400">{dynamicCopyright}</p>
      <div className="hidden md:flex items-center gap-8">
        <Link className={navItemClassName} href={"/"}>
          {navBarText.home}
        </Link>
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            className={navItemClassName}
            href={navLink.href}
          >
            {navLink.label}
          </Link>
        ))}
      </div>
      <Socials
        className="hidden lg:flex"
        size="sm"
        iconClassName="text-white hover:text-teal-100"
      />
    </footer>
  );
}
