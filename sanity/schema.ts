import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { post } from "./schemas/blog-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post], 
}
