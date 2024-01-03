<script>
  import { onMount } from "svelte"
  import { allPosts } from "./stores/content"
  import { fetchJson, makeWpPostItem } from "./utils/datautils"
  import Editor from "./lib/editor/Editor.svelte"
  import Preview from "./lib/preview/Preview.svelte"

  const DATA_URL = "https://f4p.online/wp-json/wp/v2/posts/?_embed&per_page=10"

  // let wpPosts = $allPosts
  let wpPosts = processWpData(DATA_URL)

  async function processWpData(url) {
    const jsonData = await fetchJson(url)

    let postItems = []
    $allPosts = []

    jsonData.forEach((item) => {
      let post = makeWpPostItem(item)
      postItems = [...postItems, post]
      $allPosts = [...$allPosts, post]
    })

    return postItems
  }
</script>

<main>
  {#await wpPosts}
    <p style="margin: 5rem;">&hellip; fetching</p>
  {:then posts}
    <div class="app-area">
      <Editor />
      <Preview />
    </div>
  {:catch error}
    <p style="color: tomato;">{error.message}</p>
  {/await}
</main>

<style>
  main {
    /* width: min(100% - 2rem, 65ch); */
    margin: 0 auto;
  }

  .app-area {
    display: grid;
    grid-template-columns: 75% 25%;
  }
</style>
