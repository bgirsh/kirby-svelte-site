<script lang="ts">
  import Hero from './sections/Hero.svelte';
  import Stats from './sections/Stats.svelte';
  import FeatureGrid from './sections/FeatureGrid.svelte';
  import Sizes from './sections/Sizes.svelte';
  import CTA from './sections/CTA.svelte';

  let { blocks }: { blocks: any[] } = $props();
</script>

{#each blocks as block}
  {#if block.type === 'hero'}
    <Hero {block} />
  {:else if block.type === 'stats'}
    <Stats {block} />
  {:else if block.type === 'feature-grid'}
    <FeatureGrid {block} />
  {:else if block.type === 'sizes'}
    <Sizes {block} />
  {:else if block.type === 'cta'}
    <CTA {block} />
  {/if}
{/each}