<script lang="ts">
  import { highlightText } from '$lib/utils/highlight';
  import Counter from '$lib/components/common/Counter.svelte';  

  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);
  let stats = $derived(content.stats ?? []);

  let titleHtml = $derived(
    highlightText(content.title, content.highlight)
  );
</script>

<section class="section scorecard" id="performance">
  <div class="container">
    <header class="section__head">
      <span class="eyebrow">{content.eyebrow}</span>
      {#if titleHtml}
        <h2 class="section__title">
          {@html titleHtml}
        </h2>
      {/if}
      {#if content.description}
        <p class="section__lede">{content.description}</p>
      {/if}
    </header>

    <div class="grid grid--4">
      {#each stats as stat}
        <article class="stat reveal is-revealed">
          {#if stat.label}
            <span class="stat__label">
              {stat.label}
            </span>
          {/if}

          {#if stat.value }
          <div class="stat__value">
            <Counter
              from={0}
              to={Number(stat.value)}
              duration={1400}
            />
            {#if stat.suffix}
              <span class="stat__suffix">{stat.suffix}</span>
            {/if}
          </div>
          {/if}

          {#if stat.hint}
            <p class="stat__hint">{stat.hint}</p>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>