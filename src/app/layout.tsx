import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppChat from "@/components/WhatsAppChat";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavin Motors - Car Care Services",
  description: "Expert car care services in Nambiyur, Erode. Specializing in painting, repairs, and maintenance.",
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
        <WhatsAppChat />
        <ChatWidget />
      </body>
    </html>
  );
}
