const path = require('path')

module.exports = {
  siteName: 'IT 2.0 Blog',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: 'gridsome-source-aiti20',
      options: {
        typeName: 'Post',
        crawlerOptions: {
          filePath: path.resolve(__dirname, './src/assets/dynamic-content/blog'),
        },
      },
    },
  ],

  templates: {
    Post: '/blog/:slug',
  },
}
