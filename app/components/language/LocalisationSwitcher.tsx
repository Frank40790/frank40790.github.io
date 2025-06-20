import { useLanguage } from "./LocalisationContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
