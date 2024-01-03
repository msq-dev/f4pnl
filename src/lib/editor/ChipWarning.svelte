<script>
  import BaseChip from "./BaseChip.svelte"
  import IconWarning from "./IconWarning.svelte"

  export let text = ""
</script>

<BaseChip type="warning">
  <IconWarning size={14} viewBox={36} fill={"#fff"} />
  <span>{text}</span>
</BaseChip>
