import { Source_Serif_4, DM_Sans, JetBrains_Mono } from "next/font/google";

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
