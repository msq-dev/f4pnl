<script>
  const FONTS = {
    sans: `'Segoe UI', 'Arial', sans-serif`,
    serif: `Palatino, Georgia, serif`,
  }

  const COLORS = {
    normal: "#000000",
    accent: "#003f69",
  }

  export let fontSize = 12
  export let fontWeight = 400
  export let fontFamily = "sans"
  export let color = "normal"
  export let text = "Lorem Ipsum"
  export let noMargin = false
</script>

<p style={noMargin ? "margin: 0px !important" : ""}>
  <span
    style="font-size: {fontSize}pt; font-weight: {fontWeight}; color: {COLORS[
      color
    ]};"
  >
    <span
      style="
      font-family: {FONTS[fontFamily]};
      color: {COLORS[color]};
    ">{text}</span
    ></span
  >
</p>
