import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
const inter = Inter({ subsets: ["latin", "vietnamese"] });
export const metadata = {
  title: "Solana DApp Template",
  description: "A Solana DApp template for Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased bg-white")}>
        <nav className="bg-whitetext-green-500 shadow">
          <div className="container mx-auto px-2 py-3 flex items-center justify-between">
            <div className="px-3 rounded-lg">
              <h1 className="text-2xl font-bold text-indigo-500">
                {metadata.title}
              </h1>
            </div>
            <ul className="flex flex-row uppercase font-semibold text-green-500">
              <Link href={"/"}>
                <li className="p-2">Home</li>
              </Link>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
