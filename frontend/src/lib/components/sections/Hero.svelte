<script lang="ts">
  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);
</script>

<section class="py-24 bg-gray-100">
  <div class="mx-auto max-w-7xl px-6">
    {#if content.eyebrow}
      <p class="mb-4 text-sm uppercase tracking-wide">
        {content.eyebrow}
      </p>
    {/if}

    {#if content.title}
      <h1 class="mb-6 text-6xl font-bold">
        {content.title}

        {#if content.highlight}
          <span class="text-blue-600">
            {content.highlight}
          </span>
        {/if}
      </h1>
    {/if}

    {#if content.description}
      <p class="mb-8 max-w-2xl text-xl">
        {content.description}
      </p>
    {/if}
  </div>
</section>