import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-400 text-white flex flex-col items-center gap-2 py-3">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
