import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/side-menu";
import { Analytics } from "@vercel/analytics/react";

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
      <body className="antialiased">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 px-5 shadow-xl">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
