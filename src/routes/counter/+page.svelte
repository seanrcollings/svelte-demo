<script lang="ts">
  import { fly } from "svelte/transition";

  let count: number = 0;
</script>

<div class="center">
  {#key count}
    <h1 in:fly={{ y: -20 }} class:green={count >= 20}>
      {count}
    </h1>
  {/key}

  <div class="actions">
    <button on:click={() => count--}>-</button>
    <button on:click={() => count++}>+</button>
  </div>
  <button class="reset" on:click={() => (count = 0)}>Reset</button>
</div>

<style>
  .center {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin: auto;
    border: 1px solid grey;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    justify-content: space-between;
  }

  h1 {
    padding-top: 100px;
    margin: 0px;
    font-size: 100px;
  }

  .green {
    color: green;
  }

  .actions > button {
    font-size: 50px;
    color: white;
    background-color: transparent;
    border: transparent;
    width: 50px;
    transition: background-color 0.3s ease;
    border-radius: 5px;
  }

  button:hover,
  .reset:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.422);
  }

  .reset {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    color: grey;
    margin: 5px;
    border-radius: 5px;
    padding: 5px;
  }
</style>
