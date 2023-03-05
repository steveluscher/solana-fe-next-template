import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import NavBar from "@/components/NavBar";
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
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
