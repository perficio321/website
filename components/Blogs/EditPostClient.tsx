"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EditPostForm from "./EditPostForm";
import { TPost } from "@/types";

const EditPostClient = () => {
  const pathname = usePathname(); // e.g. /blogs/123/edit
  const id = pathname.split("/")[2]; // extract post id from the URL

  const [post, setPost] = useState<TPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!id) return <div>No ID found in URL</div>;

  return <>{post ? <EditPostForm post={post} /> : <div>Loading...</div>}</>;
};

export default EditPostClient;
