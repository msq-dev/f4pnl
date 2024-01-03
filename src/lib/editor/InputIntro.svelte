<script>
  import { introHead, introText } from "../../stores/content"

  import BaseInputSection from "./BaseInputSection.svelte"
</script>

<BaseInputSection sectionName="Intro">
  <div class="input-group">
    <label class="label" for="head">Headline</label>
    <input class="text-input" type="text" id="head" bind:value={$introHead} />
  </div>
  <div class="input-group">
    <label class="label" for="intro">Introtext</label>
    <textarea
      class="text-input"
      id="intro"
      cols="30"
      rows="10"
      bind:value={$introText}
    ></textarea>
  </div>
</BaseInputSection>
