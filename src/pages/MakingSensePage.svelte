<script lang="ts">
  import { onMount } from 'svelte'
  import SiteFooter from '../lib/components/SiteFooter.svelte'
  import SiteHeader from '../lib/components/SiteHeader.svelte'
  import { workItems as fallbackWorkItems } from '../lib/content'
  import { getWorkItems } from '../lib/sanity/content'

  let workItems = fallbackWorkItems

  onMount(async () => {
    workItems = await getWorkItems()
  })
</script>

<SiteHeader />

<div class="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-10">
  <section>
    <h1 class="font-display text-5xl text-ink sm:text-6xl">Making Sense</h1>
    <p class="mt-3 max-w-3xl text-lg text-ink/80">
      Full collection of essays and research pieces. Open any entry to view the linked PDF or image.
    </p>
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
