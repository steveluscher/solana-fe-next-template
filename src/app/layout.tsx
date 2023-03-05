require("@solana/wallet-adapter-react-ui/styles.css");
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import SolanaProvider from "@/components/SolanaProvider";
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
      <body className={inter.className}>
        <SolanaProvider>
          <NavBar />
          <main className="py-3">{children}</main>
        </SolanaProvider>
      </body>
    </html>
  );
}
