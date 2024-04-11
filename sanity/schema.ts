import { type SchemaTypeDefinition } from 'sanity';
import project from './schemas/project-schemas';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
