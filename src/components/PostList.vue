<template>
  <div class="space-y-16 mt-16">
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'

export default {
  components: {
    PostPreview,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
