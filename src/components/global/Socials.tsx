import type { ComponentType } from "react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GithubIcon } from "@/components/icons/GithubIcon";

type SocialSize = "sm" | "lg";

interface SocialLink {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  iconSizeClassName?: Record<SocialSize, string>;
}

interface SocialsProps {
  className?: string;
  iconClassName?: string;
  size?: SocialSize;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/nick-van-looveren-87613a1b9/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "mailto:vanlooverennick@gmail.com",
    icon: EnvelopeIcon,
    label: "Email",
    iconSizeClassName: {
      sm: "w-8 h-8",
      lg: "w-11 h-11 md:w-13 md:h-13",
    },
  },
  {
    href: "https://github.com/nickvldev",
    icon: GithubIcon,
    label: "GitHub",
  },
];

export function Socials({
  className = "",
  iconClassName = "",
  size = "lg",
}: SocialsProps) {
  const containerClassName = ["flex gap-6 items-center", className]
    .filter(Boolean)
    .join(" ");

  const baseIconClassName =
    "text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer";
  const sizeClassName = size === "sm" ? "w-6 h-6" : "w-8 h-8 md:w-10 md:h-10";

  return (
    <div className={containerClassName}>
      {socialLinks.map(
        ({
          href,
          icon: Icon,
          label,
          iconSizeClassName: itemIconSizeClassName,
        }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:scale-110 transition-transform duration-300"
          >
            <Icon
              className={[
                itemIconSizeClassName?.[size] ?? sizeClassName,
                baseIconClassName,
                iconClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </a>
        ),
      )}
    </div>
  );
}
