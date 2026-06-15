<script lang="ts">
  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);
  let features = $derived(content.features ?? []);

  let titleHtml = $derived(
    content.title && content.highlight
      ? content.title.replace(content.highlight, `<em>${content.highlight}</em>`)
      : content.title
  );
</script>

<section class="section" id="tech">
  <div class="container">
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

    {#if features.length}
      <div class="grid grid--2 tech__grid">
        {#each features as feature, index}
          <article class="feature reveal is-revealed">
            {#if feature.icon}
              <div class="feature__icon" aria-hidden="true">
                {@html feature.icon}
              </div>
            {/if}

            <span class="feature__num">
              {(index + 1).toString().padStart(2, '0')} · {feature.number}
            </span>

            {#if feature.title}
              <h3 class="feature__title">{feature.title}</h3>
            {/if}

            {#if feature.description}
              <p class="feature__body">{feature.description}</p>
            {/if}
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>