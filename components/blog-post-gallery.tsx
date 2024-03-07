"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { SanityPost} from "@/config/post-inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  post: SanityPost
}

export function BlogPostGallery({post}: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div className="flex flex-col-reverse">
     

      {/* Main Image */}
      <div className="aspect-h-1 aspect-w-1 w-full">
        <Image
          priority
          src={urlForImage(post.images[selectedImage]).url()}
          alt={`Main ${post.name} Image`}
          width={600}
          height={750}
          className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(600, 750)
          )}`}
        />
      </div>
    </div>
  )
}
