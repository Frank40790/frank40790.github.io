import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { name } from "./components/detail";
import MenuButton from "./components/menu_button";

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
