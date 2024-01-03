<script>
  import { allPosts } from "../../stores/content"
  import { currentSection } from "../../stores/editor"
  import NavSidebar from "./NavSidebar.svelte"
  import InputIntro from "./InputIntro.svelte"
  import InputTopContent from "./InputTopContent.svelte"
  import InputMainContent from "./InputMainContent.svelte"

  const sections = {
    Intro: InputIntro,
    "Top Content": InputTopContent,
    "Main Content": InputMainContent,
  }
</script>

<div class="editor">
  <NavSidebar />
  <div class="workspace">
    <svelte:component this={sections[$currentSection]} />
  </div>
</div>

<style>
  .editor {
    display: grid;
    grid-template-columns: auto 1fr;
    /* grid-template-rows: rows 1fr rows; */
    gap: 2rem;
    /* margin: 0 auto; */
    min-height: 100vh;
  }

  .workspace {
    width: min(100% - 1rem);
  }
</style>
