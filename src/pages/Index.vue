<template>
  <Layout>
    <h1 class="text-4xl text-center font-medium">Блог компании</h1>

    <PostPreview v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
  </Layout>
</template>

<page-query>
query {
  posts: allAiti20BlogPost {
    edges {
      node {
        id
        slug
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
import PostPreview from '~/components/PostPreview'

export default {
  metaInfo: {
    title: 'Blog',
  },

  components: {
    PostPreview,
  },
}
</script>
