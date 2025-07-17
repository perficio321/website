"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeletePdfButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this PDF?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/pdfs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("PDF deleted successfully");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data?.error || "Failed to delete PDF");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 font-semibold hover:underline">
      Delete
    </button>
  );
}
