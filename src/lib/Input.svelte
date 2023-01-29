<script lang="ts">
  import { name } from "./stores";
</script>

<input type="text" placeholder="What is your name?" bind:value={$name} />

<style>
  input {
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.374);
    border: 1px solid grey;
    border-radius: 5px;
    color: white;
    padding: 10px;
  }
</style>
