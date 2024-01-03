<script>
  import Tabs from "./Tabs.svelte"
  import BaseInputGroup from "./BaseInputGroup.svelte"

  export let row
  export let col
</script>

{#if row.cols.length === 1}
  <div class="col">
    <BaseInputGroup
      inputItem={"imgUrl"}
      label={"Ad Image-Url"}
      {row}
      {col}
      monospace
    />
    <BaseInputGroup inputItem={"altText"} label={"Alt-Text"} {row} {col} />
    <BaseInputGroup
      inputItem={"adUrl"}
      label={"Ad Url"}
      {row}
      {col}
      monospace
    />
  </div>
{:else}
  <div class="col">
    <Tabs {row} {col} />
  </div>
{/if}

<style>
  .col {
    justify-self: center stretch;
    padding-bottom: 1rem;
  }

  .col:not(:only-child) {
    padding-inline: 0.5em;
    border-top: var(--border);
  }

  /* .col:not(:only-child):last-of-type {
    border-left: var(--border);
  } */

  /* .latest-post {
    margin-top: 1em;
  } */
</style>
