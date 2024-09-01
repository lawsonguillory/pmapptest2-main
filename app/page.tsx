import React from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-indigo-700 dark:text-indigo-300 animate-fade-in">
            AutoPM
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-delay">
            Your AI-powered Project Management Assistant
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-in-left">
            <ProjectForm />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-in-right">
            <ProjectList />
          </div>
        </div>

        <footer className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AutoPM. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}