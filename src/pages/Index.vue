<template>
  <Layout>
    <h1 class="text-4xl text-center font-medium">Блог компании</h1>

    <template v-for="index in 100">
      <div
        :key="index"
        class="relative bg-white mt-16 p-10 rounded shadow hover:shadow-lg transition-all duration-150 transform hover:-translate-y-1"
      >
        <h3 class="text-2xl font-semibold">
          Летний тимбилдинг «IT 2.0». Отдохнули бодро и весело!
        </h3>
        <div class="mt-4 text-sm">
          30.06.20
        </div>
        <p class="mt-4">
          Лето – это традиционно пора корпоративов на свежем воздухе. А наша компания любит отдыхать ярко, вкусно и
          очень весело! Собрав коллег на пляжном комплексе «Варадеро», мы провели летний тимбилдинг, что особенно
          актуально сейчас, в период выхода из режима самоизоляции.
        </p>

        <a href="/about" class="absolute inset-0 opacity-0">Далее</a>
      </div>
    </template>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
}
</script>
