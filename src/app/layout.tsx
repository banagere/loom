import type { Metadata } from "next";
import "./globals.css";
import { Funnel_Display } from "next/font/google";

const font = Funnel_Display({
  subsets: ["latin"],
});

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
      <body className={`${font.className} antialiased`}>
        {/* <header className="flex gap-3 items-end max-w-6xl mx-auto py-2">
          <h1 className="font-medium text-2xl">loom</h1>
          <p>by banagere</p>
        </header> */}
        {children}
      </body>
    </html>
  );
}
