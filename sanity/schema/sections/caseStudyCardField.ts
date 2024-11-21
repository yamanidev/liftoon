import { defineField } from "sanity";

export default defineField({
  name: "caseStudyCard",
  type: "object",
  title: "Case Study card",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required()
    }),
    {
      name: "thumbnail",
      type: "image", // @TODO: figure out how to allow videos as well
      title: "Image/Video",
      validation: (Rule) => Rule.required()
    },
    {
      name: "pageLink",
      type: "reference",
      title: "Page link",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required()
    }
  ]
});
