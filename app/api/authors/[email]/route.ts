import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.pathname.split("/").pop(); // Extract the email from the URL

    if (!email) {
      return NextResponse.json({ message: "Email not provided" }, { status: 400 });
    }

    const userWithPosts = await prisma.user.findUnique({
      where: { email },
      include: {
        posts: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!userWithPosts) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userWithPosts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Could not fetch posts", error },
      { status: 500 }
    );
  }
}
