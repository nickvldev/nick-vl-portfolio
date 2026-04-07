import { getDictionary, hasLocale } from "@/utils/dictionaries";
import { notFound } from "next/navigation";
import { Intro } from "@/components/about/intro";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-slate-100">
      <Intro intro={dict.about.intro} />
    </main>
  );
}
