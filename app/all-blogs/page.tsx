import AllBlogs from '@/components/Blogs/AllBlogs';
import { TPost } from '@/types';
import React from 'react'

const page = async() => {
   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  let allPosts: TPost[] = [];

  if (res.ok) {
    allPosts = await res.json();
  }
  return <AllBlogs allPosts={allPosts} />
}

export default page