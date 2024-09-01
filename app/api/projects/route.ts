import { NextResponse } from 'next/server';

// This is a mock implementation. Replace with actual database operations.
let projects = [];

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const project = await request.json();
  project.id = Date.now().toString(); // Simple ID generation
  projects.push(project);
  return NextResponse.json(project, { status: 201 });
}