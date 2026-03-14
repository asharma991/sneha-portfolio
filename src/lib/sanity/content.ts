import groq from 'groq'
import { bitsItems, experienceItems, socials, workItems } from '../content'
import { sanityClient } from './client'
import { setSanitySource } from './status'

type WorkItem = (typeof workItems)[number]
type ExperienceItem = (typeof experienceItems)[number]
type BitsItem = (typeof bitsItems)[number]
type SocialItem = (typeof socials)[number]

const workItemsQuery = groq`*[_type == "workItem"] | order(coalesce(publishedAt, _createdAt) desc) {
  title,
  "type": upper(assetType),
  "cover": coverImage.asset->url,
  "href": assetUrl
}`

const experienceItemsQuery = groq`*[_type == "experienceItem"] | order(coalesce(sortOrder, 999) asc, _createdAt asc) {
  years,
  role,
  company,
  highlights,
  detailedDescription
}`

const bitsItemsQuery = groq`*[_type == "bitsItem"] | order(_createdAt desc) {
  title,
  "type": upper(type),
  "cover": coverImage.asset->url,
  "href": itemUrl
}`

const socialsQuery = groq`*[_type == "siteSettings"][0]{
  socials[]{
    label,
    href
  }
}.socials`

const aboutSectionQuery = groq`*[_type == "aboutSection"][0]{
  heading,
  intro,
  tags,
  "profileImageUrl": profileImage.asset->url
}`

const homeSectionsQuery = groq`*[_type == "homeSections"][0]{
  experiencesHeading,
  experiencesIntro,
  experiencesCta,
  experiencesPageIntro,
  makingSenseHeading,
  makingSenseIntro,
  makingSenseCta,
  makingSensePageIntro,
  bitsHeading,
  bitsIntro,
  bitsCta,
  bitsPageIntro
}`

export async function getWorkItems() {
  if (!sanityClient) {
    setSanitySource('workItems', 'fallback')
    return workItems
  }
  try {
    const items = await sanityClient.fetch<WorkItem[]>(workItemsQuery)
    if (items?.length) {
      setSanitySource('workItems', 'sanity')
      return items
    }
    setSanitySource('workItems', 'fallback')
    return workItems
  } catch {
    setSanitySource('workItems', 'fallback')
    return workItems
  }
}

export async function getExperienceItems() {
  if (!sanityClient) {
    setSanitySource('experienceItems', 'fallback')
    return experienceItems
  }
  try {
    const items = await sanityClient.fetch<ExperienceItem[]>(experienceItemsQuery)
    if (items?.length) {
      setSanitySource('experienceItems', 'sanity')
      return items
    }
    setSanitySource('experienceItems', 'fallback')
    return experienceItems
  } catch {
    setSanitySource('experienceItems', 'fallback')
    return experienceItems
  }
}

export async function getBitsItems() {
  if (!sanityClient) {
    setSanitySource('bitsItems', 'fallback')
    return bitsItems
  }
  try {
    const items = await sanityClient.fetch<BitsItem[]>(bitsItemsQuery)
    if (items?.length) {
      setSanitySource('bitsItems', 'sanity')
      return items
    }
    setSanitySource('bitsItems', 'fallback')
    return bitsItems
  } catch {
    setSanitySource('bitsItems', 'fallback')
    return bitsItems
  }
}

export async function getSocialItems() {
  if (!sanityClient) {
    setSanitySource('socials', 'fallback')
    return socials
  }
  try {
    const items = await sanityClient.fetch<SocialItem[]>(socialsQuery)
    if (items?.length) {
      setSanitySource('socials', 'sanity')
      return items
    }
    setSanitySource('socials', 'fallback')
    return socials
  } catch {
    setSanitySource('socials', 'fallback')
    return socials
  }
}

export type AboutSectionContent = {
  heading: string
  intro: string
  tags: string[]
  profileImageUrl: string
}

export type HomeSectionsContent = {
  experiencesHeading: string
  experiencesIntro: string
  experiencesCta: string
  experiencesPageIntro: string
  makingSenseHeading: string
  makingSenseIntro: string
  makingSenseCta: string
  makingSensePageIntro: string
  bitsHeading: string
  bitsIntro: string
  bitsCta: string
  bitsPageIntro: string
}

export async function getAboutSection(fallback: AboutSectionContent) {
  if (!sanityClient) return fallback
  try {
    const item = await sanityClient.fetch<Partial<AboutSectionContent> | null>(aboutSectionQuery)
    if (!item?.heading || !item?.intro || !item?.profileImageUrl) return fallback
    return {
      heading: item.heading,
      intro: item.intro,
      tags: item.tags?.length ? item.tags : fallback.tags,
      profileImageUrl: item.profileImageUrl,
    }
  } catch {
    return fallback
  }
}

export async function getHomeSections(fallback: HomeSectionsContent) {
  if (!sanityClient) return fallback
  try {
    const item = await sanityClient.fetch<Partial<HomeSectionsContent> | null>(homeSectionsQuery)
    if (!item) return fallback
    return {
      experiencesHeading: item.experiencesHeading || fallback.experiencesHeading,
      experiencesIntro: item.experiencesIntro || fallback.experiencesIntro,
      experiencesCta: item.experiencesCta || fallback.experiencesCta,
      experiencesPageIntro: item.experiencesPageIntro || fallback.experiencesPageIntro,
      makingSenseHeading: item.makingSenseHeading || fallback.makingSenseHeading,
      makingSenseIntro: item.makingSenseIntro || fallback.makingSenseIntro,
      makingSenseCta: item.makingSenseCta || fallback.makingSenseCta,
      makingSensePageIntro: item.makingSensePageIntro || fallback.makingSensePageIntro,
      bitsHeading: item.bitsHeading || fallback.bitsHeading,
      bitsIntro: item.bitsIntro || fallback.bitsIntro,
      bitsCta: item.bitsCta || fallback.bitsCta,
      bitsPageIntro: item.bitsPageIntro || fallback.bitsPageIntro,
    }
  } catch {
    return fallback
  }
}
