<template>
  <div
    class="relative bg-white rounded shadow hover:shadow-lg transition-all duration-150 transform hover:-translate-y-1"
  >
    <g-image
      v-if="post.preview_image"
      :src="post.preview_image"
      :alt="post.title"
      class="w-full h-64 object-cover rounded-t"
    />
    <div class="p-10">
      <h3 class="text-2xl font-semibold">
        {{ post.title }}
      </h3>
      <div class="mt-4 text-sm">
        {{ post.publishedAtFormatted }}
      </div>
      <div class="mt-4">
        <p>
          {{ post.excerpt }}
        </p>
      </div>
    </div>
    <g-link :to="post.path" class="absolute inset-0 opacity-0">Далее</g-link>
  </div>
</template>

<script>
import Post from '~/models/Post'

export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
}
</script>
