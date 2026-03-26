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
    <section className="flex flex-col bg-white md:flex-row px-8 justify-center shadow-extra-small py-32">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-8xl font-bold ">{title}</h1>
        <p className="text-2xl pb-6 ">{subtitle}</p>
        <p className="text-lg leading-relaxed">{introText}</p>
      </div>
    </section>
  );
}
