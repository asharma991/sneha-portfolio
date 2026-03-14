<script lang="ts">
  import { onMount } from 'svelte'
  import SiteFooter from '../lib/components/SiteFooter.svelte'
  import SiteHeader from '../lib/components/SiteHeader.svelte'
  import { workItems as fallbackWorkItems } from '../lib/content'
  import { getHomeSections, getWorkItems } from '../lib/sanity/content'

  let workItems = fallbackWorkItems
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
    const [items, sections] = await Promise.all([getWorkItems(), getHomeSections(sectionContent)])
    workItems = items
    sectionContent = sections
  })
</script>

<SiteHeader />

<div class="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-10">
  <section>
    <h1 class="font-display text-5xl text-ink sm:text-6xl">{sectionContent.makingSenseHeading}</h1>
    <p class="mt-3 max-w-3xl text-lg text-ink/80">{sectionContent.makingSensePageIntro}</p>
    <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each workItems as item}
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          class="group overflow-hidden rounded-2xl border-2 border-ink/65 bg-white/80 transition hover:-translate-y-1 hover:shadow-card"
        >
          <img src={item.cover} alt={item.title} class="h-56 w-full object-cover" />
          <div class="space-y-2 p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-ink/60">{item.type}</p>
            <h2 class="font-display text-2xl text-ink">{item.title}</h2>
            <p class="text-sm font-semibold text-ink/70 group-hover:text-ink">Open item ↗</p>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>

<SiteFooter />
