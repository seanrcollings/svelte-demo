<script lang="ts">
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  const [send, receive] = crossfade({
    duration: (d: number) => Math.sqrt(d * 200),
  });
</script>

<div class="wrapper">
  <form action="?/create" method="POST" use:enhance>
    <input
      class="new-todo"
      type="text"
      placeholder="New Todo"
      name="description"
      value={form?.description || ""}
    />
    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}
  </form>

  <div class="container">
    <div class="todos">
      <h2>Todo</h2>
      <ul>
        {#each data.todos.filter((t) => !t.done) as item (item.id)}
          <form
            action="?/update"
            method="POST"
            use:enhance
            in:receive|local={{ key: item.id }}
            out:send|local={{ key: item.id }}
            animate:flip={{ duration: 200 }}
          >
            <input type="text" hidden name="id" value={item.id} />
            <input type="text" hidden name="done" value={!item.done} />
            <button>
              <label>
                <input type="checkbox" checked={item.done} />
                {item.description}
              </label>
            </button>
          </form>
        {/each}
      </ul>
    </div>

    <div class="todos">
      <h2>Done</h2>
      <ul>
        {#each data.todos.filter((t) => t.done) as item (item.id)}
          <form
            action="?/update"
            method="POST"
            use:enhance
            in:receive|local={{ key: item.id }}
            out:send|local={{ key: item.id }}
            animate:flip={{ duration: 200 }}
          >
            <input type="text" hidden name="id" value={item.id} />
            <input type="text" hidden name="done" value={!item.done} />
            <button>
              <label>
                <input type="checkbox" checked={item.done} />
                {item.description}
              </label>
            </button>
          </form>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .wrapper {
    align-self: center;
    margin: auto;
  }

  .container {
    display: flex;
    height: 500px;
  }

  .todos {
    margin: 20px;
    width: 400px;
  }

  ul {
    list-style: none;
    padding: 0px;
  }

  button {
    display: block;
    width: 100%;
    text-align: left;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 5px;
    background-color: rgb(226, 226, 226);
    margin-bottom: 10px;
  }

  button > label {
    font-size: 20px;
    width: 100%;
    display: inline-block;
  }

  .new-todo {
    display: block;
    width: 100%;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 10px;
  }

  .error {
    color: red;
  }
</style>
