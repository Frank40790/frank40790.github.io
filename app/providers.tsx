"use client";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/app/components/cursor/Cursor";
import { SearchProvider } from "@/app/components/search/SearchContext";
import { LanguageProvider } from "./components/language/LocalisationContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <SearchProvider>{children}</SearchProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
