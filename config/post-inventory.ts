import { Image } from "sanity"

interface InventoryPost {
  id: string
  name: string
  image: string
  categories: string[]
  currency: string
  description: string
  description2: string
  description3: string
  sku: string
}

export interface SanityPost extends Omit<InventoryPost, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryPost[] = [
  {
    id: "abcdefghi-lemania5012",
    sku: "canvas_tote_bag_1",
    name: "Canvas Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    description2: `your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    description3: `new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    categories: ["bags"],
    currency: "USD",
  },
]
