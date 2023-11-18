"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { SanityPost } from "@/config/post-inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  post: SanityPost
}

export function BlogPostInfo({post}: Props) {
 const [selectedSize, setSelectedSize] = useState(post.sizes[0])
 const {addItem, incrementItem, cartDetails} = useShoppingCart()
 const {toast} = useToast()
 const isInCart = !!cartDetails?.[post._id]

  function addToCart() {
    const item= {
     ...post, 
     product_data: {
      size: selectedSize
    }
   }
   isInCart ? incrementItem(item._id) : addItem(item)
   toast({
    title: `${item.name} (${getSizeName(selectedSize)})`,
    description: "Product added to cart",
    action: (
      <Link href='/cart'>
        <Button variant='link' className="gap-x-2 whitespace-nowrap">
          <span>Open Cart</span>
          <ArrowRight className="h-5 w-5"/>

        </Button>
      </Link>
    )
   })
  }

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
