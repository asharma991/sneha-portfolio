import { defineField, defineType } from 'sanity'

export const workItem = defineType({
  name: 'workItem',
  title: 'Work Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      options: { list: ['PDF', 'Image'] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'assetUrl', title: 'Asset URL', type: 'url', validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  orderings: [
    {
      title: 'Published (newest)',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
