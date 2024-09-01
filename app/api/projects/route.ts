import { NextResponse } from 'next/server';

interface Project {
  id: string;
  projectNumber: string;
  clientName: string;
  projectType: string;
}

let projects: Project[] = [];

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const project: Omit<Project, 'id'> = await request.json();
  const newProject: Project = { ...project, id: Date.now().toString() };
  projects.push(newProject);
  return NextResponse.json(newProject, { status: 201 });
}