<script lang="ts">
  import { onMount } from 'svelte'
  import SiteFooter from '../lib/components/SiteFooter.svelte'
  import SiteHeader from '../lib/components/SiteHeader.svelte'
  import { experienceItems as fallbackExperienceItems } from '../lib/content'
  import { getExperienceItems, getHomeSections } from '../lib/sanity/content'

  let experienceItems = fallbackExperienceItems
  let sectionContent = {
    experiencesHeading: 'Experiences',
    experiencesIntro: 'A growing timeline of roles, places, and impact.',
    experiencesCta: 'Show More ↗',
    experiencesPageIntro: 'A complete timeline of roles, organizations, and outcomes.',
    makingSenseHeading: 'Making Sense',
    makingSenseIntro: 'Essays, research notes, and thought pieces. The full archive lives on a separate page.',
    makingSenseCta: 'Show More ↗',
    makingSensePageIntro: 'Full collection of essays and research pieces. Open any entry to view the linked PDF or image.',
    bitsHeading: 'Bits and Pieces',
    bitsIntro: 'Images, sounds, and references from Sneha’s everyday inspiration shelf.',
    bitsCta: 'Show More ↗',
    bitsPageIntro: 'A larger board of images and music picks that inspire the work.',
  }

  onMount(async () => {
    const [items, sections] = await Promise.all([getExperienceItems(), getHomeSections(sectionContent)])
    experienceItems = items
    sectionContent = sections
  })
</script>

<SiteHeader />

<div class="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-10">
  <section>
    <h1 class="font-display text-5xl text-ink sm:text-6xl">{sectionContent.experiencesHeading}</h1>
    <p class="mt-3 max-w-3xl text-lg text-ink/80">{sectionContent.experiencesPageIntro}</p>
    <ol class="relative mt-10 space-y-8 border-l-2 border-ink/50 pl-6">
      <span class="absolute -bottom-2 -left-[0.72rem] h-5 w-5 rounded-full border-2 border-ink bg-peach"></span>
      {#each [...experienceItems].reverse() as item}
        <li class="relative rounded-2xl border border-ink/55 bg-white/70 p-4">
          <span class="absolute -left-[2.1rem] top-7 h-3.5 w-3.5 rounded-full border border-ink bg-sunflower"></span>
          <p class="text-sm font-semibold uppercase tracking-wide text-ink/65">{item.years}</p>
          <h2 class="mt-1 font-display text-3xl text-ink">{item.role}</h2>
          <p class="text-base font-semibold text-ink/80">{item.company}</p>
          <p class="mt-2 text-base leading-relaxed text-ink/85">{item.detailedDescription}</p>
        </li>
      {/each}
    </ol>
  </section>
</div>

<SiteFooter />
