import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Debug from "./components/debug";
import { name } from "./components/detail";

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
          <Debug />
          <div className="bg-white dark:bg-black">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
