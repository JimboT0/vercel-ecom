import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { post } from "./schemas/post-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post], 
}
