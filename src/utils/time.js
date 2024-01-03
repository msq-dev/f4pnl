export function formatDate(d) {
  const date = new Date(d)

  let day, month, year

  day = date.getDate()
  month = date.getMonth() + 1
  year = date.getFullYear()

  day = day.toString().padStart(2, "0")
  month = month.toString().padStart(2, "0")

  return `${day}.${month}.${year}`
}

export function datePrefix(date) {
  let day, month, year

  day = date.getDate()
  month = date.getMonth() + 1
  year = String(date.getFullYear()).slice(-2)

  day = day.toString().padStart(2, "0")
  month = month.toString().padStart(2, "0")

  return `${year}${month}${day}`
}
