<script lang="ts">
  import { navLinks } from '../content'
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b-2 border-ink/55 bg-paper/95 backdrop-blur">
  <div class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
    <a href="/" class="font-note text-2xl font-semibold text-ink">Sneha’s Notebook</a>
    <nav aria-label="Primary navigation">
      <ul class="flex flex-wrap items-center gap-2 sm:gap-3">
        {#each navLinks as item}
          <li>
            <a
              href={item.href}
              class="rounded-full border border-ink/70 bg-white/80 px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-sunflower"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
