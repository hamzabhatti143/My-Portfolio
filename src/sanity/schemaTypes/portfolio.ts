import { defineType } from "sanity"

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
          description: "Describe the image for accessibility and SEO."
        },
        {
          name: "width",
          title: "Width (optional)",
          type: "number"
        },
        {
          name: "height",
          title: "Height (optional)",
          type: "number"
        }
      ]
    },
    {
      name: "link",
      title: "Link",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "href",
          title: "URL",
          type: "url",
          validation: (rule) => rule.required(),
        },
        {
          name: "text",
          title: "Link Text",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "target",
          title: "Open In",
          type: "string",
          options: {
            list: [
              { title: "Same Tab (_self)", value: "_self" },
              { title: "New Tab (_blank)", value: "_blank" },
              { title: "Parent (_parent)", value: "_parent" },
              { title: "Top (_top)", value: "_top" }
            ],
            layout: "radio"
          }
        }
      ]
    }
  ]
})
