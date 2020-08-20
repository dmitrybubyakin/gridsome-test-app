<template>
  <div class="mx-auto max-w-4xl my-16">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html {
  @apply bg-gradient-to-br from-white to-gray-300 font-sans antialiased min-h-full text-gray-900;
  background-attachment: fixed;
}
</style>
