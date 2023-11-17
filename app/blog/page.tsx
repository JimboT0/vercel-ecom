import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { BlogGrid } from "@/components/blog-grid"
import { ProductSort } from "@/components/product-sort"
// import { seedSanityData } from "@/lib/seed"

interface Props {
}

export default async function Page({ searchParams }: Props) {


  const products = await client.fetch<SanityProduct[]>(
    groq` *[_type == 'product'] {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
    }`)
  // await seedSanityData() this seeds data from seedSanityData

  return (
    <div>

      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid-cols-1">
              <BlogGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
