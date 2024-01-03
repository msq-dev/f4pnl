<script>
  import {
    topImgUrl,
    topImgAlt,
    topHead,
    topMediaType,
    topMediaUrl,
    topTeaser,
  } from "../../stores/content"
  import BaseInputSection from "./BaseInputSection.svelte"
  import BaseInputGroup from "./BaseInputGroup.svelte"
</script>

<BaseInputSection sectionName="Top Content">
  <div class="input-group">
    <label class="label" for="topimg">Top Image URL</label>
    <input
      class="text-input | monospace"
      type="text"
      id="topimg"
      bind:value={$topImgUrl}
    />
  </div>
  <div class="input-group">
    <label class="label" for="topImgAlt">Top Image Alt-Text</label>
    <input
      class="text-input"
      type="text"
      id="topImgAlt"
      bind:value={$topImgAlt}
    />
  </div>
  <div class="input-group">
    <label class="label" for="tophead">Top Head</label>
    <input
      class="text-input | bold"
      type="text"
      id="tophead"
      bind:value={$topHead}
    />
  </div>
  <div class="input-group">
    <label class="label" for="teaser">Teaser</label>
    <textarea
      class="text-input"
      id="teaser"
      cols="30"
      rows="10"
      bind:value={$topTeaser}
    ></textarea>
  </div>
  <div class="input-group">
    <div class="label">Top Media Type</div>
    <div class="radio-group">
      <input
        type="radio"
        id="spotify"
        value="spotify"
        bind:group={$topMediaType}
      />
      <label for="spotify" class:active={$topMediaType === "spotify"}
        >Spotify</label
      >
      <input
        type="radio"
        id="youtube"
        value="youtube"
        bind:group={$topMediaType}
      />
      <label for="youtube" class:active={$topMediaType === "youtube"}
        >YouTube</label
      >
    </div>
  </div>

  <div class="input-group">
    <label class="label" for="mediaurl">Top Media URL</label>
    <input
      class="text-input | monospace"
      type="text"
      id="mediaurl"
      bind:value={$topMediaUrl}
    />
  </div>
</BaseInputSection>

<style>
  .radio-group > label {
    /* background-color: green; */
    padding: 0.5em 1.5em;
    color: var(--clr-light);
    border: var(--border);
    border-radius: 100vw;
  }

  .radio-group > label.active {
    border: 1px solid transparent;
    color: #fff;
    background-color: var(--clr-accent);
  }

  .radio-group {
    /* background-color: var(--clr-light-700); */
    padding: 1rem 0em 1rem 0;
    width: fit-content;
  }

  .radio-group > input {
    appearance: none;
  }
</style>
