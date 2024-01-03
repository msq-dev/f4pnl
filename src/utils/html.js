export function htmlRgbToHex(htmlString) {
  const rgbRegex = /(rgb\(\d+,\s?\d+,\s?\d+\))/g
  return htmlString.replace(rgbRegex, replacer)

  function replacer(match) {
    const hexValue = match
      .replace(/[rgb()]/g, "")
      .split(",")
      .map((c) => componentToHex(parseInt(c)))
      .join("")

    return `#${hexValue}`
  }

  // courtesy of https://stackoverflow.com/a/5624139
  function componentToHex(c) {
    const hex = c.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }
}

export function strip(html) {
  let doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent || ""
}

export function matomoParams(prefix, placement) {
  return `?mtm_campaign=${prefix}&mtm_source=newsletter&mtm_placement=${placement}`
}
