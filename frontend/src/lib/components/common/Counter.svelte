<script lang="ts">
  let {
    from = 0,
    to = 0,
    duration = 1200
  }: {
    from?: number;
    to?: number;
    duration?: number;
  } = $props();

  let el: HTMLSpanElement;
  let value = $state(0);

  $effect(() => {
    value = Number(from);
  });
  let frame: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  function animate() {
    if (frame) cancelAnimationFrame(frame);

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      value = Math.round(from + (to - from) * easeOutCubic(progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    value = from;
    frame = requestAnimationFrame(tick);
  }

  $effect(() => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          value = from;

          if (frame) {
            cancelAnimationFrame(frame);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  });
</script>

<span bind:this={el}>
  {value.toLocaleString()}
</span>