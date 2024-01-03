<script>
  import { mainContent } from "../../stores/content"

  export let inputItem
  export let label
  export let row
  export let col
  export let bold = false
  export let monospace = false

  $: targetRow = $mainContent.find((r) => r.rowId === row.rowId) || null
  $: targetCol = targetRow?.cols.find((c) => c.colId === col.colId) || null

  function handleInput(e) {
    targetCol[inputItem] = e.target.value
    $mainContent = $mainContent
  }
</script>

<div class="input-group">
  <label for={inputItem} class="label">{label}</label>
  <input
    class="text-input"
    class:bold
    class:monospace
    type="text"
    id={inputItem}
    value={targetCol[inputItem] || ""}
    on:input={handleInput}
  />
</div>
