import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-whitetext-green-500 shadow">
      <div className="container mx-auto px-2 py-3 flex items-center justify-between">
        <div className="px-3 rounded-lg">
          <h1 className="text-2xl font-bold text-indigo-500">Solana DApp</h1>
        </div>
        <ul className="flex flex-row uppercase font-semibold text-green-500">
          <Link href={"/"}>
            <li className="p-2">Home</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
