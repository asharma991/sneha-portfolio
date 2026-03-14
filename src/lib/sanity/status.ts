import { derived, writable } from 'svelte/store'
import { hasSanityConfig } from './client'

type Source = 'idle' | 'sanity' | 'fallback'
type Resource = 'workItems' | 'experienceItems' | 'bitsItems' | 'socials'

const initialSources: Record<Resource, Source> = {
  workItems: 'idle',
  experienceItems: 'idle',
  bitsItems: 'idle',
  socials: 'idle',
}

export const sanitySources = writable(initialSources)

export function setSanitySource(resource: Resource, source: Source) {
  sanitySources.update((state) => ({ ...state, [resource]: source }))
}

export const sanityIndicator = derived(sanitySources, ($sources) => {
  const values = Object.values($sources).filter((item) => item !== 'idle')

  if (!hasSanityConfig) {
    return {
      tone: 'fallback',
      label: 'Fallback data (Sanity not configured)',
    }
  }

  if (!values.length) {
    return {
      tone: 'unknown',
      label: 'Checking Sanity connection…',
    }
  }

  if (values.every((item) => item === 'sanity')) {
    return {
      tone: 'connected',
      label: 'Sanity connected',
    }
  }

  if (values.every((item) => item === 'fallback')) {
    return {
      tone: 'fallback',
      label: 'Fallback data (Sanity fetch failed)',
    }
  }

  return {
    tone: 'mixed',
    label: 'Partial fallback (mixed sources)',
  }
})
