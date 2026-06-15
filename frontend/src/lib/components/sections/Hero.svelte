<script lang="ts">
  import { highlightText } from '$lib/utils/highlight';

  let { block }: { block: any } = $props();  
  
  let content = $derived(block.content ?? block);
  let eyebrows = $derived(content.eyebrows ?? []);
  let callouts = $derived(content.heroartcallout ?? []);

  let titleHtml = $derived(
    highlightText(content.title, content.highlight)
  );
</script>

<section class="hero test-rebuild">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="container hero__inner mx-auto px-6">
    <div>
      {#if eyebrows.length}
        <div class="hero__meta">
          {#each eyebrows as eyebrow}
            {@const isAccent = eyebrow.chipaccent === 'true'}

            <span class={isAccent ? 'chip chip--accent' : 'chip'}>
              {#if isAccent}
                <span class="dot"></span>
              {/if}

              {eyebrow.chip}
            </span>
          {/each}
        </div>
      {/if}

        {#if titleHtml}
          <h1 class="hero__title">
            {@html titleHtml}
          </h1>
        {/if}

        {#if content.description}
          <p class="hero__lede">
            {content.description}
          </p>
        {/if}

        {#if content.primarytext}
          <div class="hero__cta">
            <a href={content.primaryurl} class="btn btn--primary">
              {content.primarytext}
              <svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"></path></svg>
            </a>

            {#if content.secondarytext}
              <a href={content.secondaryurl} class="btn btn--ghost">
                {content.secondarytext}
              </a>
            {/if}
          </div>
        {/if}
      
    </div>
    <div class="hero__art">
      {#if callouts.length}
        <div class="hero__ticks" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {#each callouts as callout}
            {@const getDirection = callout.direction === 'true'}
            {@const pointPosition = callout.pointposition === 'true'}

            <div class="callout {pointPosition ? 'callout--br' : ''}" style="top:{callout.top};right:{callout.right};bottom:{callout.bottom};left:{callout.left};flex-direction:{getDirection ? 'row-reverse' : 'row'}">
              <span>
                <strong>{callout.title}</strong><br>{callout.copy}
              </span>
              <span class="callout__line"></span>
            </div>
        {/each}
        <div>
          <svg viewBox="0 0 600 600" role="img" aria-label="Stylized illustration of the Centurion X/T tire"><defs><radialGradient id="rubber" cx="50%" cy="50%" r="50%"><stop offset="55%" stop-color="oklch(0.20 0.005 250)"></stop><stop offset="92%" stop-color="oklch(0.10 0.005 250)"></stop><stop offset="100%" stop-color="oklch(0.04 0 0)"></stop></radialGradient><radialGradient id="rim" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="oklch(0.42 0.008 250)"></stop><stop offset="60%" stop-color="oklch(0.24 0.007 250)"></stop><stop offset="100%" stop-color="oklch(0.14 0.005 250)"></stop></radialGradient><path id="sidewallPath" d="M 300 300 m -218 0 a 218 218 0 1 1 436 0 a 218 218 0 1 1 -436 0"></path></defs><ellipse cx="300" cy="555" rx="240" ry="14" fill="oklch(0 0 0)" opacity="0.55"></ellipse><g class="tire-rotate"><circle cx="300" cy="300" r="290" fill="url(#rubber)"></circle><circle cx="300" cy="300" r="268" fill="none" stroke="oklch(0.30 0.008 250)" stroke-width="44" stroke-dasharray="46 12"></circle><circle cx="300" cy="300" r="244" fill="none" stroke="oklch(0.04 0 0)" stroke-width="6"></circle><circle cx="300" cy="300" r="222" fill="none" stroke="oklch(0.26 0.007 250)" stroke-width="34" stroke-dasharray="30 16" stroke-dashoffset="15"></circle><circle cx="300" cy="300" r="222" fill="none" stroke="oklch(0.07 0 0)" stroke-width="34" stroke-dasharray="2 44" stroke-dashoffset="15" opacity="0.7"></circle><circle cx="300" cy="300" r="200" fill="none" stroke="oklch(0.04 0 0)" stroke-width="3"></circle><circle cx="300" cy="300" r="195" fill="oklch(0.13 0.005 250)"></circle><text font-family="Impact, 'Helvetica Neue', sans-serif" font-size="22" font-weight="900" letter-spacing="3" fill="oklch(0.42 0.008 250)"><textPath href="#sidewallPath" startOffset="0">· CENTURION X/T · 35×12.50R20 LT · ALL TERRAIN · 3PMSF · DELINTE</textPath></text><circle cx="300" cy="300" r="158" fill="oklch(0.06 0.003 250)"></circle><circle cx="300" cy="300" r="148" fill="url(#rim)"></circle><circle cx="300" cy="300" r="148" fill="none" stroke="oklch(0.50 0.010 250)" stroke-width="1" opacity="0.6"></circle><g transform="translate(300 300)"><g><path d="M 0 -125 L 22 -55 L -22 -55 Z" fill="oklch(0.10 0.005 250)"></path></g><g transform="rotate(72)"><path d="M 0 -125 L 22 -55 L -22 -55 Z" fill="oklch(0.10 0.005 250)"></path></g><g transform="rotate(144)"><path d="M 0 -125 L 22 -55 L -22 -55 Z" fill="oklch(0.10 0.005 250)"></path></g><g transform="rotate(216)"><path d="M 0 -125 L 22 -55 L -22 -55 Z" fill="oklch(0.10 0.005 250)"></path></g><g transform="rotate(288)"><path d="M 0 -125 L 22 -55 L -22 -55 Z" fill="oklch(0.10 0.005 250)"></path></g></g><g transform="translate(300 300)"><circle cx="0" cy="-92" r="7" fill="oklch(0.05 0 0)"></circle><circle cx="87.5" cy="-28.4" r="7" fill="oklch(0.05 0 0)"></circle><circle cx="54.1" cy="74.4" r="7" fill="oklch(0.05 0 0)"></circle><circle cx="-54.1" cy="74.4" r="7" fill="oklch(0.05 0 0)"></circle><circle cx="-87.5" cy="-28.4" r="7" fill="oklch(0.05 0 0)"></circle></g><circle cx="300" cy="300" r="46" fill="oklch(0.14 0.005 250)"></circle><circle cx="300" cy="300" r="46" fill="none" stroke="var(--accent)" stroke-width="1.5"></circle><circle cx="300" cy="300" r="56" fill="none" stroke="var(--accent)" stroke-width="1" stroke-dasharray="2 6" opacity="0.7"></circle><text x="300" y="312" text-anchor="middle" font-family="Impact, 'Helvetica Neue', sans-serif" font-size="30" font-weight="900" fill="var(--accent)">X/T</text></g></svg>
        </div>
      {/if}
    </div>
  </div>
</section>