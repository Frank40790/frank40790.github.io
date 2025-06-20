import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import { name } from "@/app/components/Detail";
import MenuButton from "@/app/components/MenuButton";

const comfortaa = Comfortaa({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: `${name}'s Website`,
  description: "This is my website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={comfortaa.className}>
        <Providers>
          <div className="bg-white dark:bg-black">
            <Navbar />
            {children}
            <MenuButton />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
