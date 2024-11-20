import { type SchemaTypeDefinition } from "sanity";
import pageType from "./pageType";
import { SECTIONS } from "./sections";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, ...SECTIONS]
};
