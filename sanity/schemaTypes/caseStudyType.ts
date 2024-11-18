import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Studies",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required()
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title"
      }
    }),
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required()
    },
    {
      name: "thumbnail",
      type: "image", // @TODO: figure out how to allow videos as well
      title: "Image/Video",
      validation: (Rule) => Rule.required()
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "reference", to: [{ type: "caseStudySection" }] }]
    }
  ]
});
