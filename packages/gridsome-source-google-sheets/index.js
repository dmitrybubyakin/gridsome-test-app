const { google } = require('googleapis')

const generateNodesFromRows = (rows) => {
  const headers = rows.shift()

  return rows.map((row, rowIndex) => {
    return headers.reduce((header, key, index) => ({ ...header, [key]: row[index], id: rowIndex }), {})
  })
}

module.exports = (api, options) => {
  const { apiKey, spreadsheets = [], generateNodes = generateNodesFromRows } = options

  const client = google.sheets({
    version: 'v4',
    auth: apiKey,
  })

  const loadNodes = async (spreadsheet, sheet) => {
    return client.spreadsheets.values
      .get({ spreadsheetId: spreadsheet.spreadsheetId, range: sheet.range })
      .then((response) => generateNodes(response.data.values || []))
  }

  spreadsheets.forEach((spreadsheet) => {
    spreadsheet.sheets.forEach((sheet) => {
      api.loadSource(async (actions) => {
        const collection = actions.addCollection(sheet.typeName)

        const nodes = await loadNodes(spreadsheet, sheet)

        nodes.forEach((node) => collection.addNode(node))
      })
    })
  })
}
