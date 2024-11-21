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
    // @TODO: add custom validation to ensure that `projectText` and `projectLink` are either both filled or both omitted
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
