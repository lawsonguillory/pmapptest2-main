import React from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            AutoPM
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your AI-powered Project Management Assistant
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProjectForm />
          <ProjectList />
        </div>
      </div>
    </main>
  );
}