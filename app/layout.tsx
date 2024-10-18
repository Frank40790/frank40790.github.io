import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { Comfortaa, Inter } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
