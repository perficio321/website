
import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();

  const authorEmail = session?.user?.email as string;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 500 }
    );
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        links,
        imageUrl,
        publicId,
        catName: selectedCategory,
        authorEmail,
      },
    });

    console.log("Post created");
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ message: "Could not create post.",error });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true } } },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

