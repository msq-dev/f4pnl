<script>
  import { createEventDispatcher } from "svelte"
  import { allPosts, mainContent } from "../../stores/content"
  import { formatDate } from "../../utils/time"

  export let post

  export let row
  export let col

  const dispatch = createEventDispatcher()

  function selectPost(id) {
    dispatch("selected")

    const selected = $allPosts.find((p) => p.postId === id)
    selected.isSelected = true
    $allPosts = $allPosts

    const targetRow = $mainContent.find((r) => r.rowId === row.rowId)
    const targetCol = targetRow.cols.find((c) => c.colId === col.colId)

    targetCol.imgUrl = selected.thumbnail
    targetCol.altText = ""
    targetCol.url = selected.link
    targetCol.head = selected.title
    targetCol.subhead = ""
    targetCol.postId = selected.postId

    $mainContent = $mainContent

    // $mainContent[rowIndex][colIndex].imgUrl =
    //   $allPosts[indexOfSelected].thumbnail
    // $mainContent[rowIndex][colIndex].altText = ""
    // $mainContent[rowIndex][colIndex].url = $allPosts[indexOfSelected].link
    // $mainContent[rowIndex][colIndex].head = $allPosts[indexOfSelected].title
    // $mainContent[rowIndex][colIndex].subhead = ""
    // $mainContent[rowIndex][colIndex].id = $allPosts[indexOfSelected].id
  }
</script>

<button
  class="btn | post-item"
  on:click={() => selectPost(post.postId)}
  class:disabled={post.isSelected}
>
  <div>
    <div class="date">{formatDate(post.date)}</div>
    <div class="title">{@html post.title}</div>
  </div>
  <img src={post.thumbnail} alt="" class="thumbnail" />
</button>

<style>
  .post-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--border);
    margin-bottom: 0.5em;
    width: 100%;
    text-align: left;
    transition: border-color 300ms ease;
  }

  .post-item:hover {
    border-color: var(--clr-accent);
  }

  .post-item.disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  .post-item .date {
    font-size: 0.75rem;
    color: var(--clr-light);
  }

  .post-item .title {
    font-size: 0.95rem;
  }

  .thumbnail {
    height: 2.5rem;
  }
</style>
