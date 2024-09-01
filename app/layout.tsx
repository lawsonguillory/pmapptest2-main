import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoPM - Project Management Assistant",
  description: "AI-powered project management tool for modern teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Note: The 'ai' package has been installed via npm.
// If you need to use it in this file, you can import it at the top of the file.
// For example: import { useChat } from 'ai/react';