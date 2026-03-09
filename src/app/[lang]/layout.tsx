import "../globals.css";
import { draft } from "@/utils/fonts";

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={(await params).lang} className={`${draft.variable}`}>
      <body>{children}</body>
    </html>
  );
}
