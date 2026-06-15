<script lang="ts">
  import { onMount } from 'svelte';
  import { initTheme } from '$lib/utils/theme';

  import '../app.css';
  import './layout.css';

  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { data, children } = $props();

  onMount(() => {
    initTheme();
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header navigation={data?.navigation ?? []} />

{@render children()}

<Footer />