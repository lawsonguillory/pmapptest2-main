import React, { useState } from 'react';
import { useProjects } from '../contexts/ProjectContext';

interface ProjectData {
  projectNumber: string;
  clientName: string;
  projectType: string;
}

export default function ProjectForm() {
  const { addProject } = useProjects();
  const [projectData, setProjectData] = useState({
    projectNumber: '',
    clientName: '',
    projectType: '',
  });

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setProjectData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addProject(projectData);
    setProjectData({ projectNumber: '', clientName: '', projectType: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      {['projectNumber', 'clientName', 'projectType'].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block mb-1">
            {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            value={projectData[field as keyof ProjectData]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      ))}
      <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded">
        Add Project
      </button>
    </form>
  );
}