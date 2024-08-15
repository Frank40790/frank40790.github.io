export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-gray-200 h-16 flex items-center justify-center border-t border-gray-300">
      <p className="text-sm text-gray-600">Copyright HFH @ {year}</p>
    </footer>
  );
}
