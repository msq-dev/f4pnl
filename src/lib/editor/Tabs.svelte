<script>
  import { scale } from "svelte/transition"
  import { allPosts, mainContent } from "../../stores/content"
  import PostListItem from "./PostListItem.svelte"
  import BaseInputGroup from "./BaseInputGroup.svelte"
  import IconWeb from "./IconWeb.svelte"
  import IconTrash from "./IconTrash.svelte"
  import { fetchSinglePost } from "../../utils/datautils"

  let postType = "recent"
  let postFetched = false

  export let row
  export let col

  $: targetRow = $mainContent.find((r) => r.rowId === row.rowId) || null
  $: targetCol = targetRow?.cols.find((c) => c.colId === col.colId) || null
  $: hasContent = (targetCol?.head && targetCol?.imgUrl) || false

  async function makeSinglePost(url) {
    const postInfo = await fetchSinglePost(url)

    targetCol.imgUrl = postInfo.thumbnail
    targetCol.head = postInfo.title
    targetCol.altText = ""

    $mainContent = $mainContent
    postFetched = true
  }

  function deleteCol(col) {
    const postId = col.postId || null
    if (postId) {
      $allPosts.find((p) => p.postId === postId).isSelected = false
      $allPosts = $allPosts
    }

    const keys = Object.keys(col)
    keys.forEach((k) => {
      if (k !== "colId") {
        delete col[k]
      }
    })

    $mainContent = $mainContent
  }
</script>

{#if targetRow}
  <div class="tabs">
    <!-- <input type="radio" bind:group={postType} value="recent" />
  <input type="radio" bind:group={postType} value="custom" /> -->
    <nav>
      {#if !hasContent}
        <button
          class="btn | naked"
          class:active={postType === "recent"}
          on:click={() => (postType = "recent")}>Recent Post</button
        >
        <button
          class="btn | naked"
          class:active={postType === "custom"}
          on:click={() => (postType = "custom")}>Custom Post</button
        >
      {:else}
        <button class="btn | naked" on:click={() => deleteCol(col)}
          >COL <IconTrash viewBox={36} size={16} fill={"tomato"} /></button
        >
      {/if}
    </nav>
    <figure>
      <div class="recent-post" class:active={postType === "recent"}>
        {#if hasContent}
          <BaseInputGroup inputItem={"head"} label={"Head"} {row} {col} bold />
          <BaseInputGroup inputItem={"subhead"} label={"Subhead"} {row} {col} />
          <BaseInputGroup
            inputItem={"imgUrl"}
            label={"Image-Url"}
            {row}
            {col}
            monospace
          />
          <BaseInputGroup
            inputItem={"altText"}
            label={"Alt-Text"}
            {row}
            {col}
          />
        {:else}
          {#each $allPosts as post}
            <PostListItem {post} {row} {col} />
          {/each}
        {/if}
      </div>
      <div class="custom-post" class:active={postType === "custom"}>
        <BaseInputGroup inputItem={"head"} label={"Head"} {row} {col} bold />
        <BaseInputGroup inputItem={"subhead"} label={"Subhead"} {row} {col} />
        <BaseInputGroup
          inputItem={"imgUrl"}
          label={"Image-Url"}
          {row}
          {col}
          monospace
        />
        <BaseInputGroup inputItem={"altText"} label={"Alt-Text"} {row} {col} />
        <BaseInputGroup
          inputItem={"targetUrl"}
          label={"Post- (o.ä.) -Url"}
          {row}
          {col}
          monospace
        />
        {#if targetCol.targetUrl?.includes("f4p.online") && !postFetched}
          <button
            class="btn"
            in:scale={{ duration: 200 }}
            on:click={() => makeSinglePost(targetCol.targetUrl)}
            ><IconWeb viewBox={36} size={16} /> Fetch F4P-Post</button
          >
        {/if}
      </div>
    </figure>
  </div>
{/if}

<style>
  .tabs {
    /* --active-color: var(--clr-light-900); */
    /* --border-size: 1px;
    --border-tabs: var(--border-size) solid var(--active-color); */

    margin-top: 0.5em;
    width: min(100% - 1rem, 65ch);
  }

  .tabs figure {
    display: block;
    clear: both;
    margin: 0;
    margin-top: 1em;
  }

  .tabs > input,
  .tabs figure > div {
    display: none;
  }

  .recent-post.active,
  .custom-post.active {
    display: block;
  }

  .custom-post > .btn {
    display: block;
    border: none;
    font-size: 0.8rem;
    color: #fff;
    background-color: teal;
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: 0;
  }

  .tabs nav {
    display: flex;
  }

  .tabs nav button {
    flex: 1;
    text-align: center;
    padding: 0.5em;
    font-size: 0.8rem;
    color: var(--clr-light);
    /* border-top: var(--border-tabs);
    border-right: var(--border-tabs); */
    border-bottom-color: transparent;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    transition: all 300ms ease;
  }

  .tabs nav button.active {
    background-color: #fff;
    color: var(--clr-accent);
    font-weight: 700;
    position: relative;
    border-bottom-color: var(--clr-accent);
  }

  .tabs nav button.active:after {
    content: "";
    display: block;
    position: absolute;
    height: var(--border-size);
    width: 100%;
    background-color: #fff;
    left: 0;
    bottom: calc(var(--border-size) * -1);
  }
</style>
