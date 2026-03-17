import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Socials() {
  return (
    <div className="flex gap-6 items-center">
      <a
        href="https://www.linkedin.com/in/nick-van-looveren-87613a1b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <LinkedInIcon className="w-8 h-8 md:w-10 md:h-10 text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
      </a>
      <a
        href="mailto:vanlooverennick@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <EnvelopeIcon className="w-11 h-11 md:w-13 md:h-13 text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
      </a>
      <a
        href="https://github.com/nickvldev"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <GithubIcon className="w-8 h-8 md:w-10 md:h-10 text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
      </a>
    </div>
  );
}
