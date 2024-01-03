<script>
  export let row

  $: isSingle = row.cols.length === 1
  $: cellpadding = isSingle ? 0 : 30
  $: colWidth = isSingle ? "100%" : "50%"
  $: rowWidth = isSingle ? "100%" : "99%"
  $: imgWidth = isSingle ? 700 : "auto"
  $: imgHeight = isSingle ? "" : 177
</script>

<tr>
  <td bgcolor="#ffffff">
    <table width={rowWidth} cellspacing="0" {cellpadding} border="0">
      <tr>
        {#each row.cols as col}
          <td width={colWidth} valign="top">
            <p align={isSingle ? "center" : ""}>
              <a href={col.link} target="_blank"
                ><img
                  alt={col.altText}
                  class="big"
                  src={col.imgUrl}
                  style="
                display: block;
                width: {imgWidth};
                height: {imgHeight}px;
                border: 0px none;
                max-width: 100%;
              "
                  width={imgWidth}
                  height={imgHeight}
                /></a
              >
            </p>
            {#if !isSingle}
              <p style="margin: 0px">
                <a
                  href={col.link}
                  target="_blank"
                  style="
              text-decoration: none !important;
              color: #000000 !important;
            "
                  ><span style="font-size: 14pt; color: #000000"
                    ><span
                      style="
                  font-family: Palatino, Georgia, serif;
                  font-weight: 700;
                  color: #000000;
                ">{@html col.head || ""}</span
                    ></span
                  ></a
                >
              </p>
              <p style="margin: 0px">
                <a
                  href={col.link}
                  target="_blank"
                  style="
              text-decoration: none !important;
              color: #000000 !important;
            "
                  ><span style="font-size: 12pt; color: #000000"
                    ><span
                      style="
                  font-family: 'Segoe UI', 'Arial', sans-serif;
                  color: #000000;
                ">{@html col.subhead || ""}</span
                    ></span
                  ></a
                >
              </p>
            {/if}
          </td>
        {/each}
      </tr>
    </table>
  </td>
</tr>
