<script>
  import MainContentCol from "./MainContentCol.svelte"

  export let row
</script>

<div class="row autogrid" class:no-middleborder={row.cols.length === 1}>
  {#each row.cols as col}
    <MainContentCol {row} {col} />
  {:else}
    <div>&ndash;</div>
  {/each}
</div>

<style>
  .row {
    position: relative;
  }

  .row::after {
    content: "";
    position: absolute;
    right: 50%;
    width: var(--border-w);
    height: 100%;
    background-color: var(--border-clr);
  }
</style>
