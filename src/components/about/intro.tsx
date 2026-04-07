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
    <section className="pt-6">
      <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-video max-h-[85svh] max-w-360 mx-auto overflow-hidden rounded-4xl">
        <Image
          src="/images/about-me-hero.png"
          alt="About me hero"
          quality={90}
          fill
          className="object-cover grayscale opacity-50 brightness-110"
          priority
        />
        <div className="absolute inset-0 bg-teal-600/35 mix-blend-color" />
      </div>
    </section>
  );
}
