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
  @apply font-sans antialiased min-h-full text-gray-900;
  background: linear-gradient(-15deg, theme('colors.gray.200') 0%, theme('colors.white') 100%);
  background-attachment: fixed;
}
</style>
