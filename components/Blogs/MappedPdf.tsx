"use client";

import { TPdf } from "@/types";
import { useEffect, useState } from "react";

export default function MappedPdf() {
  const [pdfs, setPdfs] = useState<TPdf[] | null>(null);

  const getPdfs = async (): Promise<TPdf[] | null> => {
    try {
      const res = await fetch("/api/pdfs");
      if (res.ok) return res.json();
    } catch (error) {
      console.error("Failed to fetch PDFs:", error);
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPdfs();
      setPdfs(data);
    };
    fetchData();
  }, []);

  if (!pdfs) return <p>Loading...</p>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pdfs?.slice(0, 3)?.map((pdf) => (
          <div key={pdf.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{pdf.title}</h3>
            <p className="text-sm text-gray-500">
              {new Date(pdf?.uploadedAt || "").toLocaleDateString()}
            </p>
            <a
              href={pdf.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block mt-2"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-4">
        <a
          href="/all-pdfs"
          className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-montserrat font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 text-base"
        >
          View All PDFS
        </a>
      </div>
    </>
  );
}
