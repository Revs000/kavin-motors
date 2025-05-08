import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#059669',
};

export const metadata: Metadata = {
  title: "Kavin Motors - Car Service Center",
  description: "Professional car service and repair center in Nambiyur",
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
