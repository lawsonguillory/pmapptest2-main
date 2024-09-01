import React from 'react';
import { useProjects } from '../contexts/ProjectContext';

export default function ProjectList() {
  const { projects } = useProjects();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project List</h2>
      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="p-4 border rounded">
              <h3 className="font-bold">{project.projectNumber}</h3>
              <p>Client: {project.clientName}</p>
              <p>Type: {project.projectType}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}