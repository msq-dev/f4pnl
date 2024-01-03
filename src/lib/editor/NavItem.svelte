<script>
  import { currentSection } from "../../stores/editor"

  export let sectionName = "Intro"
</script>

<button
  class="nav-item"
  class:active={sectionName === $currentSection}
  on:click={() => ($currentSection = sectionName)}
>
  {sectionName}
</button>

<style>
  .nav-item {
    display: block;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin-block: 0.85em;
    transition: color 300ms ease;
  }

  .nav-item.active {
    color: var(--clr-light-700);
    font-weight: 700;
  }
</style>
