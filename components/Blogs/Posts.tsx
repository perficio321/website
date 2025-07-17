"use client";

import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  links?: string[];
  isEditable?: boolean; // moved from auth() check
}

export default function Post({
  id,
  thumbnail,
  title,
  links,
  isEditable = false, // default to false
}: PostProps) {


  return (
  <div className="bg-orange-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] w-full max-w-sm flex flex-col overflow-hidden">
  {/* Thumbnail (Adjustable height) */}
  <div className="relative w-full h-[420px]">
    <Image
      src={thumbnail || "/thumbnail-placeholder.png"}
      alt={title || "title"}
      fill
      className="object-contain rounded-t-xl"
    />
    <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-800 border border-gray-200">
      PERFICIO
    </div>
  </div>

  {/* Content Section */}
  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
    {/* Title & Meta */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] line-clamp-2">
        {title}
      </h3>
      {/* <p className="text-xs sm:text-sm text-gray-600 mb-2">
        {formattedDate} - <span className="font-semibold">{category || "General"}</span>
      </p> */}
    </div>

    {/* Description */}
    {/* <div className="text-gray-700 text-sm leading-relaxed text-justify line-clamp-5 mb-3">
      {content}
    </div> */}

    {/* Links (if any) */}
    {links?.length || 0 > 0 && (
      <div className="mt-2 space-y-2 overflow-auto max-h-24 pr-1">
        {links?.map((link, i) => (
          <div key={i} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <Link href={link} className="text-sm text-blue-600 hover:underline break-all">
              {link}
            </Link>
          </div>
        ))}
      </div>
    )}
  </div>
  {isEditable && (
  <div className="px-4 pb-4 pt-2 flex justify-between items-center border-t border-gray-200">
      <div className="flex items-center gap-3 text-sm font-semibold">
        <Link href={`/edit-post/${id}`} className="text-yellow-600 hover:underline">
          Edit
        </Link>
        <DeleteButton id={id} />
      </div>
  </div>
    )}
</div>

  );
}
