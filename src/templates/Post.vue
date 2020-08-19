<template>
  <Layout>
    <PostView :post="post" />
  </Layout>
</template>

<page-query>
query($id: ID!) {
  post(id: $id) {
    id
    path
    origin
    title
    excerpt
    content
    published_at
    preview_image
  }
}
</page-query>

<script>
import PostView from '~/components/PostView'
import Post from '~/models/Post'

export default {
  metaInfo() {
    return {
      title: this.post.title,
      meta: [{ name: 'description', content: this.post.excerpt }],
    }
  },

  components: {
    PostView,
  },

  computed: {
    post() {
      return new Post(this.$page.post)
    },
  },
}
</script>
