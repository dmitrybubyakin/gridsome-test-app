export default class Post {
  constructor(data) {
    for (const key in data) {
      this[key] = data[key]
    }
  }

  get publishedAtFormatted() {
    return new Date(this.published_at).toDateString()
  }
}
