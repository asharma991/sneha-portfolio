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
