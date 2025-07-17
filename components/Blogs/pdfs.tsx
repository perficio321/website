"use client";

import { HiOutlineDocumentText } from "react-icons/hi";
import Image from "next/image";
import DeletePdfButton from "./DeletePdfButton"; // Default thumbnail image

interface PdfCardProps {
  id: string;
  title: string;
  description?: string;
  pdfUrl: string;
  publicId: string;
  uploadedAt: string;
  uploaderEmail: string;
  thumbnailUrl?: string;
  isEditable: boolean;
}

export default function PdfCard({
  id,
  title,
  pdfUrl,
  publicId,
  uploadedAt,
  thumbnailUrl,
  isEditable,
}: PdfCardProps) {
  const formattedDate = new Date(uploadedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
 // Use the imported default thumbnail image
  const previewImage = thumbnailUrl;

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition transform hover:-translate-y-1">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Thumbnail */}
        <div className="relative w-full h-44">
          <Image
            src={previewImage || "/assets/pdf.png"} // Fallback to default thumbnail if none provided
            alt={`Thumbnail for ${title}`}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Info Strip */}
        <div className="bg-gray-900 text-white px-4 py-3 flex items-center gap-3">
          <HiOutlineDocumentText className="text-red-500 text-2xl flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="truncate font-medium text-sm">{title}</p>
            {/* <p className="text-xs text-gray-300">{formattedDate}</p> */}
          </div>
        </div>
      </a>

      {/* Editable Actions */}
      {isEditable && (
        <div className="px-4 py-3 flex justify-between items-center text-sm text-gray-600">
       <DeletePdfButton id={id} />
        </div>
      )}
    </div>
  );
}
