import { defineType } from "sanity";

export default defineType({
  name: "caseStudySection",
  type: "document",
  title: "Case Study Sections",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title"
    },
    {
      name: "description",
      type: "text",
      title: "Section Description"
    },
    {
      name: "cta",
      type: "url",
      title: "Call to Action (optional)"
    }
  ]
});
