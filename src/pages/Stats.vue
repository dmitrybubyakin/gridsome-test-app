<template>
  <Layout>
    <h1 class="text-4xl text-center font-medium">Stats</h1>

    <div class="mt-16">
      <div v-for="edge in $page.stats.edges" :key="edge.node.key" class="flex p-2 hover:bg-gray-300">
        <div class="w-2/3">
          <span class="font-light">{{ edge.node.key }}</span>
        </div>
        <div class="w-1/3">
          <span>{{ edge.node.value }}</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  stats: allStats {
    edges {
      node {
        key
        value
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Stats',
  },
}
</script>
