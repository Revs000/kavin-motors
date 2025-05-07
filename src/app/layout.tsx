import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavin Motors - Car Service Center",
  description: "Professional car service and repair center in Nambiyur",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#059669", // emerald-600
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
        {children}
        </main>
        <SocialMediaLinks />
        <ChatWidget />
      </body>
    </html>
  );
}
