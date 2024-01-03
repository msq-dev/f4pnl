<script>
  import { htmlRgbToHex } from "../../utils/html"
  import { datePrefix } from "../../utils/time"
  import MailBody from "./MailBody.svelte"

  const htmlStart = `<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Future4Public – Der Newsletter</title><style type="text/css">     body {background-color: #004e8e;}a:link {color: #000;}</style></head><body style="cursor: auto; background-color: #004e8e">`
  const htmlEnd = `</body></html>`

  let mailContent

  function downloadHtml() {
    const prefix = datePrefix(new Date())
    const colorConvertedHtml = htmlRgbToHex(mailContent.innerHTML)
    const completeMailHtml = htmlStart + colorConvertedHtml + htmlEnd

    const blob = new Blob([completeMailHtml], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = `${prefix}_f4p_newsletter.html`
    link.href = url
    link.click()
    URL.revokeObjectURL(url)
  }
</script>

<div class="preview">
  <div class="controls">
    <button class="btn btn-download" on:click={() => downloadHtml()}
      >Download HTML</button
    >
  </div>
  <div class="preview-window" bind:this={mailContent}>
    <MailBody />
  </div>
</div>

<style>
  .preview {
    background-color: hsl(207, 100%, 28%);
    padding: 1rem;
  }

  .preview-window {
    transform: scale(0.5);
    transform-origin: 0 0;
  }

  .controls {
    margin-bottom: 1rem;
  }

  .btn-download {
    border: none;
    background-color: var(--clr-accent);
    color: #fff;
  }
</style>
