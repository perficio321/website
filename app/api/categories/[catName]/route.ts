import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the catName from the URL path
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split("/");
    const catName = decodeURIComponent(segments[segments.length - 1]);

    if (!catName) {
      return NextResponse.json({ message: "Category name missing" }, { status: 400 });
    }

    const category = await prisma.category.findUnique({
      where: { catName },
      include: {
        posts: {
          include: { author: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!category) {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return NextResponse.json({ message: "Could not fetch posts" }, { status: 500 });
  }
}
