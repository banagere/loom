import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "loom / banagere",
  description: "finance + math + code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header className="flex gap-3 items-end py-3 justify-center bg-black text-white">
          {/* <Image src={logo} alt="logo" width={30} /> */}
          <Link href={"/"} className="font-bold text-2xl">
            loom
          </Link>
          <Link
            href={"https://banagere.com"}
            className="underline hover:opacity-70 duration-500"
            target="_blank"
          >
            by banagere
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
