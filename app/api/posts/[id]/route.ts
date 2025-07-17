import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/posts/[id]
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "Post ID missing" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not fetch post" }, { status: 500 });
  }
}

// PUT /api/posts/[id]
export async function PUT(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Post ID missing" }, { status: 400 });
  }

  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await request.json();

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        links,
        catName: selectedCategory,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error editing post" }, { status: 500 });
  }
}

// DELETE /api/posts/[id]
export async function DELETE(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Post ID missing" }, { status: 400 });
  }

  try {
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting the post" }, { status: 500 });
  }
}
