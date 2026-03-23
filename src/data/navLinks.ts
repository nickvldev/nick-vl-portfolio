export interface NavBarText {
  home: string;
  portfolio: string;
  about: string;
  contact: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export function getNavLinks(navBarText: NavBarText): NavLink[] {
  return [
    {
      href: "/portfolio",
      label: navBarText.portfolio,
    },
    {
      href: "/about",
      label: navBarText.about,
    },
    {
      href: "/contact",
      label: navBarText.contact,
    },
  ];
}
