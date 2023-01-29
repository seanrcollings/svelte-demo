<script>
  import { name } from "./stores";
</script>

{#if $name}
  <h1>
    Hello, {$name}!
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
