"use client";

import Link from "next/link";
import SolanaButton from "./SolanaButton";

export default function NavBar() {
  return (
    <nav className="bg-whitetext-green-500 shadow">
      <div className="container mx-auto px-2 py-3 flex items-center justify-between">
        <div className="px-3 rounded-lg">
          <h1 className="text-2xl font-bold text-indigo-500">Solana DApp</h1>
        </div>
        <ul className="flex flex-row items-center uppercase font-semibold text-green-500 space-x-3">
          <Link href={"/"}>
            <li className="p-2">Home</li>
          </Link>
          <div>
            <SolanaButton />
          </div>
        </ul>
      </div>
    </nav>
  );
}
