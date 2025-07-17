import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/pdfs/[id]
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "ID not provided" }, { status: 400 });
    }

    const pdf = await prisma.pdf.findUnique({ where: { id } });

    if (!pdf) {
      return NextResponse.json({ message: "PDF not found" }, { status: 404 });
    }

    return NextResponse.json(pdf, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ message: "Error fetching PDF" }, { status: 500 });
  }
}

// DELETE /api/pdfs/[id]
export async function DELETE(request: NextRequest) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }

    const existingPdf = await prisma.pdf.findUnique({
      where: { id },
    });

    if (!existingPdf) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    // Optional: only allow the uploader to delete the PDF
    // if (existingPdf.uploaderEmail !== session.user.email) {
    //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    // }

    await prisma.pdf.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Error deleting PDF" }, { status: 500 });
  }
}
