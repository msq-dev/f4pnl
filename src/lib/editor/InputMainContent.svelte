<script>
  import { flip } from "svelte/animate"
  import { allPosts, mainContent } from "../../stores/content"
  import Accordion, { createAccordionContext } from "./Accordion.svelte"
  import BaseInputSection from "./BaseInputSection.svelte"
  import MainContentRow from "./MainContentRow.svelte"
  import ChipWarning from "./ChipWarning.svelte"
  import ChipComplete from "./ChipComplete.svelte"
  import BaseChip from "./BaseChip.svelte"
  import IconCols from "./IconCols.svelte"
  import IconRow from "./IconRow.svelte"
  import IconTrash from "./IconTrash.svelte"

  createAccordionContext()

  function addRow(colAmount = 1) {
    const row = {
      rowId: crypto.randomUUID(),
      cols: [],
    }

    for (let i = 0; i < colAmount; i++) {
      const col = { colId: crypto.randomUUID() }
      row.cols.push(col)
    }

    $mainContent = [...$mainContent, row]
  }

  async function deleteRow(id) {
    await deselectPosts(id)
    $mainContent = $mainContent.filter((r) => r.rowId !== id)
  }

  function deselectPosts(rowId) {
    const targetRow = $mainContent.find((r) => r.rowId === rowId) || null
    targetRow?.cols.forEach((c) => {
      const postId = c.postId || null
      if (postId) {
        $allPosts.find((p) => p.postId === postId).isSelected = false
        $allPosts = $allPosts
      }
    })
  }
</script>

<BaseInputSection sectionName="Main Content">
  <div class="toolbar">
    <div class="tool-group">
      <button on:click={() => addRow(2)}
        ><IconCols size={22} fill={"none"} viewBox={220} />
        <span>Add Cols</span></button
      >
      <button on:click={() => addRow(1)}
        ><IconRow size={22} fill={"none"} viewBox={220} />
        <span>Add Row</span></button
      >
    </div>
  </div>
  <div class="content-rows">
    {#each $mainContent as row, rowIndex (rowIndex)}
      <span animate:flip={{ duration: 200 }}>
        <Accordion id={rowIndex} keyName={rowIndex}>
          <svelte:fragment slot="head">
            <div
              class="acc-head"
              class:no-middleborder={row.cols.length === 1}
              style="--gap: 1rem;"
            >
              <span class="row-nr | bold monospace">{rowIndex + 1}</span>
              <div class="content-indicators | autogrid">
                {#each row.cols as c}
                  {#if c.altText === ""}
                    <ChipWarning text={"Alt-Text fehlt"} />
                  {:else if c.altText !== "" && c.head}
                    <ChipComplete
                      text={c.head.slice(0, 15) + "&thinsp;&hellip;"}
                    />
                  {:else}
                    <BaseChip iconic={false}>leer</BaseChip>
                  {/if}
                {/each}
              </div>
              <button
                class="btn btn-delete | naked | bold"
                on:click|stopPropagation={() => deleteRow(row.rowId)}
                ><IconTrash viewBox={36} size={20} /></button
              >
            </div>
          </svelte:fragment>
          <svelte:fragment slot="cells">
            <MainContentRow {row} />
          </svelte:fragment>
        </Accordion>
      </span>
    {/each}
  </div>
</BaseInputSection>

<style>
  .toolbar {
    margin-bottom: 2rem;
  }

  .content-rows {
    display: grid;
    gap: 0.5rem;
  }

  .content-indicators {
    width: 100%;
  }

  .acc-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .acc-head::after {
    content: "";
    position: absolute;
    right: 50%;
    width: var(--border-w);
    height: 100%;
    background-color: var(--border-clr);
  }

  .row-nr,
  .btn-delete {
    font-size: 1.1rem;
    padding-block: 0.5em;
    padding-inline: 0.5em;
  }

  .row-nr {
    display: block;
    color: hsl(199, 54%, 62%);
    background-color: hsl(199, 96%, 90%);
    border-top-left-radius: var(--border-rad);
    border-bottom-left-radius: var(--border-rad);
  }

  .btn-delete {
    color: #fff;
    background-color: hsl(0, 95%, 45%);
    border-top-right-radius: var(--border-rad);
    border-bottom-right-radius: var(--border-rad);
  }

  .tool-group {
    display: flex;
    margin-block: 1rem;
  }

  .tool-group > button {
    --btn-border: 1px solid var(--clr-accent);

    border: none;
    color: var(--clr-light-900);
    border-top: var(--btn-border);
    border-right: var(--btn-border);
    border-bottom: var(--btn-border);
    color: var(--clr-accent);
    background: none;
    font-size: 1.2rem;
    padding: 0.5em 0.75em;
    cursor: pointer;
    display: grid;
    width: min(14ch, 10rem);
    grid-template-columns: auto auto;
    transition: all 150ms ease;
  }

  .tool-group > button:hover {
    color: #fff;
    background-color: var(--clr-accent);
    border-color: transparent;
  }

  .tool-group > button:first-of-type {
    border-left: var(--btn-border);
    border-top-left-radius: var(--border-rad);
    border-bottom-left-radius: var(--border-rad);
  }

  .tool-group > button:last-of-type {
    border-top-right-radius: var(--border-rad);
    border-bottom-right-radius: var(--border-rad);
  }
</style>
