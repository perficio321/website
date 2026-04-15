import AllBlogs from '@/components/Blogs/AllBlogs';
import { TPost } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Financial Insights & Blog | Perficio",
  description: "Stay updated with the latest in taxation, wealth management, and real estate advisory in India through our expert-led blog posts.",
  alternates: {
    canonical: "https://www.perficios.com/all-blogs",
  },
};

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