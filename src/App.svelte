<script lang="ts">
  import { onMount } from 'svelte'
  import SiteFooter from './lib/components/SiteFooter.svelte'
  import SiteHeader from './lib/components/SiteHeader.svelte'
  import { bitsItems as fallbackBitsItems, experienceItems as fallbackExperienceItems, workItems as fallbackWorkItems } from './lib/content'
  import { getBitsItems, getExperienceItems, getWorkItems } from './lib/sanity/content'

  let workItems = fallbackWorkItems
  let experienceItems = fallbackExperienceItems
  let bitsItems = fallbackBitsItems

  onMount(async () => {
    const [work, experiences, bits] = await Promise.all([getWorkItems(), getExperienceItems(), getBitsItems()])
    workItems = work
    experienceItems = experiences
    bitsItems = bits
  })
</script>

<SiteHeader />

<div class="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-10">
  <main class="space-y-16">
    <section id="about" class="relative overflow-hidden border-b-2 border-dashed border-ink/40 pb-16">
      <div class="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p class="font-note text-2xl text-ink/85">a little intro</p>
          <h1 class="mt-2 font-display text-5xl leading-tight text-ink sm:text-6xl">Sneha’s Creative World</h1>
          <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            Marketing professional with a niche in creative strategy, narrative systems, and audience-first storytelling.
            A notebook-first visual language keeps this space warm, playful, and expressive.
          </p>
          <div class="mt-6 flex flex-wrap gap-2.5">
            <span class="rounded-full border border-ink/70 bg-white/75 px-3 py-1 text-sm font-medium">Creative Direction</span>
            <span class="rounded-full border border-ink/70 bg-white/75 px-3 py-1 text-sm font-medium">Brand Strategy</span>
            <span class="rounded-full border border-ink/70 bg-white/75 px-3 py-1 text-sm font-medium">Cultural Insights</span>
          </div>
        </div>
        <div class="mx-auto w-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
            alt="Sneha portrait"
            class="aspect-[4/5] w-full rounded-3xl border-4 border-ink bg-white object-cover shadow-card"
          />
        </div>
      </div>
    </section>

    <section id="experiences" class="border-b-2 border-dashed border-ink/40 pb-16">
      <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 class="font-display text-4xl text-ink sm:text-5xl">Experiences</h2>
          <p class="mt-2 max-w-2xl text-ink/80">A growing timeline of roles, places, and impact.</p>
        </div>
        <a
          href="/experiences/"
          class="rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-peach"
        >
          Show More ↗
        </a>
      </div>
      <ol class="relative space-y-5 border-l-2 border-ink/45 pl-6">
        <span class="absolute -bottom-2 -left-[0.72rem] h-5 w-5 rounded-full border-2 border-ink bg-peach"></span>
        {#each [...experienceItems.slice(0, 3)].reverse() as item}
          <li class="relative">
            <span class="absolute -left-[1.9rem] top-2 h-3.5 w-3.5 rounded-full border border-ink bg-sunflower"></span>
            <p class="text-sm font-semibold uppercase tracking-wide text-ink/65">{item.years}</p>
            <h3 class="font-display text-2xl text-ink">{item.role}</h3>
            <p class="text-sm font-semibold text-ink/75">{item.company}</p>
            <p class="mt-1 max-w-3xl text-sm leading-relaxed text-ink/80">{item.highlights}</p>
          </li>
        {/each}
      </ol>
    </section>

    <section id="making-sense" class="border-b-2 border-dashed border-ink/40 pb-16">
      <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 class="font-display text-4xl text-ink sm:text-5xl">Making Sense</h2>
          <p class="mt-2 max-w-2xl text-ink/80">
            Essays, research notes, and thought pieces. The full archive lives on a separate page.
          </p>
        </div>
        <a
          href="/making-sense/"
          class="rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-peach"
        >
          Show More ↗
        </a>
      </div>
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="space-y-4">
          {#each workItems.slice(0, 4) as item}
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-4 rounded-2xl border-2 border-ink/60 bg-white/70 p-3 transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <img src={item.cover} alt={item.title} class="h-20 w-20 rounded-xl object-cover" />
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-ink/60">{item.type}</p>
                <h3 class="font-display text-xl text-ink">{item.title}</h3>
              </div>
            </a>
          {/each}
        </div>
        <div class="relative mx-auto w-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
            alt="Sneha reading notebook"
            class="aspect-[4/5] w-full rounded-3xl border-2 border-ink object-cover shadow-card"
          />
          <span class="absolute -left-7 top-8 rounded-md border border-ink/70 bg-sunflower px-3 py-1 font-note text-xl text-ink">
            scribbles everywhere
          </span>
          <span class="absolute -right-7 bottom-8 rounded-md border border-ink/70 bg-peach px-3 py-1 font-note text-xl text-ink">
            strategy notes
          </span>
          <span class="absolute -right-2 top-1/3 text-4xl text-ink/65">☀</span>
          <span class="absolute left-2 bottom-8 text-4xl text-ink/65">✿</span>
        </div>
      </div>
    </section>

    <section id="bits-and-pieces" class="pb-8">
      <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 class="font-display text-4xl text-ink sm:text-5xl">Bits and Pieces</h2>
          <p class="mt-2 max-w-2xl text-ink/80">Images, sounds, and references from Sneha’s everyday inspiration shelf.</p>
        </div>
        <a
          href="/bits-and-pieces/"
          class="rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-peach"
        >
          Show More ↗
        </a>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {#each bitsItems.slice(0, 4) as item}
          <a href={item.href} target="_blank" rel="noreferrer" class="group overflow-hidden rounded-2xl border border-ink/60 bg-white/75">
            <img src={item.cover} alt={item.title} class="h-40 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div class="px-3 py-2">
              <p class="text-xs font-semibold uppercase tracking-wide text-ink/60">{item.type}</p>
              <p class="font-display text-xl text-ink">{item.title}</p>
            </div>
          </a>
        {/each}
      </div>
    </section>
  </main>
</div>

<SiteFooter />
