<script lang="ts">
  import DevSanityIndicator from './DevSanityIndicator.svelte'
  import { onMount } from 'svelte'
  import { socials } from '../content'
  import { getSocialItems } from '../sanity/content'

  let socialItems = socials

  onMount(async () => {
    socialItems = await getSocialItems()
  })
</script>

<footer class="inset-x-0 bottom-0 z-50 border-t-2 border-ink/55 bg-paper/95 backdrop-blur">
  <div class="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-10">
    <p class="font-note text-2xl text-ink">find me around the internet</p>
    <ul class="flex flex-row justify-center gap-3 whitespace-nowrap">
      {#each socialItems as item}
        <li>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/60 bg-white text-ink transition hover:border-[#d97757] hover:text-[#d97757]"
          >
            {#if item.label === 'LinkedIn'}
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path
                  d="M6.94 8.46A1.47 1.47 0 1 1 5.47 7 1.47 1.47 0 0 1 6.94 8.46ZM7 11h-3v10h3Zm4.78 0h-2.9v10h3v-5.18c0-2.9 3.78-3.14 3.78 0V21h3v-6.32c0-4.92-5.46-4.74-6.88-2.32Z"
                />
              </svg>
            {:else if item.label === 'Instagram'}
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm9.75 1.5a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z"
                />
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path
                  d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.5 2v.2L12 12.25 19.5 7.2V7Zm15 10V9.45l-6.93 4.7a1 1 0 0 1-1.14 0L4.5 9.45V17Z"
                />
              </svg>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>

<DevSanityIndicator />
