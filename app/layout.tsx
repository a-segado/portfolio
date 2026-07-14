import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angeline Segado",
  description: "Portfolio website for Angeline Segado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#e1d8ed]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}