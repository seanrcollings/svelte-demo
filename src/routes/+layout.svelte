<nav>
  <a href="/counter">Counter</a>
  <a href="/transitions">Transitions</a>
  <a href="/stores">Stores</a>
  <a href="/counter/kit">Counter + SvelteKit</a>
  <a href="/todos">Todos</a>
</nav>

<main>
  <slot />
</main>

<style>
  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
  }

  nav {
    padding: 15px;
    display: flex;
    gap: 20px;
    background-color: rgb(58, 58, 88);
  }

  a {
    text-decoration: none;
    color: grey;
  }

  a:hover {
    color: white;
  }

  main {
    background-color: rgb(39, 39, 59);
    height: 100%;
    display: flex;
  }
</style>
