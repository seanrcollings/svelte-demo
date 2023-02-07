<script lang="ts">
  let count = 0;
  let doubled: number;

  $: doubled = count * 2;
</script>

<div class="container">
  <h1>{count}</h1>
  <h1>{doubled}</h1>
  <div>
    <button on:click={() => (count = count - 1)}>-</button>
    <button on:click={() => (count = count + 1)}>+</button>
  </div>
</div>

<style>
  /* your styles go here */
  .container {
    margin: auto;
  }
</style>
