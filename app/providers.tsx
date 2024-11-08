"use client";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ParallaxProvider>{children}</ParallaxProvider>
    </ThemeProvider>
  );
}
