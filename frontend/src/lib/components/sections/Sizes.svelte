<script lang="ts">
  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);
  let sizes = $derived(content.sizes ?? []);

  let titleHtml = $derived(
    content.title && content.highlight
      ? content.title.replace(content.highlight, `<em>${content.highlight}</em>`)
      : content.title
  );
</script>

<section class="section" id="sizes">
  <div class="container mx-auto px-6">
    <div class="sizes__head">
      <header class="section__head">
        {#if content.eyebrow}
          <span class="eyebrow">{content.eyebrow}</span>
        {/if}

        {#if titleHtml}
          <h2 class="section__title">{@html titleHtml}</h2>
        {/if}

        {#if content.description}
          <p class="section__lede">{content.description}</p>
        {/if}
      </header>

      {#if content.note}
        <p class="sizes__note">{content.note}</p>
      {/if}
    </div>

    {#if sizes.length}
      <div class="grid grid--sizes justify-items-center" role="list">
        {#each sizes as size}
          <button class="size" role="listitem" type="button">
            <span class="size__code">{size.sizeCode ?? size.sizecode}</span>
            <span class="size__meta">{size.sizeMeta ?? size.sizemeta}</span>
          </button>
        {/each}
      </div>
    {/if}
  </div>
</section>