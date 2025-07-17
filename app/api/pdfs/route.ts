import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, pdfUrl, publicId, thumbnailUrl, thumbnailPublicId } = await req.json();

  if (!title || !pdfUrl || !thumbnailUrl) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const pdf = await prisma.pdf.create({
      data: {
        title,
        pdfUrl,
        publicId,
        thumbnailUrl,
        thumbnailPublicId,
        uploaderEmail: session.user.email,
      },
    });

    return NextResponse.json(pdf);
  } catch (error) {
    console.error("PDF Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload PDF." }, { status: 500 });
  }
}
// app/api/pdfs/route.ts


export async function GET() {
  try {
    const pdfs = await prisma.pdf.findMany({
    });
    return NextResponse.json(pdfs);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
