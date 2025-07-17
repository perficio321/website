import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// Helper to extract ID from the dynamic route
function extractIdFromUrl(request: NextRequest): string | null {
  const segments = request.nextUrl.pathname.split("/");
  return segments[segments.length - 1] || null;
}

// DELETE /api/users/[id]
export async function DELETE(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const id = extractIdFromUrl(request);

  if (!id) {
    return NextResponse.json({ error: "User ID missing" }, { status: 400 });
  }

  try {
    const user = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted", user }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "User deletion failed" }, { status: 500 });
  }
}

// PATCH /api/users/[id]
export async function PATCH(request: NextRequest) {
  const session = await auth();

  if (!session || session.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const id = extractIdFromUrl(request);

  if (!id) {
    return NextResponse.json({ error: "User ID missing" }, { status: 400 });
  }

  try {
    const { role } = await request.json();

    if (!["ADMIN", "USER"].includes(role)) {
      return NextResponse.json({ error: "Invalid role value" }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id },
      data: { role },
    });

    return NextResponse.json({ message: "User role updated", updated }, { status: 200 });
  } catch (error) {
    console.error("Update failed:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
