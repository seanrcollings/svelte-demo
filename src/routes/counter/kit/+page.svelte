<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="center">
  {#key data.val}
    <h1 in:fly={{ y: -20 }}>{data.val}</h1>
  {/key}
  <form method="POST" class="actions" use:enhance>
    <button formaction="?/decrement">-</button>
    <button formaction="?/increment">+</button>
  </form>
  <form action="?/reset" method="post" class="reset-form" use:enhance>
    <button class="reset">Reset</button>
  </form>
</div>

<style>
  .center {
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  .reset-form {
    align-self: flex-end;
  }

  .reset {
    background-color: transparent;
    border: none;
    color: grey;
    margin: 5px;
    border-radius: 5px;
    padding: 5px;
  }
</style>
