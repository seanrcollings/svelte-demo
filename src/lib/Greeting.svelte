<script>
  import { name } from "./stores";

  export let greet = "Hello";
</script>

{#if $name}
  <h1>
    {greet}, {$name}!
  </h1>
{:else}
  <div />
{/if}

<style>
  h1,
  div {
    font-size: 50px;
    height: 40px;
    margin: 10px 0px;
  }
</style>
