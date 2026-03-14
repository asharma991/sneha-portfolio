import { defineField, defineType } from 'sanity'

export const homeSections = defineType({
  name: 'homeSections',
  title: 'Home Sections',
  type: 'document',
  fields: [
    defineField({ name: 'experiencesHeading', title: 'Experiences Heading', type: 'string' }),
    defineField({ name: 'experiencesIntro', title: 'Experiences Intro', type: 'text', rows: 3 }),
    defineField({ name: 'experiencesCta', title: 'Experiences CTA Label', type: 'string' }),
    defineField({ name: 'experiencesPageIntro', title: 'Experiences Page Intro', type: 'text', rows: 3 }),
    defineField({ name: 'makingSenseHeading', title: 'Making Sense Heading', type: 'string' }),
    defineField({ name: 'makingSenseIntro', title: 'Making Sense Intro', type: 'text', rows: 3 }),
    defineField({ name: 'makingSenseCta', title: 'Making Sense CTA Label', type: 'string' }),
    defineField({ name: 'makingSensePageIntro', title: 'Making Sense Page Intro', type: 'text', rows: 3 }),
    defineField({ name: 'bitsHeading', title: 'Bits Heading', type: 'string' }),
    defineField({ name: 'bitsIntro', title: 'Bits Intro', type: 'text', rows: 3 }),
    defineField({ name: 'bitsCta', title: 'Bits CTA Label', type: 'string' }),
    defineField({ name: 'bitsPageIntro', title: 'Bits Page Intro', type: 'text', rows: 3 }),
  ],
})
