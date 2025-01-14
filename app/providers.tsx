"use client";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "./components/cursor/cursor";
import { SearchProvider } from "./components/search/search_context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ParallaxProvider>
          <SearchProvider>{children}</SearchProvider>
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
