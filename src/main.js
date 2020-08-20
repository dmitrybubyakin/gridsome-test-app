import '~/assets/style/global.scss'
import DefaultLayout from '~/layouts/Default.vue'

// eslint-disable-next-line no-unused-vars
export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'ru' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600&display=swap',
  })

  Vue.component('Layout', DefaultLayout)

  router.addRoutes([
    {
      path: '/',
      redirect: '/blog/',
    },
  ])
}
