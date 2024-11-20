import { type SchemaTypeDefinition } from "sanity";
import caseStudyType from "./caseStudyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudyType]
};
