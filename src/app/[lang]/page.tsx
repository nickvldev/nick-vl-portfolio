import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-zinc-50">
      <Hero heroText={dict.home.hero} />
    </main>
  );
}
