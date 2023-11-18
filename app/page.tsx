import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import Hero from "@/components/hero"
// import { seedSanityData } from "@/lib/seed"



export default async function Page() {



  return (
    <div>
      <Hero />


    </div>
  )
}
