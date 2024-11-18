import { defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Study",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title"
      }
    },

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

    // Hero section
    {
      name: "heroSection",
      type: "object",
      title: "Hero Section",
      fields: [
        {
          name: "heroTitle",
          type: "string",
          title: "Hero Title (if omitted, the main title value will be used)"
        },
        {
          name: "heroDescription",
          type: "text",
          title: "Hero Description (if omitted, the main description will be used)"
        }
      ]
    },

    // Other sections
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {
          type: "object",
          fields: [
            { name: "sectionTitle", type: "string", title: "Section Title" },
            { name: "sectionDescription", type: "text", title: "Section Text" },
            {
              name: "cta",
              type: "object",
              title: "Call to Action",
              fields: [
                { name: "ctaText", type: "string", title: "CTA Text" },
                { name: "ctaLink", type: "url", title: "CTA Link" } // @TODO: figure out a way to accept internal links (relative ones?)
              ]
            }
          ]
        }
      ]
    }
  ]
});
