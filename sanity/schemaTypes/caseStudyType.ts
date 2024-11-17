import { defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Studies",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "thumbnail",
      type: "image", // @TODO: figure out how to allow videos as well
      title: "Image/Video"
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "reference", to: [{ type: "caseStudySection" }] }]
    }
  ]
});
