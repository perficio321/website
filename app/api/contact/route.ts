import { prisma } from "@/db";
import { NextResponse } from "next/server";


// Simple spam check: content inspection + rate-limiting (basic)
const isSpammy = (text: string) => {
  const lower = text.toLowerCase();
  const spamKeywords = ["http", "https", "buy now", "free", "offer", "click here", "money", "seo", "porn", "sex"];
  return spamKeywords.some((keyword) => lower.includes(keyword));
};

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Field validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Spam keyword check
    if (
      isSpammy(name) ||
      isSpammy(email) ||
      isSpammy(subject) ||
      isSpammy(message)
    ) {
      return NextResponse.json(
        { error: "Your message was flagged as spam." },
        { status: 403 }
      );
    }

    // Basic rate limiting by IP (you can expand this with Redis or DB later)
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("host") || "unknown";
    console.log("IP Address:", ip);
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    const recentMessages = await prisma.contact.findMany({
      where: {
        email,
        createdAt: { gte: fiveMinutesAgo },
      },
    });

    if (recentMessages.length >= 3) {
      return NextResponse.json(
        { error: "Too many messages in a short period. Please try later." },
        { status: 429 }
      );
    }

    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { error: "Failed to create contact message." },
      { status: 500 }
    );
  }
}


// GET - Admin access to view messages
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages." },
      { status: 500 }
    );
  }
}



export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const deleteAll = searchParams.get("all");

  try {
    if (deleteAll === "true") {
      await prisma.contact.deleteMany();
      return NextResponse.json({ message: "All messages deleted." }, { status: 200 });
    }

    if (id) {
      await prisma.contact.delete({
        where: { id },
      });
      return NextResponse.json({ message: `Message with ID ${id} deleted.` }, { status: 200 });
    }

    return NextResponse.json({ error: "Provide either `id` or `all=true` in query." }, { status: 400 });
  } catch (error) {
    console.error("Error deleting contact message(s):", error);
    return NextResponse.json({ error: "Failed to delete message(s)." }, { status: 500 });
  }
}


 
