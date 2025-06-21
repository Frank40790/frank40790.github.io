import { useLanguage } from "./LocalisationContext";

export function useTranslation(translations: Translations) {
  const { language } = useLanguage();

  return (key: string) => {
    const langPack = translations[language];
    return langPack?.[key] ?? key;
  };
}
