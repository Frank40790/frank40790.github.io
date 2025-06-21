"use client";
import lang from "./lang.json";
import { useTranslation } from "./components/language/LocalisationHooks";
import FuzzyText from "./components/reactbits/FuzzyText";

const translations = lang;

export default function NotFound() {
  const t = useTranslation(translations);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.1}
          enableHover={true}
          fontSize={"100px"}
        >
          404
        </FuzzyText>

        <div className="mt-8 text-white">{t("not_exist")}</div>
      </div>
    </>
  );
}
