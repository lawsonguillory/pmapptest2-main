import React from 'react';

interface Project {
  id: string;
  projectNumber: string;
  clientName: string;
  projectType: string;
}

// This is a mock data array. In a real application, you would fetch this data from an API or database.
const mockProjects: Project[] = [
  { id: '1', projectNumber: 'P001', clientName: 'Acme Corp', projectType: 'Web Development' },
  { id: '2', projectNumber: 'P002', clientName: 'TechStart', projectType: 'Mobile App' },
  { id: '3', projectNumber: 'P003', clientName: 'InnovateCo', projectType: 'Consulting' },
];

export default function ProjectList() {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Project List</h2>
      <ul>
        {mockProjects.map((project) => (
          <li key={project.id} className="mb-4 p-3 border rounded hover:bg-gray-100">
            <h3 className="font-bold">{project.projectNumber}</h3>
            <p>Client: {project.clientName}</p>
            <p>Type: {project.projectType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}