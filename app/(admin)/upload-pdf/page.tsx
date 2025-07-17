"use client";

import { useState } from "react";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreatePdfForm() {
  const [title, setTitle] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfPublicId, setPdfPublicId] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailPublicId, setThumbnailPublicId] = useState("");
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle PDF Upload
  const handlePdfUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info as { secure_url?: string; public_id?: string };
    if (info.secure_url && info.public_id) {
      setPdfUrl(info.secure_url);
      setPdfPublicId(info.public_id);
      toast.success("PDF uploaded ✅");
    }
  };

  // Handle Image Upload
  const handleThumbnailUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info as { secure_url?: string; public_id?: string };
    if (info.secure_url && info.public_id) {
      setThumbnailUrl(info.secure_url);
      setThumbnailPublicId(info.public_id);
      toast.success("Thumbnail uploaded ✅");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !pdfUrl || !thumbnailUrl) {
      toast.error("Title, PDF, and Thumbnail are required.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/pdfs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        pdfUrl,
        publicId: pdfPublicId,
        thumbnailUrl,
        thumbnailPublicId,
      }),
    });

    if (res.ok) {
      toast.success("PDF uploaded successfully!");
      setTitle("");
      setPdfUrl("");
      setPdfPublicId("");
      setThumbnailUrl("");
      setThumbnailPublicId("");
      router.push("/"); // redirect if needed
    } else {
      toast.error("Failed to upload PDF");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Upload PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* PDF Upload */}
        <CldUploadButton
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_FILE_PRESET}
          options={{ resourceType: "raw" }}
          onSuccess={handlePdfUpload}
          className="w-full border-dashed border-2 rounded p-4 text-center cursor-pointer"
        >
          {pdfUrl ? (
            <p className="text-green-600 font-medium">PDF Uploaded ✅</p>
          ) : (
            "Click here to upload a PDF"
          )}
        </CldUploadButton>

        {/* Thumbnail Upload */}
        <div className="mt-4">
          <p className="font-semibold mb-2">Upload Thumbnail (Image)</p>
          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            className="h-40 w-full border-2 border-dashed rounded-md bg-gray-100 grid place-items-center relative"
            onSuccess={handleThumbnailUpload}
          >
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt="Thumbnail"
                fill
                className="object-cover rounded-md"
              />
            ) : (
              "Click to upload thumbnail image"
            )}
          </CldUploadButton>
        </div>

        {/* PDF Preview Link */}
        {pdfUrl && (
          <div className="text-blue-600 underline">
            <Link href={pdfUrl} target="_blank">
              View Uploaded PDF
            </Link>
          </div>
        )}
        <div className="w-full">
          {/* Submit Button */}
          <button
            className="bg-green-600 text-white py-3 px-4 rounded-md text-base font-semibold hover:bg-green-700 transition-all duration-200 "
            type="submit"
            disabled={Loading}
          >
            {Loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Submitting...
              </div>
            ) : (
              "Upload PDF"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
