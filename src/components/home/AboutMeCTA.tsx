import { PrimaryButton } from "@/components/global/PrimaryButton";

interface AboutMeCTAProps {
  aboutMeCTAText: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export function AboutMeCTA({ aboutMeCTAText }: AboutMeCTAProps) {
  const { title, subtitle, button } = aboutMeCTAText;

  return (
    <section className="relative overflow-hidden cta-pattern w-full flex">
      <div className="max-w-360 mx-auto px-8 xs:px-11 py-32 w-full flex flex-col items-center">
        <div className="flex flex-col items-start text-left w-fit max-w-full">
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-white pb-4">
            {title}
          </h2>

          <p className="text-teal-100 pb-12 text-lg md:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          <div>
            <PrimaryButton size="sm">{button}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
