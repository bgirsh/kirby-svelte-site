<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let { images = [] }: { images?: any[] } = $props();

  let emblaApi: any;
  let slides = $derived([...images, ...images]);

  function onInit(event: CustomEvent) {
    emblaApi = event.detail;
  }

  function next() {
    emblaApi?.scrollNext();
  }

  function prev() {
    emblaApi?.scrollPrev();
  }
</script>

<div class="carousel mx-auto">
  <div
    class="embla"
    use:emblaCarouselSvelte={{
      options: {
        loop: true,
        align: 'start',
        containScroll: false
      }
    }}
    on:emblaInit={onInit}
  >
    <div class="embla__container">
      {#each slides as image}
        <div class="embla__slide">
          <img src={image.url} alt={image.alt ?? ''} />
        </div>
      {/each}
    </div>
  </div>

  {#if images.length > 1}
    <button type="button" class="carousel__arrow carousel__arrow--prev" on:click={prev}>
      Prev
    </button>

    <button type="button" class="carousel__arrow carousel__arrow--next" on:click={next}>
      Next
    </button>
  {/if}
</div>