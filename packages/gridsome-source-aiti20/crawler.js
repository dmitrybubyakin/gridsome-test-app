const { Scraper, Root, DownloadContent, OpenLinks, CollectContent } = require('nodejs-web-scraper')

function wrapArray(array) {
  return Array.isArray(array) ? array : [array]
}

function formatImagePath(path, options) {
  if (!path) {
    return null
  }

  const filename = wrapArray(path)[0].split('/').reverse()[0]

  return `${options.filePath}/${filename}`
}

function formatDate(date) {
  let [day, month, year] = date.split('.')

  if (year.length === 2) {
    year = `20${year}`
  }

  return `${year}-${month}-${day}`
}

module.exports = async (options) => {
  const posts = []

  if (!options.filePath) {
    throw new Error('filePath is required.')
  }

  const scraper = new Scraper({
    baseSiteUrl: `https://aiti20.com`,
    startUrl: `https://aiti20.com/blog`,
    concurrency: 10,
    maxRetries: 3,
    cloneImages: false,
    ...options,
  })

  const getPageObject = async (pageObject) => {
    posts.push({
      id: posts.length + 1,
      origin: pageObject.address,
      slug: pageObject.address.match(/blog\/([^.]+)/)[1], // https://aiti20.com/blog/8-den-rojdeniya.html => 8-den-rojdeniya
      title: pageObject.title,
      excerpt: wrapArray(pageObject.content)[0],
      content: wrapArray(pageObject.content),
      published_at: formatDate(pageObject.publishedAt), // 30.06.20|30.06.2020 => 2020-06-30,
      preview_image: formatImagePath(pageObject.previewImage, options), // https://aiti20.com/media/pics/new-year.png => new-year.png
    })
  }

  const root = new Root({ pagination: { queryString: 'page', begin: 1, end: 10 } })
  const post = new OpenLinks('h4 a', { name: 'post', getPageObject })
  const title = new CollectContent('.content_blogInt h1', { name: 'title' })
  const publishedAt = new CollectContent('.content_blogInt .date', { name: 'publishedAt' })
  const content = new CollectContent('.content_blogInt > div > p', { name: 'content' })
  const previewImage = new DownloadContent('.content_blogInt img', { name: 'previewImage' })

  root.addOperation(post)
  post.addOperation(title)
  post.addOperation(publishedAt)
  post.addOperation(content)
  post.addOperation(previewImage)

  await scraper.scrape(root)

  return posts
}
