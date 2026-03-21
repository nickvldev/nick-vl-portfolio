import "../globals.css";
import { draft, jetbrainsMono } from "@/utils/fonts";
import { getDictionary, hasLocale } from "@/utils/dictionaries";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/global/NavBar";

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <html
      lang={(await params).lang}
      className={`${draft.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <NavBar navBarText={dict.navBar} />
        {children}
      </body>
    </html>
  );
}
