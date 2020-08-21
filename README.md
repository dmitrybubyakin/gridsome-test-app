# Gridsome Test App

 - `cp .env.example .env`


## Deploy from Google Sheets

1. Create hook - https://vercel.com/docs/v2/more/deploy-hooks
2. Add the following script to Google Sheets

```js
function onOpen(event) {
    var menu = SpreadsheetApp.getUi().createMenu('Website')

    menu.addItem('Deploy', 'deploy')

    menu.addToUi()
}

function deploy() {
    var hook = 'DEPLOYMENT_HOOK'

    var response = JSON.parse(UrlFetchApp.fetch(hook).getContentText())

    SpreadsheetApp.getUi().alert('Deployment state: ' + response.job.state)
}
```
