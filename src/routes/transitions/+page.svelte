<script>
  import { fade, fly } from "svelte/transition";

  let show = false;
</script>

<div>
  <input type="checkbox" bind:checked={show} />

  {#if show}
    <p in:fly={{ x: 200 }} out:fade={{ duration: 200 }}>Here I Am!</p>
  {/if}
</div>
