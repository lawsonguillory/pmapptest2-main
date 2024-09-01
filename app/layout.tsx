import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from './contexts/ProjectContext';

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
        <ProjectProvider children={undefined}>{children}</ProjectProvider>
      </body>
    </html>
  );
}