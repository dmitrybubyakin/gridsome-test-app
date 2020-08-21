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
    {
      use: 'gridsome-source-google-sheets',
      options: {
        apiKey: process.env.GOOGLE_API_KEY,
        spreadsheets: [
          {
            spreadsheetId: '16FSRrGvJZwT5qzDcFkMFENTANpo_NhRRtB7syPGhVoE',
            sheets: [{ typeName: 'Stats', range: 'Stats' }],
          },
        ],
        generateNodes: (rows) => rows.map((row) => ({ key: row[0], value: row[1] })),
      },
    },
  ],

  templates: {
    Post: '/blog/:slug',
  },
}
