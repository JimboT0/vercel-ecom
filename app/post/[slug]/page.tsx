import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityPost } from "@/config/post-inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { BlogPostInfo, BlogPostInfo2, BlogPostInfo3 } from "@/components/blog-post-info"
import { BlogPostGallery } from "@/components/blog-post-gallery"
import { BlogPostHeading } from "@/components/blog-post-heading"

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const post = await client.fetch<SanityPost>(groq`*[_type == "post" && slug.current == "${params.slug}"][0] {
    _id,
    _createdAt,
    "id": _id,
    name,
    sku,
    images,
    price,
    currency,
    description,
    description2,
    description3,
    sizes,
    categories,
    colors,
    "slug": slug.current
    

  }`
  )
  console.log(post)

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8 pb-10">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="p-10">
          <BlogPostHeading post={post} />
        </div>
        {/* Blog Post */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Blog Post Gallery */}
          <BlogPostGallery post={post} />
          {/* Blog Post Info */}
          <BlogPostInfo post={post} />
        </div>


        <div className="">
          <BlogPostInfo2 post={post} />

        </div>




        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pt-5">
          {/* Blog Post Gallery */}
          <div className="order-1 md:order-2">
            <BlogPostGallery post={post} />
          </div>

          {/* Blog Post Info */}
          <div className="order-2 md:order-1">
            <BlogPostInfo3 post={post} />
          </div>


        </div>
      </div>
    </main>
  )
}
