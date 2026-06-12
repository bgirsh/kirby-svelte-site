<script lang="ts">
  import PageBuilder from '$lib/components/PageBuilder.svelte';

  let { data } = $props();
</script>

<PageBuilder blocks={data.page.pageBuilder} />