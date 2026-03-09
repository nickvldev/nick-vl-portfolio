import Image from "next/image";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface HeroProps {
  heroText: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    button: string;
  };
}

export default function Hero({ heroText }: HeroProps) {
  const { greeting, name, title, subtitle, button } = heroText;

  return (
    <section className="bg-slate-100 w-full min-h-212.5 hero-section">
      <div className="hero-pattern" />
      <div className="pt-32 flex justify-center gap-32 relative z-10">
        <div>
          <Image
            width={500}
            height={500}
            src="/images/hero-image.png"
            alt="Nick Van Looveren - Software Engineer"
          />
        </div>
        <div className="flex flex-col mt-24">
          <span className="text-2xl pb-2">
            {greeting} <span className="text-red-400 font-medium">{name}</span>
          </span>

          <span className="font-bold text-8xl text-teal-600 pb-4">{title}</span>
          <span className="text-2xl w-175 pb-12">{subtitle}</span>
          <div className="pb-12">
            <button className="bg-teal-600 text-xl rounded-lg text-white px-7 py-3.5 font-medium shadow-sm hover:shadow-md hover:bg-teal-700 transition-colors duration-300 hover:cursor-pointer hover:scale-105">
              {button}
            </button>
          </div>

          <div className="flex gap-5 items-center">
            <a
              href="https://www.linkedin.com/in/nick-van-looveren-87613a1b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <EnvelopeIcon className="size-11 text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
            </a>
            <a
              href="https://github.com/nickvldev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="text-slate-800 hover:text-red-400 transition-colors duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
