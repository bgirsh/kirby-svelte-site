<script lang="ts">
  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);

  let titleHtml = $derived(
    content.title && content.highlight
      ? content.title.replace(content.highlight, `<em>${content.highlight}</em>`)
      : content.title
  );
</script>

<section id="dealer" class="container">
  <div class="cta">
    <div class="cta__inner">
      {#if titleHtml}
        <h2 class="cta__title">{@html titleHtml}</h2>
      {/if}

      <div class="cta__actions">
        {#if content.primarytext && content.primaryurl}
          <a class="btn btn--primary" href={content.primaryurl}>
            {content.primarytext}
            <svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"></path></svg>
          </a>
        {/if}

        {#if content.secondarytext && content.secondaryurl}
          <a class="btn btn--ghost" href={content.secondaryurl}>
            {content.secondarytext}
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>