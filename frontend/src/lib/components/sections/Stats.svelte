<script lang="ts">
  let { block }: { block: any } = $props();

  let content = $derived(block.content ?? block);
  let stats = $derived(content.stats ?? []);
</script>

<section class="py-20">
  <div class="mx-auto max-w-7xl px-6">
    {#if content.title}
      <h2 class="mb-10 text-4xl font-bold">
        {content.title}
      </h2>
    {/if}

    <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
      {#each stats as stat}
        <article class="rounded-xl border p-6">
          {#if stat.label}
            <span class="text-sm uppercase">
              {stat.label}
            </span>
          {/if}

          <div class="text-4xl font-bold">
            {stat.value}{stat.suffix}
          </div>

          {#if stat.hint}
            <p>{stat.hint}</p>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>