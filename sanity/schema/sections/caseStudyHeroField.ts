import { defineField } from "sanity";

export default defineField({
  name: "caseStudyHero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "project",
      type: "object",
      title: "Project",
      fields: [
        { name: "projectText", type: "string", title: "Project text" },
        { name: "projectLink", type: "url", title: "Project link" }
      ]
    })
  ]
});
