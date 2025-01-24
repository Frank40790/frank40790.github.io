import { name } from "@/app/components/detail";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-16 flex items-center justify-center border-t border-black dark:border-white">
      <p className="text-sm text-gray-600 dark:text-white">
        {name} @ {year}
      </p>
    </footer>
  );
}
