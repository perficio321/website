import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
      console.log(request)
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
} catch (error) {
  console.error("Error fetching categories:", error);
  return NextResponse.error();
 }
}
