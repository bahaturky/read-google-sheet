require('dotenv').config()
const express = require('express')
const cron = require('node-cron')
const { GoogleSpreadsheet } = require('google-spreadsheet')

const app = express()

const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOC_ID)

const updateTime = '* * * * *'

async function main() {
    // await doc.useServiceAccountAuth(creds)
    await doc.useApiKey(process.env.GOOGLE_PRIVATE_KEY);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle['BTC'];
    const rows = await sheet.getRows();
    rows.map(row => {
        console.log(row._rawData)
    })

    // create order in here.

}

cron.schedule(updateTime, async () => {
    console.log('Get Data...')
    main()
})

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(3001, () => {
    console.log('Sever is running')
})


// main()