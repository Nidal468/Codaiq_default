import connectMongo from '@/db/mongoose';
import Project from '@/models/project';
import { NextRequest, NextResponse } from 'next/server';

// Connect to MongoDB
connectMongo();

export async function GET(req: NextRequest) {
  try {
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const project = await Project.findByIdAndUpdate(body._id, body, { new: true });
    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    await Project.findByIdAndDelete(body._id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}