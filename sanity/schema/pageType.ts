import { definePathname } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";
import { SECTIONS } from "./sections";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    //   @TODO: use this for the meta title
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required()
    },
    definePathname({
      name: "pathname",
      options: {
        source: "title"
      }
    }),

    // @TODO: add meta descriptions and meta images (OpenGraph, Twitter...)

    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: SECTIONS.map((SECTION) => ({ type: SECTION.name }))
    })
  ]
});
