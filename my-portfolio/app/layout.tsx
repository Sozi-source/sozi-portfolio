import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Wilfred Osozi Portfolio</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header className="fixed top-0 w-full z-50"/>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
