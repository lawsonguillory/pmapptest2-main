import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ProjectProvider } from './contexts/ProjectContext';

export const metadata: Metadata = {
  title: "AutoPM - Project Management Assistant",
  description: "AI-powered project management tool for modern teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}