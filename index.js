const fs = require('fs')

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
    fs.readFile(`${__dirname}/app/views/index.html`, 'utf8', (err, data) => {
        res.send(data)
    })
})

app.listen(3000, () => console.log('Running at port 3000'))