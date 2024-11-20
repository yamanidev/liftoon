import { defineField } from "sanity";

export default defineField({
  name: "caseStudySection",
  type: "object",
  title: "Case Study section",
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
      title: "Description"
    }),
    defineField({
      name: "cta",
      type: "object",
      title: "CTA (Call To Action)",
      fields: [
        { name: "ctaText", type: "string", title: "CTA text" },
        { name: "ctaLink", type: "url", title: "CTA link" }
      ]
    }),
    defineField({
      name: "showCta",
      type: "boolean",
      initialValue: false
    })
  ]
});
