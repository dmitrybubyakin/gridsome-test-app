<template>
  <div class="bg-white rounded shadow">
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
        <p v-for="(line, index) in post.content" :key="index">
          {{ line }}
        </p>
      </div>
      <div class="flex mt-4">
        <a :href="post.origin" target="_blank" class="ml-auto underline text-blue-500 hover:no-underline">Оригинал</a>
      </div>
    </div>
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
