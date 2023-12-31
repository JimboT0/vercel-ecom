import { Image } from "sanity"

interface InventoryPost {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
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
    price: 16800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["brown"],
    currency: "USD",
  },
]
