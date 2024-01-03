<script>
  import { fade } from "svelte/transition"
  import { currentSection } from "../../stores/editor"

  export let sectionName = "Intro"

  $: sectionName, ($currentSection = sectionName)
</script>

<div in:fade={{ delay: 200, duration: 100 }} out:fade={{ duration: 100 }}>
  <h2 class="section-title | clr-light">
    {sectionName}
  </h2>
  <slot />
</div>

<style>
  .section-title {
    font-size: 2rem;
  }
</style>
