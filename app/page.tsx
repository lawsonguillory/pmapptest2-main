import React from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">AutoPM</h1>
        <p className="text-xl">Your AI-powered Project Management Assistant</p>
      </header>

      <div className="w-full max-w-4xl space-y-8">
        <ProjectForm />
        <ProjectList />
      </div>

      <footer className="w-full text-center mt-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AutoPM. All rights reserved.
        </p>
      </footer>
    </main>
  );
}