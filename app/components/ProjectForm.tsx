import React, { useState } from 'react';

interface ProjectData {
  projectNumber: string;
  clientName: string;
  projectType: string;
}

export default function ProjectForm() {
  const [projectData, setProjectData] = useState<ProjectData>({
    projectNumber: '',
    clientName: '',
    projectType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or state management solution
    console.log('Project data submitted:', projectData);
    // Reset form after submission
    setProjectData({ projectNumber: '', clientName: '', projectType: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <div className="mb-4">
        <label htmlFor="projectNumber" className="block mb-2">Project Number</label>
        <input
          type="text"
          id="projectNumber"
          name="projectNumber"
          value={projectData.projectNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="clientName" className="block mb-2">Client Name</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={projectData.clientName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="projectType" className="block mb-2">Project Type</label>
        <input
          type="text"
          id="projectType"
          name="projectType"
          value={projectData.projectType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Project
      </button>
    </form>
  );
}