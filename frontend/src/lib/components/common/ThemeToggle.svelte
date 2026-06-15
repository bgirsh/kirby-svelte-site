<script lang="ts">
  function toggleTheme() {
    const root = document.documentElement;

    const next =
      root.getAttribute('data-theme') === 'light'
        ? 'dark'
        : 'light';

    root.setAttribute('data-theme', next);
    localStorage.setItem('delinte-theme', next);
  }
</script>

<button
  type="button"
  aria-label="Toggle theme"
  on:click={toggleTheme}
>
  Theme
</button>