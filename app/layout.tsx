"use client";

import "./globals.css";
import type { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="forest">
      <body className="min-h-screen min-w-full flex flex-col">
        <Header />
        <main className="flex min-w-full flex-1 bg-[url('/wood-background.jpg')] bg-center bg-cover">
          <div className="w-full py-8 bg-black/50">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
