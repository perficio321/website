import { auth } from '@/auth';
import PdfCard from '@/components/Blogs/pdfs';
import { TPdf } from '@/types';
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/pdfs`, { cache: 'no-store' });
  const pdfs: TPdf[] = await res.json();
  const session = await auth();
  const isAdmin = session?.user?.role === 'ADMIN';
   const sortedPdfs = [...pdfs].sort((a, b) => 
    new Date(b.uploadedAt || "").getTime() - new Date(a.uploadedAt || "").getTime()
  );
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All PDFs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPdfs?.map((pdf) => (
           <PdfCard
            key={pdf.id}
            id={pdf.id}
            title={pdf.title}
            pdfUrl={pdf.pdfUrl}
            publicId={pdf.publicId}
            uploadedAt={pdf.uploadedAt || ""}
            uploaderEmail={pdf.uploaderEmail}
            thumbnailUrl={pdf.thumbnailUrl || ""}
            isEditable={isAdmin}
          />
        ))}
      </div>
    </div>
  )
}

export default page