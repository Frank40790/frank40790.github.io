import { name } from "./detail";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
      <p className="text-sm text-gray-600 dark:text-white">
        {name} @ {year}
      </p>
    </footer>
  );
}
