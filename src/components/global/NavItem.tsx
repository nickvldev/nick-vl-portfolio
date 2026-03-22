"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  content: string | ReactNode;
}

export function NavItem({ href, content }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isText = typeof content === "string";

  return (
    <Link
      className={`relative px-4 group flex justify-center items-center h-full`}
      href={href}
    >
      {isText ? (
        <>
          <span
            className={`md:translate-y-2.75 text-lg group-hover:text-teal-600 transition-colors duration-300 font-medium py-4 md:py-0 ${
              isActive ? "text-teal-600" : "text-slate-400"
            }`}
          >
            {content}
          </span>

          <span
            className={`absolute bottom-0 left-4 right-4 h-0.5 transition-colors duration-300 md:block hidden ${
              isActive ? "bg-teal-600" : "bg-transparent"
            }`}
          />
        </>
      ) : (
        content
      )}
    </Link>
  );
}
