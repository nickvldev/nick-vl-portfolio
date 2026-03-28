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
    <section className="bg-white flex justify-center shadow-extra-small py-[96px] px-8 xs:px-11">
      <div className="w-[1280px] justify-between flex flex-col lg:flex-row">
        <div className="flex justify-center flex-col max-w-lg self-center">
          <h1 className="text-8xl font-bold ">{title}</h1>
          <p className="text-2xl pb-6 ">{subtitle}</p>
          <p className="text-lg leading-relaxed">{introText}</p>
        </div>
        <div className="relative w-full max-w-135 aspect-9/8 self-center mt-16 lg:mt-0 lg:w-[45%]">
          <div className="absolute w-[77.78%] h-[47.92%] top-[6.67%] left-1/2 -translate-x-1/2 overflow-hidden rounded-[10px] shadow-medium brightness-130 z-10">
            <Image
              fill
              src="/images/fast-map.png"
              alt="fast-map"
              className="object-cover"
            />
          </div>
          <div className="absolute w-[55.56%] h-[43.75%] bottom-[6.67%] left-0 overflow-hidden rounded-[10px] shadow-medium ring-1 ring-slate-200 rotate-3 z-20">
            <Image
              fill
              src="/images/brabo-map.png"
              alt="brabo-map"
              className="object-cover"
            />
          </div>
          <div className="absolute w-[55.56%] h-[43.75%] bottom-[3.33%] right-0 overflow-hidden rounded-[10px] shadow-medium ring-1 ring-slate-200 -rotate-2 z-10">
            <Image
              fill
              src="/images/henconnect.png"
              alt="henconnect"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
