import { type SchemaTypeDefinition } from "sanity";
import caseStudyHero from "./caseStudyHeroType";
import caseStudySection from "./caseStudySectionType";
import caseStudy from "./caseStudyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, caseStudySection, caseStudyHero]
};
