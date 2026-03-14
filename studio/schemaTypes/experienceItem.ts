import { defineField, defineType } from 'sanity'

export const experienceItem = defineType({
  name: 'experienceItem',
  title: 'Experience Item',
  type: 'document',
  fields: [
    defineField({ name: 'years', title: 'Years', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'text', rows: 3 }),
    defineField({ name: 'detailedDescription', title: 'Detailed Description', type: 'text', rows: 6 }),
    defineField({ name: 'sortOrder', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrder',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
