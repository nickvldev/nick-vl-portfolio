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
    <section className="relative overflow-hidden bg-[#f0f4f8] w-full lg:min-h-[800px] flex lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_90%)]">
      <div className="hero-pattern absolute inset-0 w-full lg:w-3/5 bg-[length:1200px_1200px] bg-repeat pointer-events-none z-0 opacity-40 lg:opacity-100" />

      <div className="container mx-auto px-6 pt-28 lg:pt-24 relative z-10 flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-10 lg:gap-24 xl:gap-32 w-full">
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end lg:self-end">
          <Image
            width={700}
            height={700}
            className="w-64 md:w-80 lg:w-[380px] xl:w-[450px] h-auto object-bottom"
            src="/images/hero-image.png"
            alt="Nick Van Looveren - Software Engineer"
            priority
          />
        </div>

        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start lg:pb-16">
          <div className="flex flex-col items-start text-left w-fit max-w-full">
            <span className="text-xl md:text-2xl pb-3 text-slate-600 font-light">
              {greeting}{" "}
              <span className="text-red-400 font-medium">{name}</span>
            </span>

            <h1 className="font-bold text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-teal-600 pb-6 leading-tight whitespace-nowrap tracking-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl xl:text-2xl max-w-md md:max-w-lg xl:max-w-2xl pb-10 text-slate-700 leading-relaxed">
              {subtitle}
            </p>

            <div className="pb-12">
              <button className="bg-teal-600 text-lg md:text-xl rounded-lg text-white px-8 py-3.5 font-medium shadow-sm hover:shadow-md hover:bg-teal-700 transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95">
                {button}
              </button>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
