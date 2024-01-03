export function fetchAllWpPosts(url, page = 1, previousResponse = []) {
  let totalPages
  return fetch(`${url}&page=${page}`)
    .then((res) => {
      totalPages = res.headers.get("x-wp-totalpages")
      return res.json()
    })
    .then((newResponse) => {
      const response = [...previousResponse, ...newResponse]
      if (page < totalPages) {
        page++
        return fetchAllWpPosts(url, page, response)
      }
      return response
    })
}

export async function fetchJson(url) {
  const res = await fetch(url)
  const jsonData = await res.json()

  if (res.ok) {
    return jsonData
  } else {
    throw new Error("Es ist ein Fehler aufgetreten :(")
  }
}

export function makeWpPostItem(item) {
  let postInfo = {
    postId: item.id,
    title: item.title.rendered,
    date: item.date,
    link: item.link,
    imgUrl: item._embedded["wp:featuredmedia"][0].source_url,
    thumbnail:
      item._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
        .source_url,
    altText: "",
    isSelected: false,
  }

  return postInfo
}

export async function fetchSinglePost(url) {
  const postUrl = new URL(url)
  const pathSegments = postUrl.pathname.split("/").filter((s) => s)
  const slug = pathSegments.at(-1)

  const jsonData = await fetchJson(
    "https://f4p.online/wp-json/wp/v2/posts?_embed&slug=" + slug
  )

  const singlePostInfo = makeWpPostItem(jsonData[0])

  return singlePostInfo
}
