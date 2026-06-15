<script lang="ts">
  let { navigation = [] } = $props();
</script>

<header class="site-header">
    <div class="container site-header__inner">
        <a href="/" class="brand" aria-label="<?= $site->title()->esc() ?>">
            <span class="brand__mark" aria-hidden="true">D</span>
            <span>Delinte</span>
        </a>
    
        <nav class="site-nav" aria-label="Primary">
            {#each navigation as item, index}
                <a 
                href={item.url}
                aria-current={index === 0 ? 'page' : undefined}>
                {item.label}
                </a>
            {/each}
        </nav>

        <div class="site-header__actions">
            <button class="theme-toggle" type="button" aria-label="Toggle color theme" data-theme-toggle="">
                <svg data-icon="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path></svg>
                <svg data-icon="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>
            </button>
            <a class="btn btn--primary" href="#dealer">
                Buy now
                <svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"></path></svg>
            </a>
        </div>
    </div>
</header>