import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="items-left order-2 md:order-1">
      <Link href="/" className="flex space-x-2">
        <Icons.logo className="h-7 w-7" />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
