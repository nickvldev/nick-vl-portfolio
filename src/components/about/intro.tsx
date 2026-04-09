import Image from "next/image";

interface IntroProps {
  intro: {
    title: string;
    subtitle: string;
    introText: string;
  };
}

export function Intro({ intro }: IntroProps) {
  const { title, subtitle, introText } = intro;

  return (
    <section className="relative aspect-4/3 sm:aspect-3/2 lg:aspect-2/1 2xl:aspect-21/9 min-[160rem]:max-h-[85svh] max-w-640 mx-auto overflow-hidden">
      <Image
        src="/images/about-me-hero.png"
        alt="About me hero"
        quality={90}
        fill
        className="object-cover grayscale opacity-50 brightness-110"
        priority
      />
      <div className="absolute inset-0 bg-teal-600/35 mix-blend-color" />
    </section>
  );
}
