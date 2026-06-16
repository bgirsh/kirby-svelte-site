<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let { images = [] } = $props();
</script>

<div class="embla" use:emblaCarouselSvelte>
  <div class="embla__container">
    {#each images as image}
      <div class="embla__slide">
        <img src={image.url} alt={image.alt ?? ''} />
      </div>
    {/each}
  </div>
</div>