"use client"


import { SanityPost } from "@/config/post-inventory"


interface Props {
  post: SanityPost
}

export function BlogPostInfo({post}: Props) {

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{post.name}</h1>
      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{post.description}</div>
      </div>
    </div>
  )
}
