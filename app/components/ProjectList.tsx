import React from 'react';
import { useProjects } from '../contexts/ProjectContext';

export default function ProjectList() {
  const { projects } = useProjects();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">Project List</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No projects added yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-300">{project.projectNumber}</h3>
              <p className="text-gray-600 dark:text-gray-300">Client: {project.clientName}</p>
              <p className="text-gray-600 dark:text-gray-300">Type: {project.projectType}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}