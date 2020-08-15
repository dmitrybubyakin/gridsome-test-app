import DefaultLayout from '~/layouts/Default.vue'

// eslint-disable-next-line no-unused-vars
export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
