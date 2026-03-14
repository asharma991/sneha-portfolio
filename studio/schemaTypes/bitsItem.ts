import { defineField, defineType } from 'sanity'

export const bitsItem = defineType({
  name: 'bitsItem',
  title: 'Bits Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Image', 'Music'] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'itemUrl', title: 'Item URL', type: 'url', validation: (rule) => rule.required() }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
  ],
})
