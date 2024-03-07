"use client"


import { SanityPost } from "@/config/post-inventory"


interface Props {
  post: SanityPost
}

export function BlogPostHeading({post}: Props) {

  return (
    <div className="mb-10 px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">{post.name}</h1>
    </div>
  )
}