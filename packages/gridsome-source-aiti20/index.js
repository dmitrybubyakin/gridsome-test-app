const loadBlogPosts = require('./crawler')

module.exports = (api, options) => {
  const { typeName = 'Aiti20BlogPost', crawlerOptions = {} } = options

  api.loadSource(async (actions) => {
    const collection = actions.addCollection(typeName)

    const posts = await loadBlogPosts(crawlerOptions)

    posts
      .sort((a, b) => new Date(a.published_at) - new Date(b.published_at))
      .forEach((post) => {
        collection.addNode(post)
      })
  })
}
