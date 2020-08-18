<template>
  <div
    class="relative bg-white mt-16 rounded shadow hover:shadow-lg transition-all duration-150 transform hover:-translate-y-1"
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
        {{ publishedAtFormatted }}
      </div>
      <p class="mt-4">
        {{ post.excerpt }}
      </p>
    </div>
    <a :href="post.slug" class="absolute inset-0 opacity-0">Далее</a>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    publishedAtFormatted() {
      return new Date(this.post.published_at).toDateString()
    },
  },
}
</script>
