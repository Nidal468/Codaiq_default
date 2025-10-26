import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/db/mongoose";
import Template from "@/models/Template";

connectMongo();

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const templates = await Template.find(query);
    
    return NextResponse.json({
      success: true,
      templates
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Server error'
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const { name, description, category, previewUrl, thumbnailUrl } = body;
    
    const newTemplate = new Template({
      name,
      description,
      category,
      previewUrl,
      thumbnailUrl
    });
    
    await newTemplate.save();
    
    return NextResponse.json({
      success: true,
      template: newTemplate
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Server error'
    }, { status: 500 });
  }
}