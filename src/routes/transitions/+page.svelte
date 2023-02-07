<script>
  import { fade, fly } from "svelte/transition";

  let show = false;
</script>

<div>
  <input type="checkbox" bind:checked={show} />

  {#if show}
    <p in:fly={{ x: 400, duration: 800 }} out:fade={{ duration: 400 }}>
      Here I Am!
    </p>
  {/if}
</div>
