"use client";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "./portfolio/components/custom_cursor";
import { SearchProvider } from "./portfolio/components/search/search_context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ParallaxProvider>
          <SearchProvider>{children}</SearchProvider>
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
