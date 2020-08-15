module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],
}
