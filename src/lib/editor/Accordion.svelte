<script context="module">
  import { setContext, getContext } from "svelte"
  import { writable } from "svelte/store"

  const key = {}

  export const getAccordionContext = () => getContext(key)
  export const createAccordionContext = () => {
    const current = writable(null)
    const context = { current }
    setContext(key, context)

    return context
  }
</script>

<script>
  import { quadInOut } from "svelte/easing"
  import { scale, slide } from "svelte/transition"

  export let open = false
  export let id
  export let keyName

  const { current } = getAccordionContext()
  const currentKey = {}

  $: if ($current !== currentKey) open = false

  function handleClick() {
    open = !open
    if (open) $current = currentKey
  }
</script>

<div class="accordion" transition:scale={{ duration: 200 }}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="header" on:click={handleClick} class:open>
    <slot name="head" />
  </div>
  {#if open}
    <div
      class="cell-wrapper | autogrid"
      class:open
      transition:slide={{ duration: 150, easing: quadInOut }}
    >
      <slot name="cells" />
    </div>
  {/if}
</div>

<style>
  .accordion {
    /* border: var(--border); */
    border-radius: var(--border-rad);
    /* background-color: #fff; */
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
    transition: box-shadow 300ms ease;
  }

  .accordion:has(.open) {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .header {
    --gap: 0.5rem;

    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
</style>
