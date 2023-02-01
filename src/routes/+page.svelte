<div class="container">
  <div class="box">
    <h1>Svelte!</h1>
    <ul>
      <li>
        Frontend JS Framework, like React or Vue. (Pretty similar to Vue, at
        least visually)
      </li>
      <li>Ships no runtime, no virtual DOM</li>
      <li>
        <strong>Cool Features</strong>
        <ul>
          <li>Elagent and simple state management</li>
          <li>Very slick and elegent syntax</li>
          <li>Re-running code is opt-in, instead of opt-out</li>
          <li>Easy to use Transition / Animation tooling</li>
          <li>Builtin global state solution using stores</li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="box">
    <h1>SvelteKit!</h1>
    <ul>
      <li>
        Fullstack framework (or, metaframework). Similar to NextJS for React.
      </li>
      <li>Supports SSR, CSR, Prerendering</li>
      <li>
        <strong>Cool Features</strong>
        <ul>
          <li>Tight integration between frontend and backend</li>
          <li>
            Can build your application in a way that requires 0 client side JS
          </li>
          <li>File-based routing solution</li>
          <li>API Endpoints</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style>
  .container {
    align-self: center;
    margin: auto;
    display: flex;
    gap: 4em;
  }

  .box {
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
    width: 500px;
  }

  h1 {
    color: #ff521b;
    font-size: 40px;
  }

  ul {
    font-size: 18px;
    list-style: none;
  }

  li {
    margin-bottom: 10px;
    line-height: 30px;
  }

  ul li::before {
    content: "\2022";
    color: #ff521b;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
</style>
