import type { Metadata } from "next";
import { sourceSerif, dmSans, jetbrainsMono } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VBC Commons",
    template: "%s | VBC Commons",
  },
  description:
    "Open-access knowledge base for CMS value-based care models. Reference material for MSSP, LEAD, ACCESS, TEAM, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
