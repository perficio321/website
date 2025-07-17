// app/blogs/[id]/edit/page.tsx

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EditPostClient from "@/components/Blogs/EditPostClient";

export default async function EditPostPage() {
  const session = await auth();

  if (!session || session?.user?.role !== "ADMIN") {
    redirect("/sign-in");
  }

  return <EditPostClient />;
}
