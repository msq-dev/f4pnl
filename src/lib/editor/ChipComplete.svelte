<script>
  import BaseChip from "./BaseChip.svelte"
  import IconCheckmark from "./IconCheckmark.svelte"

  export let text = ""
</script>

<BaseChip type="complete">
  <IconCheckmark size={14} viewBox={36} fill={"#fff"} />
  <span>{@html text}</span>
</BaseChip>
