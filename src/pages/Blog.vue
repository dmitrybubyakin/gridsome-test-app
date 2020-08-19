<template>
  <Layout>
    <h1 class="text-4xl text-center font-medium">Блог компании</h1>

    <PostList :posts="posts" />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        path
        title
        excerpt
        published_at
        preview_image
      }
    }
  }
}
</page-query>

<script>
import PostList from '~/components/PostList'
import Post from '~/models/Post'

export default {
  metaInfo: {
    title: 'Blog',
  },

  components: {
    PostList,
  },

  computed: {
    posts() {
      return this.$page.posts.edges.map((edge) => new Post(edge.node))
    },
  },
}
</script>
