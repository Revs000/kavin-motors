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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SocialMediaLinks />
        <ChatWidget />
      </body>
    </html>
  );
}
