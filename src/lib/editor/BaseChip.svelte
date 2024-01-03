<script>
  export let iconic = true
  export let type = ""
</script>

<div class="chip | {type}" class:iconic>
  <slot />
</div>

<style>
  .chip {
    font-size: 0.75rem;
    font-style: italic;
    color: hsl(220, 4%, 44%);
    background-color: hsla(0, 0%, 72%, 0);
    border-radius: 100vmax;
    padding: 0.25em 0.75em;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
    place-self: center;
  }

  .iconic {
    display: grid;
    grid-template-columns: 1rem auto;
    gap: 0.25em;
    padding: 0.35em 0.75em 0.35em 0.45em;
    color: #fff;
    font-style: normal;
  }

  .warning {
    background-color: hsl(42, 100%, 50%);
  }

  .complete {
    background-color: hsl(161, 100%, 37%);
  }
</style>
