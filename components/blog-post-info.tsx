"use client"


import { SanityPost } from "@/config/post-inventory"


interface Props {
  post: SanityPost
}

export function BlogPostInfo({post}: Props) {

  return (
    <div className="m-10 px-4 ">
      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{post.description}</div>
      </div>
    </div>
  )
}


export function BlogPostInfo2({post}: Props) {

  return (
    <div className="m-10 px-4 ">
      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{post.description2}</div>
      </div>
    </div>
  )
}

export function BlogPostInfo3({post}: Props) {

  return (
    <div className="m-10 px-4 ">
      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{post.description3}</div>
      </div>
    </div>
  )
}