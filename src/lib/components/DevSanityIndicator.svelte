<script lang="ts">
  import { sanityIndicator } from '../sanity/status'

  const show = import.meta.env.DEV

  const toneClasses: Record<string, string> = {
    connected: 'border-emerald-700 bg-emerald-100 text-emerald-900',
    mixed: 'border-amber-700 bg-amber-100 text-amber-900',
    unknown: 'border-zinc-700 bg-zinc-100 text-zinc-900',
    fallback: 'border-rose-700 bg-rose-100 text-rose-900',
  }

  $: indicatorClass = toneClasses[$sanityIndicator.tone]
</script>

{#if show}
  <div class="fixed bottom-14 right-4 z-[70]">
    <p class={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${indicatorClass}`}>
      {$sanityIndicator.label}
    </p>
  </div>
{/if}
