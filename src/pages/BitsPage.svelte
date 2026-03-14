<script lang="ts">
  import { onMount } from 'svelte'
  import SiteFooter from '../lib/components/SiteFooter.svelte'
  import SiteHeader from '../lib/components/SiteHeader.svelte'
  import { bitsItems as fallbackBitsItems } from '../lib/content'
  import { getBitsItems } from '../lib/sanity/content'

  let bitsItems = fallbackBitsItems

  onMount(async () => {
    bitsItems = await getBitsItems()
  })
</script>

<SiteHeader />

<div class="mx-auto min-h-screen max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-10">
  <section>
    <h1 class="font-display text-5xl text-ink sm:text-6xl">Bits and Pieces</h1>
    <p class="mt-3 max-w-3xl text-lg text-ink/80">A larger board of images and music picks that inspire the work.</p>
    <div class="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
      {#each bitsItems as item}
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          class="mb-4 block break-inside-avoid overflow-hidden rounded-2xl border border-ink/60 bg-white/75"
        >
          <img src={item.cover} alt={item.title} class="h-52 w-full object-cover" />
          <div class="px-3 py-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-ink/60">{item.type}</p>
            <h2 class="font-display text-2xl text-ink">{item.title}</h2>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>

<SiteFooter />
