import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Debug from "./components/debug";

const comfortaa = Comfortaa({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={comfortaa.className}>
        <Debug />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
