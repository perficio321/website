import { Metadata } from "next";
import PostClient from "./PostClient";
import { notFound } from "next/navigation";

async function getPost(id: string) {
  const baseUrl = process.env.NEXTAUTH_URL || "https://www.perficios.com";
  const res = await fetch(`${baseUrl}/api/posts/${id}`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: "Post Not Found | Perficio",
    };
  }

  return {
    title: `${post.title} | Perficio Blog`,
    description: post.content?.substring(0, 160) || "Read more about financial advisory and wealth management on Perficio's blog.",
    alternates: {
      canonical: `https://www.perficios.com/posts/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.content?.substring(0, 160),
      images: post.imageUrl ? [post.imageUrl] : [],
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.imageUrl ? [post.imageUrl] : [],
    "datePublished": post.createdAt,
    "author": [{
      "@type": "Organization",
      "name": "Perficio",
      "url": "https://www.perficios.com"
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostClient post={post} />
    </>
  );
}
