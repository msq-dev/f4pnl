<script context="module">
  import { setContext, getContext } from "svelte"
  import { writable } from "svelte/store"

  const key = {}

  export const getTabsContext = () => getContext(key)
  export const createTabsContext = () => {
    const current = writable(null)
    const context = { current }
    setContext(key, context)

    return context
  }
</script>

<script>
  import { fade } from "svelte/transition"

  export let active = false
  export let id
  export let keyName

  const { current } = getTabsContext()
  const currentKey = {}

  $: if ($current !== currentKey) active = false

  function handleClick() {
    active = !active
    if (active) $current = currentKey
  }
</script>

<div class="tabs">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="tab-label" on:click={handleClick} class:active>
    <slot name="tab" />
  </div>
  {#if active}
    <div class="tab-content" class:active transition:fade>
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .tab-label {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
</style>
