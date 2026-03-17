import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const draft = localFont({
  src: [
    {
      path: "../../public/fonts/draft-d-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/draft-d-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/draft-d-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-draft",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
